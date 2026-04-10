import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3-force';

export interface CharacterNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  image: string;
  color: string;
  realAnimal: string;
}

export interface CharacterLink extends d3.SimulationLinkDatum<CharacterNode> {
  source: string | CharacterNode;
  target: string | CharacterNode;
  label: string;
}

interface CharacterNetworkProps {
  characters: any[];
  onSelectCharacter: (name: string) => void;
}

const CharacterNetwork: React.FC<CharacterNetworkProps> = ({ characters, onSelectCharacter }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Convert characters to D3 format based on name
  const rawNodes = useMemo(() => characters.map(c => ({
    id: c.name,
    name: c.name,
    image: c.image,
    color: c.color,
    realAnimal: c.realAnimal,
    x: Math.random() * 800 - 400,
    y: Math.random() * 600 - 300,
  })), [characters]);

  // Define hardcoded canonical lore relationships between characters
  const rawLinks = useMemo(() => {
    const list = [
      // Core Gang
      { source: "SpongeBob SquarePants", target: "Patrick Star", label: "Best Friends" },
      { source: "SpongeBob SquarePants", target: "Squidward Tentacles", label: "Neighbors / Coworkers" },
      { source: "SpongeBob SquarePants", target: "Mr. Krabs", label: "Employee & Boss" },
      { source: "SpongeBob SquarePants", target: "Sandy Cheeks", label: "Karate Buddies" },
      { source: "SpongeBob SquarePants", target: "Gary the Snail", label: "Owner & Pet" },
      { source: "SpongeBob SquarePants", target: "Mrs. Puff", label: "Student & Teacher" },
      // Villains & Adversaries
      { source: "Plankton", target: "Mr. Krabs", label: "Business Rivals" },
      { source: "Plankton", target: "Karen Plankton", label: "Husband & Wife" },
      { source: "Plankton", target: "SpongeBob SquarePants", label: "Adversaries" },
      // Mermaid Man & Barnacle Boy
      { source: "Mermaid Man", target: "Barnacle Boy", label: "Superheroes" },
      { source: "Mermaid Man", target: "SpongeBob SquarePants", label: "Biggest Fan" },
      { source: "Mermaid Man", target: "Man Ray", label: "Arch Nemesis" },
      { source: "Mermaid Man", target: "Dirty Bubble", label: "Nemesis" },
      // Krabs Family
      { source: "Mr. Krabs", target: "Pearl Krabs", label: "Father & Daughter" },
      { source: "Mr. Krabs", target: "Mama Krabs", label: "Mother & Son" },
      { source: "Mr. Krabs", target: "Victor Krabs", label: "Father & Son" },
      { source: "Mr. Krabs", target: "Grandpa Redbeard", label: "Grandfather" },
      // Squidward's Circle
      { source: "Squidward Tentacles", target: "Squilliam Fancyson", label: "High School Rivals" },
      { source: "Squidward Tentacles", target: "Squilvia", label: "Love Interest" },
      { source: "Squidward Tentacles", target: "Mrs Tentacles", label: "Mother & Son" },
      // SpongeBob's Extended Family & Versions
      { source: "SpongeBob SquarePants", target: "Grandma SquarePants", label: "Grandson" },
      { source: "SpongeBob SquarePants", target: "Harold SquarePants", label: "Father & Son" },
      { source: "SpongeBob SquarePants", target: "Margaret SquarePants", label: "Mother & Son" },
      { source: "SpongeBob SquarePants", target: "Stanley S. SquarePants", label: "Cousins" },
      { source: "SpongeBob SquarePants", target: "SpongeGar", label: "Prehistoric Ancestor" },
      { source: "SpongeBob SquarePants", target: "DoodleBob", label: "Evil Drawing" },
      // Sea & Wilderness
      { source: "Jellyfish King", target: "Queen Jellyfish", label: "Monarchs" },
      { source: "SpongeBob SquarePants", target: "Jellyfish King", label: "Jellyfisher" },
      { source: "Kevin C. Cucumber", target: "SpongeBob SquarePants", label: "Idol & Fan" },
      { source: "Sea Bear", target: "Sea Rhinoceros", label: "Predators" },
      { source: "Sea Bear", target: "SpongeBob SquarePants", label: "Attacker" },
      { source: "Giant Eel", target: "SpongeBob SquarePants", label: "Threat" },
      // The Movie Arc
      { source: "David Hasselhoff", target: "SpongeBob SquarePants", label: "Saviors" },
      { source: "David Hasselhoff", target: "Patrick Star", label: "Saviors" },
      { source: "Dennis", target: "SpongeBob SquarePants", label: "Hitman" },
      { source: "The Cyclops", target: "SpongeBob SquarePants", label: "Captor" },
      { source: "King Neptune", target: "Princess Mindy", label: "Father & Daughter" },
      // Live Action
      { source: "Patchy the Pirate", target: "Potty the Parrot", label: "Host & Parrot" },
      { source: "Patchy the Pirate", target: "SpongeBob SquarePants", label: "President of Fan Club" },
      { source: "Hans", target: "SpongeBob SquarePants", label: "The Hand" },
      // One-offs & Specific episodes
      { source: "Bubble Buddy", target: "SpongeBob SquarePants", label: "Imaginary Friend" },
      { source: "Bubble Bass", target: "SpongeBob SquarePants", label: "Picky Customer" },
      { source: "Flats the Flounder", target: "SpongeBob SquarePants", label: "Bully" },
      { source: "Magic Conch Shell", target: "SpongeBob SquarePants", label: "Deity & Follower" },
      { source: "Magic Conch Shell", target: "Patrick Star", label: "Deity & Follower" },
      { source: "Jack Kahuna Laguna", target: "SpongeBob SquarePants", label: "Surfing Mentor" },
      { source: "Master Udon", target: "Sandy Cheeks", label: "Martial Arts Rivals" },
      { source: "Chip", target: "Penny", label: "Inanimate Friends" },
      { source: "Chip", target: "SpongeBob SquarePants", label: "Friends" },
      { source: "Narlene", target: "Nobby", label: "Siblings" },
      { source: "Flying Dutchman", target: "Mr. Krabs", label: "Soul Collector" },
      { source: "Flying Dutchman", target: "SpongeBob SquarePants", label: "Frenemies" },
      // Town Cluster
      { source: "Larry the Lobster", target: "Don the Whale", label: "Gym Bros" },
      { source: "Fred", target: "Tom", label: "Townsfolk" },
      { source: "Fred", target: "Nancy", label: "Townsfolk" },
      { source: "Fred", target: "Harold", label: "Townsfolk" },
      { source: "Fred", target: "Scooter", label: "Townsfolk" },
      { source: "Fred", target: "Nat Peterson", label: "Townsfolk" },
      { source: "Perch Perkins", target: "Fred", label: "News Broadcaster" },
      { source: "Old Man Jenkins", target: "SpongeBob SquarePants", label: "Acquaintance" },
      // Miscellaneous Connections
      { source: "Red Mist Squidward", target: "Squidward Tentacles", label: "Creepypasta Alter Ego" },
      { source: "Captain Blue", target: "SpongeBob SquarePants", label: "Neighbor" }
    ];

    // Filter out links where nodes might not exist
    const nodeIds = new Set(rawNodes.map(n => n.id));
    return list.filter(l => nodeIds.has(l.source) && nodeIds.has(l.target));
  }, [rawNodes]);

  const [connectedNodes, setConnectedNodes] = useState<CharacterNode[]>([]);
  const [isolatedNodes, setIsolatedNodes] = useState<CharacterNode[]>([]);
  const [links, setLinks] = useState<CharacterLink[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    
    let isMounted = true;
    const updateDimensions = () => {
      if (containerRef.current && isMounted) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    
    // We must wait slightly for layout to settle, especially if nav UI resizes
    setTimeout(updateDimensions, 50);
    window.addEventListener('resize', updateDimensions);
    return () => {
      isMounted = false;
      window.removeEventListener('resize', updateDimensions);
    }
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Determine which nodes actually have connections
    const connectedIds = new Set<string>();
    rawLinks.forEach(link => {
      connectedIds.add(typeof link.source === 'string' ? link.source : (link.source as any).id);
      connectedIds.add(typeof link.target === 'string' ? link.target : (link.target as any).id);
    });

    const connected = rawNodes.filter(n => connectedIds.has(n.id)).map(n => ({ ...n })) as CharacterNode[];
    const isolated = rawNodes.filter(n => !connectedIds.has(n.id)).map(n => ({ ...n })) as CharacterNode[];

    // Lock SpongeBob exactly to the center
    connected.forEach(n => {
      if (n.id === "SpongeBob SquarePants") {
        n.fx = dimensions.width / 2;
        n.fy = dimensions.height / 2;
      }
    });

    // Scaling the network logic with more spacious distances
    const simLinks = rawLinks.map(l => ({ ...l }));
    const linkSim = d3.forceLink<CharacterNode, CharacterLink>(simLinks).id(d => d.id).distance(180);

    const simulation = d3.forceSimulation<CharacterNode>(connected)
      .force('charge', d3.forceManyBody().strength(-800))
      .force('link', linkSim)
      .force('center', d3.forceCenter(dimensions.width / 2, dimensions.height / 2))
      .force('collide', d3.forceCollide().radius(70).iterations(3));
      
    // Enforce container bounds directly during Physics calculation!
    simulation.on('tick', () => {
      connected.forEach(node => {
        if (node.x === undefined || node.y === undefined) return;
        const radiusConfig = 65; // larger pad for 2x network
        node.x = Math.max(radiusConfig, Math.min(dimensions.width - radiusConfig, node.x));
        node.y = Math.max(radiusConfig, Math.min(dimensions.height - radiusConfig, node.y));
      });
    });

    // Fast-forward simulation to make it completely static instantly
    simulation.tick(300);
    simulation.stop();

    setConnectedNodes(connected);
    setIsolatedNodes(isolated);
    setLinks([...simLinks]);

  }, [rawNodes, rawLinks, dimensions]);

  return (
    <div className="w-full max-w-[1280px] mx-auto pb-10 flex flex-col items-center">
      {/* Network Map area bounded strictly to roughly the boundaries between the navigation icons */}
      <div className="w-full max-w-[1100px] mx-auto h-[75vh] max-h-[850px] min-h-[650px] relative mt-6">
        <div ref={containerRef} className="w-full h-full relative">
        
        {/* SVG layer for Links and Labels */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {links.map((link, i) => {
          const source = link.source as CharacterNode;
          const target = link.target as CharacterNode;
          if (!source.x || !source.y || !target.x || !target.y) return null;
          
          const midX = (source.x + target.x) / 2;
          const midY = (source.y + target.y) / 2;
          let angle = Math.atan2(target.y - source.y, target.x - source.x) * (180 / Math.PI);
          
          // Keep text readable (right-side up)
          if (angle > 90 || angle < -90) {
            angle += 180;
          }

          return (
            <g key={i}>
              <line
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                className="transition-all duration-75"
              />
              <text
                x={midX}
                y={midY}
                transform={`rotate(${angle}, ${midX}, ${midY})`}
                textAnchor="middle"
                dy="-6" // Push slightly further up from the line
                className="font-body font-bold text-[11px] md:text-[13px] fill-black pointer-events-none opacity-90 tracking-wide"
                style={{ 
                  filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,1)) drop-shadow(0px 0px 4px rgba(255,255,255,0.9))' 
                }}
              >
                {link.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* HTML layer for Connected Nodes */}
      {connectedNodes.map(node => {
        if (!node.x || !node.y) return null;
        return (
          <div
            key={node.id}
            className={`absolute flex flex-col items-center justify-center transition-transform hover:scale-125 hover:z-50 group focus:outline-none focus:ring-4 focus:ring-white`}
            style={{
              left: node.x,
              top: node.y,
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
            }}
          >
            <button
              onClick={() => onSelectCharacter(node.id)}
              className={`rounded-full shadow-md ${node.color} bg-white flex items-center justify-center w-full h-full`}
              style={{ borderWidth: '3px' }}
            >
              {node.image ? (
                 <img src={node.image} alt={node.name} className="w-full h-full object-cover rounded-full p-1" />
              ) : (
                 <span className="text-xl font-bold text-gray-400">?</span>
              )}
            </button>
            
            {/* Always visible permanently underneath */}
            <div className="absolute top-[64px] text-center w-max max-w-[120px] left-1/2 -translate-x-1/2 text-[12px] md:text-[14px] font-body font-bold text-foreground pointer-events-none"
                 style={{ 
                   filter: 'drop-shadow(0px 0px 3px rgba(255,255,255,1)) drop-shadow(0px 0px 6px rgba(255,255,255,0.8))'
                 }}>
              {node.name}
            </div>
          </div>
        );
      })}
        </div>
      </div>

      {/* Grid area for Isolated Nodes placed at the bottom */}
      {isolatedNodes.length > 0 && (
        <div className="mt-12 pt-8 px-4 flex flex-col items-center w-full max-w-6xl">
          <div className="flex flex-wrap justify-center gap-6">
            {isolatedNodes.map(node => (
              <div
                key={node.id}
                className={`relative flex flex-col items-center transition-transform hover:scale-125 hover:z-50 group focus:outline-none focus:ring-4 focus:ring-white mb-6`}
                style={{ width: '60px' }}
              >
                <button
                  onClick={() => onSelectCharacter(node.id)}
                  className={`rounded-full shadow-md ${node.color} bg-white flex items-center justify-center w-[60px] h-[60px]`}
                  style={{ borderWidth: '3px' }}
                >
                  {node.image ? (
                    <img src={node.image} alt={node.name} className="w-full h-full object-cover rounded-full p-1" />
                  ) : (
                    <span className="text-xl font-bold text-gray-400">?</span>
                  )}
                </button>
                
                {/* Permanently visible underneath */}
                <div className="absolute top-[64px] text-center w-max max-w-[120px] left-1/2 -translate-x-1/2 text-[12px] md:text-[14px] font-body font-bold text-foreground pointer-events-none"
                     style={{ 
                       filter: 'drop-shadow(0px 0px 3px rgba(255,255,255,1)) drop-shadow(0px 0px 6px rgba(255,255,255,0.8))'
                     }}>
                  {node.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterNetwork;
