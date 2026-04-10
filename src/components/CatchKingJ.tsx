import React, { useState, useEffect, useRef } from "react";
import jellyfishFields from "@/assets/jellyfish_fields.jpg";
import kingJ from "@/assets/KingJ.gif";
import jelly2 from "@/assets/jelly2.png";
import jelly4 from "@/assets/jelly4.png";
import jelly5 from "@/assets/jelly5.png";
import jelly6 from "@/assets/jelly6.png";
import jellyGif1 from "@/assets/1111.gif";
import jellyGif2 from "@/assets/2222.gif";
import jellyGif3 from "@/assets/3333.gif";
import jellyGif4 from "@/assets/4444.gif";
import jellyGif5 from "@/assets/5555.gif";
import jellyGif6 from "@/assets/6666.gif";
import net1 from "@/assets/net1.png";
import net2 from "@/assets/net2.png";
import net3 from "@/assets/net3.png";
import net4 from "@/assets/net4.png";

const nets = [net1, net2, net3, net4];

// Generic Jellyfish component for wandering
function Jellyfish({ 
  src, 
  sizeClass = "w-32 h-32 md:w-48 md:h-48", 
  onClick, 
  zIndex = 20,
  isKing = false,
  startPos
}: { 
  src: string; 
  sizeClass?: string; 
  onClick?: (e: React.MouseEvent) => void;
  zIndex?: number;
  isKing?: boolean;
  startPos?: { x: number, y: number }
}) {
  const xRef = useRef<HTMLDivElement>(null);
  const yRef = useRef<HTMLDivElement>(null);

  // Calculate randomized, decoupled transition durations for X and Y to force rapid Lissajous curved arcs
  const [transitionX] = useState(`${isKing ? 2.8 : 1.5 + Math.random() * 1.5}s`);
  const [transitionY] = useState(`${isKing ? 3.4 : 2.0 + Math.random() * 1.5}s`);

  // Anchor the float duration, completely disabling it for KingJ to prevent any CSS transform clashes with the massive GIF
  const [floatAnim] = useState(isKing ? "none" : `kingJFloat ${2.5 + Math.random()}s ease-in-out infinite`);

  useEffect(() => {
    // Determine target boundaries and set initial positions
    const initialX = startPos ? startPos.x : 15 + Math.random() * 70;
    const initialY = startPos ? startPos.y : 15 + Math.random() * 70;
    
    if (xRef.current && yRef.current) {
      xRef.current.style.transform = `translateX(calc(${initialX}vw - 50%))`;
      yRef.current.style.transform = `translateY(calc(${initialY}vh - 50%))`;
    }

    const move = () => {
      if (xRef.current && yRef.current) {
        // Strict boundary checking: 15% to 85% to absolutely ensure it never goes off screen
        const nx = 15 + Math.random() * 70;
        const ny = 15 + Math.random() * 70;
        xRef.current.style.transform = `translateX(calc(${nx}vw - 50%))`;
        yRef.current.style.transform = `translateY(calc(${ny}vh - 50%))`;
      }
    };
    
    // Very frequent movement interval, misaligned with the CSS durations.
    // This constantly updates the target midpoint before it arrives, forging continuous irregular rapid arcs
    const delay = isKing ? 2600 : 1200 + Math.random() * 800;
    const interval = setInterval(move, delay);

    return () => clearInterval(interval);
  }, [isKing, startPos]);

  return (
    <div 
      className={`absolute select-none overflow-visible ${isKing ? "group cursor-none" : "pointer-events-none"}`}
      style={{ left: 0, top: 0, zIndex }}
    >
      <div 
        ref={xRef} 
        style={{ 
          transition: `transform ${transitionX} ease-in-out`,
          willChange: 'transform' 
        }}
      >
        <div 
          ref={yRef}
          style={{ 
            transition: `transform ${transitionY} ease-in-out`,
            willChange: 'transform' 
          }}
        >
          <div className={sizeClass}>
            <img 
              src={src} 
              alt="Jellyfish" 
              draggable={false}
              decoding="async"
              loading="lazy"
              fetchPriority={isKing ? "high" : "low"}
              className={`w-full h-full object-contain ${
                isKing ? "transition-transform duration-200 active:scale-90" : "filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
              }`}
              style={{ animation: floatAnim }}
              onPointerDown={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Component to generate the classic dense bubble wipe transition
function BubbleTransition() {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    // Generate 150 random bubbles for a dense rising effect
    const generated = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // % width
      size: 3 + Math.random() * 20, // vw for varying sizes
      delay: Math.random() * 0.7, // 0 to 0.7s stagger
      duration: 0.8 + Math.random() * 0.7, // 0.8s to 1.5s
    }));
    setBubbles(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden">
      {/* Render 150 bubbles */}
      {bubbles.map((b) => (
        <div 
          key={b.id}
          className="absolute bubble-sprite"
          style={{
            left: `${b.x}vw`,
            bottom: `-25vh`, // start below the screen
            width: `${b.size}vw`,
            height: `${b.size}vw`,
            marginLeft: `-${b.size / 2}vw`,
            animation: `riseBubble ${b.duration}s ease-in both`,
            animationDelay: `${b.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

export default function CatchKingJ({ onCatch }: { onCatch: () => void }) {
  // Custom Net Cursor State
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 }); // initially off-screen
  const [netFrame, setNetFrame] = useState(0);

  // Catch transition state
  const [caughtAt, setCaughtAt] = useState<{ x: number, y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Net animation frame loop (150ms per frame)
    const frameInterval = setInterval(() => {
      setNetFrame(prev => (prev + 1) % nets.length);
    }, 150);
    return () => clearInterval(frameInterval);
  }, []);

  const handleCatch = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (caughtAt) return; // Prevent double trigger

    setCaughtAt({ x: e.clientX, y: e.clientY });

    // Wait for the popup animation to cover the screen
    setTimeout(() => {
      onCatch();
    }, 1400); // Increased duration to let 70 bubbles fully pop in
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center bg-black cursor-none">
      <img 
        src={jellyfishFields} 
        alt="Jellyfish Fields" 
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none" 
      />
      
      <style>{`
        @keyframes kingJFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
      `}</style>

      {/* Decorative GIF Jellyfish floating organically around screen */}
      <Jellyfish src={jellyGif1} sizeClass="w-24 h-24 md:w-32 md:h-32" zIndex={10} />
      <Jellyfish src={jellyGif1} sizeClass="w-20 h-20 md:w-28 md:h-28" zIndex={11} />
      <Jellyfish src={jellyGif2} sizeClass="w-20 h-20 md:w-28 md:h-28" zIndex={12} />
      <Jellyfish src={jellyGif2} sizeClass="w-16 h-16 md:w-24 md:h-24" zIndex={13} />
      <Jellyfish src={jellyGif3} sizeClass="w-28 h-28 md:w-36 md:h-36" zIndex={14} />
      <Jellyfish src={jellyGif3} sizeClass="w-24 h-24 md:w-32 md:h-32" zIndex={15} />
      <Jellyfish src={jellyGif4} sizeClass="w-32 h-32 md:w-40 md:h-40" zIndex={16} />
      <Jellyfish src={jellyGif4} sizeClass="w-28 h-28 md:w-36 md:h-36" zIndex={17} />
      <Jellyfish src={jellyGif5} sizeClass="w-24 h-24 md:w-36 md:h-36" zIndex={18} />
      <Jellyfish src={jellyGif5} sizeClass="w-20 h-20 md:w-28 md:h-28" zIndex={19} />
      <Jellyfish src={jellyGif6} sizeClass="w-36 h-36 md:w-48 md:h-48" zIndex={20} />
      <Jellyfish src={jellyGif6} sizeClass="w-32 h-32 md:w-40 md:h-40" zIndex={21} />

      
      {/* King J Sprite */}
      {!caughtAt && (
        <Jellyfish 
          src={kingJ} 
          sizeClass="w-[clamp(180px,25vw,300px)] h-[clamp(180px,25vw,300px)]" 
          onClick={handleCatch} 
          isKing={true} 
          zIndex={50}
        />
      )}

      {/* Bubble Transition Mask */}
      {caughtAt && (
        <BubbleTransition />
      )}

      {/* Animated Net Cursor */}
      <div 
        className="fixed pointer-events-none z-[99990]"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img 
          src={nets[netFrame]} 
          alt="net cursor" 
          className="w-[400px] h-[400px] object-contain drop-shadow-lg"
          style={{ transform: 'rotate(-15deg)' }}
        />
      </div>
    </div>
  );
}
