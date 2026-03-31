// import React from "react";

export const HeroAnimation = () => {
  return (
    <div className="
      relative 
      hero-animation
      bg-[url('/abstract_2.jpg')]
      bg-cover
      bg-center
      bg-no-repeat
      ">

      <svg
        viewBox="0 0 900 420"
        width="100%"
        height="420"
        xmlns="http://www.w3.org/2000/svg"
        className="z-0"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#FF4D00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF4D00" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="flow" x1="0" y1="0" x2="900" y2="0">
            <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#FF6A2A" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF4D00" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="packetGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD2BF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF4D00" stopOpacity="0.5" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Logo */}
        <g transform="translate(450 210)" filter="url(#glow)">
          <circle r="95" fill="url(#coreGlow)">
            <animate
              attributeName="r"
              values="85;110;85"
              dur="4.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.35;0.7;0.35"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>

          <path
            d="M-2.57,-12.54 L2.04,0 L3.44,5.2 C3.68,6.12 4.15,6.75 4.68,6.74 L6.0,6.65 L6.0,6.65 L8.45,6.48 C8.75,6.46 9.0,6.7 9.03,7.0 L8.05,14.4 L6.5,25.0 L3.7,15.0 L1.9,6.5 L-1.0,6.7 L-3.0,6.8 L-6.0,6.0 L-6.5,0.0 L-3.5,-6.0 Z"
            fill="#FF4D00"
            transform="scale(8)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              dur="60s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Tenant Nodes */}
        <g fill="#FF6A2A" opacity="0.9">
          <circle cx="120" cy="80" r="5" />
          <circle cx="120" cy="340" r="5" />
          <circle cx="780" cy="100" r="5" />
          <circle cx="780" cy="320" r="5" />
        </g>

        {/* Paths to logo */}
        <g stroke="url(#flow)" strokeWidth="1.4" fill="none" opacity="0.25">
          <path id="p1" d="M120 80 C300 120 350 180 450 210" />
          <path id="p2" d="M120 340 C300 300 350 240 450 210" />
          <path id="p3" d="M780 100 C600 140 550 180 450 210" />
          <path id="p4" d="M780 320 C600 280 550 240 450 210" />
        </g>

        {/* Packets */}
        <g filter="url(#glow)">
          <circle r="3" fill="url(#packetGlow)" opacity="0.8">
            <animateMotion dur="3.2s" repeatCount="indefinite">
              <mpath href="#p1" />
            </animateMotion>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.3;1"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="2.5" fill="url(#packetGlow)" opacity="0.7">
            <animateMotion dur="4.1s" repeatCount="indefinite" begin="1s">
              <mpath href="#p2" />
            </animateMotion>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.2;1"
              dur="4.1s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="3" fill="url(#packetGlow)" opacity="0.8">
            <animateMotion dur="3.6s" repeatCount="indefinite" begin="0.5s">
              <mpath href="#p3" />
            </animateMotion>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.25;1"
              dur="3.6s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="2.5" fill="url(#packetGlow)" opacity="0.7">
            <animateMotion dur="4.5s" repeatCount="indefinite" begin="1.4s">
              <mpath href="#p4" />
            </animateMotion>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.2;1"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
      <div className="absolute inset-0 bg-white/85 z-10" />
    </div>
  );
};