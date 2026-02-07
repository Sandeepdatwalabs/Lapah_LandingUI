import React from 'react';

const Logo = ({ className = '', style = {} }) => {
    return (
        <svg
            width="240"
            height="60"
            viewBox="0 0 240 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <defs>
                <linearGradient id="neonGradient" x1="0" y1="0" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" /> {/* Added Cyan for tech feel */}
                </linearGradient>

                <filter id="techGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <clipPath id="clipText">
                    <rect x="0" y="0" width="100%" height="100%" />
                </clipPath>
            </defs>

            {/* ICON: Abstract Neural Network / "L" Fusion */}
            <g transform="translate(30, 30)">

                {/* The Structure: Futuristic L shape made of connected nodes */}
                <path
                    d="M-12 -18 C-12 -22 -8 -22 -8 -18 V 10 C-8 16 -2 16 4 16 H 14 C 18 16 18 20 14 20 H 4 C -8 20 -16 12 -16 0 V -18 Z"
                    fill="url(#neonGradient)"
                    filter="url(#techGlow)"
                />

                {/* The Data Stream: An intersecting orbital line */}
                <path
                    d="M-22 4 C -10 4 0 -8 8 -8 C 16 -8 22 4 22 4"
                    stroke="url(#neonGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.8"
                />

                {/* Animated Data Particle moving along the stream */}
                <circle r="3" fill="#ffffff" filter="url(#techGlow)">
                    <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M-22 4 C -10 4 0 -8 8 -8 C 16 -8 22 4 22 4"
                    />
                </circle>

                {/* Tech Nodes (Dots at key points) */}
                <circle cx="-12" cy="-18" r="2.5" fill="#ffffff" />
                <circle cx="18" cy="18" r="2.5" fill="#ffffff" />

            </g>

            {/* TEXT: Custom Modern Geometric Typography */}
            <g transform="translate(70, 42)">
                {/* Only using text for accessibility, visual is custom paths or font */}
                <text
                    fontFamily="'Outfit', sans-serif"
                    fontWeight="700"
                    fontSize="32"
                    letterSpacing="-1"
                    fill="white"
                >
                    lapah
                    <tspan fill="url(#neonGradient)" fontSize="38">.</tspan>
                    <tspan fontWeight="400" fill="rgba(255,255,255,0.7)">ai</tspan>
                </text>
            </g>
        </svg>
    );
};

export default Logo;
