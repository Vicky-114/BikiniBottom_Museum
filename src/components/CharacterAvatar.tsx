import { useEffect, useState } from "react";

const encodeSvg = (svg: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const initialsFromName = (name: string) => {
  const parts = name
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
};

export const buildCharacterFallbackDataUri = (
  name: string,
  colorA = "#f8fafc",
  colorB = "#dbeafe",
  textColor = "#0f3b63",
) => {
  const initials = initialsFromName(name);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorA}" />
          <stop offset="100%" stop-color="${colorB}" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="60" fill="url(#bg)" />
      <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="4" />
      <text
        x="60"
        y="68"
        text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="38"
        font-weight="700"
        fill="${textColor}"
      >${initials}</text>
    </svg>
  `;

  return encodeSvg(svg);
};

interface CharacterAvatarProps {
  src?: string;
  alt: string;
  className: string;
  fallbackSrc?: string;
}

const CharacterAvatar = ({ src, alt, className, fallbackSrc }: CharacterAvatarProps) => {
  const generatedFallback = fallbackSrc ?? buildCharacterFallbackDataUri(alt);
  const [currentSrc, setCurrentSrc] = useState(src || generatedFallback);

  useEffect(() => {
    setCurrentSrc(src || generatedFallback);
  }, [generatedFallback, src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== generatedFallback) {
          setCurrentSrc(generatedFallback);
        }
      }}
    />
  );
};

export default CharacterAvatar;
