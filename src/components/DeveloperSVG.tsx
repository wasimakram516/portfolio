'use client';

import React from 'react';
import { Box } from '@mui/material';
import { useThemeMode } from '@/components/Providers';

interface DeveloperSVGProps {
  width?: number;
  height?: number;
}

export default function DeveloperSVG({ width = 500, height = 460 }: DeveloperSVGProps) {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const cardBg = isDark ? '#0d1f38' : '#ffffff';
  const cardBorder = isDark ? 'rgba(79,142,247,0.25)' : 'rgba(79,142,247,0.22)';
  const codeBg = isDark ? '#060f1e' : '#f0f6ff';
  const lineGhost = isDark ? 'rgba(148,163,184,0.18)' : 'rgba(30,58,138,0.12)';

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 500 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Developer workspace illustration"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f8ef7" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#0d1f38' : '#f8fbff'} />
            <stop offset="100%" stopColor={isDark ? '#0a1628' : '#eef5ff'} />
          </linearGradient>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(79,142,247,0.15)" />
            <stop offset="100%" stopColor="rgba(0,212,255,0)" />
          </linearGradient>
          <filter id="softShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="16"
              floodColor={isDark ? 'rgba(0,0,0,0.55)' : 'rgba(79,142,247,0.18)'} />
          </filter>
          <filter id="tinyGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="rgba(79,142,247,0.5)" />
          </filter>
          <clipPath id="editorClip">
            <rect x="62" y="68" width="278" height="230" rx="0" />
          </clipPath>
        </defs>

        {/* ── Background ambient glow ── */}
        <ellipse cx="250" cy="230" rx="220" ry="180"
          fill="url(#glowGrad)" opacity="0.5" />

        {/* ════════════════════════════
             MAIN: Code Editor Window
            ════════════════════════════ */}
        <g filter="url(#softShadow)">
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,0; 0,-6; 0,0" dur="5s" repeatCount="indefinite" calcMode="easeInOut" />

            {/* Window frame */}
            <rect x="52" y="42" width="298" height="272" rx="14"
              fill={cardBg} stroke={cardBorder} strokeWidth="1.5" />

            {/* Title bar */}
            <rect x="52" y="42" width="298" height="36" rx="14"
              fill={isDark ? '#0a1628' : '#e8f0fe'} />
            <rect x="52" y="60" width="298" height="18"
              fill={isDark ? '#0a1628' : '#e8f0fe'} />

            {/* Traffic lights */}
            <circle cx="77" cy="60" r="6" fill="#f87171" />
            <circle cx="97" cy="60" r="6" fill="#fbbf24" />
            <circle cx="117" cy="60" r="6" fill="#4ade80" />

            {/* File tab */}
            <rect x="140" y="48" width="80" height="24" rx="6"
              fill={isDark ? '#0d1f38' : '#dbeafe'} />
            <rect x="148" y="56" width="10" height="8" rx="2" fill="#4f8ef7" opacity="0.7" />
            <rect x="162" y="58" width="38" height="4" rx="2" fill={lineGhost} />

            {/* Code area bg */}
            <rect x="52" y="78" width="298" height="236" rx="0"
              fill={codeBg} />
            <rect x="52" y="296" width="298" height="18" rx="0"
              fill={codeBg} />
            <rect x="52" y="296" width="298" height="18"
              fill={isDark ? 'rgba(0,0,0,0.2)' : 'rgba(79,142,247,0.04)'} />

            {/* Line numbers column */}
            <rect x="52" y="78" width="36" height="236"
              fill={isDark ? 'rgba(0,0,0,0.2)' : 'rgba(79,142,247,0.04)'} />

            {/* Line number dots */}
            {[0,1,2,3,4,5,6,7,8,9].map(i => (
              <rect key={i} x="64" y={95 + i * 20} width="12" height="3" rx="1.5"
                fill={lineGhost} />
            ))}

            {/* ── Code lines ── */}
            {/* Line 1: import */}
            <rect x="100" y="93" width="38" height="5" rx="2.5" fill="#c084fc" opacity="0.9" />
            <rect x="142" y="93" width="22" height="5" rx="2.5" fill="#4f8ef7" opacity="0.85" />
            <rect x="168" y="93" width="14" height="5" rx="2.5" fill={lineGhost} />
            <rect x="186" y="93" width="30" height="5" rx="2.5" fill="#00d4ff" opacity="0.8" />
            <rect x="220" y="93" width="16" height="5" rx="2.5" fill={lineGhost} />

            {/* Line 2: blank */}

            {/* Line 3: export function */}
            <rect x="100" y="113" width="34" height="5" rx="2.5" fill="#c084fc" opacity="0.9" />
            <rect x="138" y="113" width="44" height="5" rx="2.5" fill="#4ade80" opacity="0.85" />
            <rect x="186" y="113" width="52" height="5" rx="2.5" fill="#fbbf24" opacity="0.85" />
            <rect x="242" y="113" width="18" height="5" rx="2.5" fill={lineGhost} />

            {/* Line 4: return ( */}
            <rect x="112" y="133" width="34" height="5" rx="2.5" fill="#c084fc" opacity="0.85" />
            <rect x="150" y="133" width="10" height="5" rx="2.5" fill={lineGhost} />

            {/* Line 5: <div> */}
            <rect x="124" y="153" width="10" height="5" rx="2.5" fill={lineGhost} />
            <rect x="138" y="153" width="22" height="5" rx="2.5" fill="#f87171" opacity="0.9" />
            <rect x="164" y="153" width="14" height="5" rx="2.5" fill="#4f8ef7" opacity="0.8" />
            <rect x="182" y="153" width="18" height="5" rx="2.5" fill="#fbbf24" opacity="0.8" />
            <rect x="204" y="153" width="10" height="5" rx="2.5" fill={lineGhost} />

            {/* Line 6: text content */}
            <rect x="136" y="173" width="14" height="5" rx="2.5" fill={lineGhost} />
            <rect x="154" y="173" width="60" height="5" rx="2.5" fill="#00d4ff" opacity="0.75" />
            <rect x="218" y="173" width="14" height="5" rx="2.5" fill={lineGhost} />

            {/* Line 7: </div> */}
            <rect x="124" y="193" width="10" height="5" rx="2.5" fill={lineGhost} />
            <rect x="138" y="193" width="26" height="5" rx="2.5" fill="#f87171" opacity="0.85" />
            <rect x="168" y="193" width="10" height="5" rx="2.5" fill={lineGhost} />

            {/* Line 8: ); */}
            <rect x="112" y="213" width="14" height="5" rx="2.5" fill={lineGhost} />

            {/* Line 9: } */}
            <rect x="100" y="233" width="8" height="5" rx="2.5" fill={lineGhost} />

            {/* Line 10: active cursor line */}
            <rect x="100" y="253" width={isDark ? 88 : 88} height="5" rx="2.5" fill="#4f8ef7" opacity="0.4" />
            <rect x="192" y="251" width="2.5" height="9" rx="1.2" fill="#00d4ff">
              <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
            </rect>

            {/* Status bar */}
            <rect x="100" y="302" width="40" height="4" rx="2" fill="#4ade80" opacity="0.6" />
            <rect x="148" y="302" width="60" height="4" rx="2" fill={lineGhost} />
            <rect x="280" y="302" width="50" height="4" rx="2" fill={lineGhost} />
          </g>
        </g>

        {/* ════════════════════════════
             Browser preview (bottom-right)
            ════════════════════════════ */}
        <g filter="url(#softShadow)">
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,0; 4,-8; 0,0" dur="4.5s" repeatCount="indefinite" begin="1s" />

            <rect x="290" y="200" width="192" height="140" rx="12"
              fill={cardBg} stroke={cardBorder} strokeWidth="1.5" />

            {/* browser bar */}
            <rect x="290" y="200" width="192" height="28" rx="12"
              fill={isDark ? '#0a1628' : '#e8f0fe'} />
            <rect x="290" y="216" width="192" height="12"
              fill={isDark ? '#0a1628' : '#e8f0fe'} />

            <circle cx="307" cy="214" r="4.5" fill="#f87171" />
            <circle cx="321" cy="214" r="4.5" fill="#fbbf24" />
            <circle cx="335" cy="214" r="4.5" fill="#4ade80" />

            {/* url bar */}
            <rect x="346" y="207" width="122" height="14" rx="4"
              fill={isDark ? '#0d1f38' : '#dbeafe'} />
            <rect x="354" y="211" width="60" height="5" rx="2.5" fill="#4f8ef7" opacity="0.5" />

            {/* page content preview */}
            <rect x="304" y="237" width="164" height="8" rx="4"
              fill="url(#blueGrad)" opacity="0.7" />
            <rect x="304" y="252" width="110" height="5" rx="2.5" fill={lineGhost} />
            <rect x="304" y="263" width="130" height="5" rx="2.5" fill={lineGhost} />
            <rect x="304" y="274" width="90" height="5" rx="2.5" fill={lineGhost} />

            {/* CTA button mockup */}
            <rect x="304" y="288" width="68" height="20" rx="6"
              fill="url(#blueGrad)" opacity="0.85" />
            <rect x="380" y="288" width="52" height="20" rx="6"
              fill={isDark ? 'rgba(79,142,247,0.15)' : 'rgba(79,142,247,0.12)'}
              stroke={cardBorder} strokeWidth="1" />
          </g>
        </g>

        {/* ════════════════════════════
             Floating tech badges
            ════════════════════════════ */}

        {/* React badge */}
        <g filter="url(#softShadow)">
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,0; -6,-10; 0,0" dur="3.8s" repeatCount="indefinite" begin="0.3s" />
            <rect x="340" y="42" width="142" height="36" rx="10"
              fill={cardBg} stroke={cardBorder} strokeWidth="1.5" />
            <circle cx="361" cy="60" r="9" fill="rgba(79,142,247,0.12)" stroke="#4f8ef7" strokeWidth="1.5" />
            <circle cx="361" cy="60" r="3.5" fill="#4f8ef7" />
            <rect x="377" y="53" width="38" height="6" rx="3"
              fill="url(#blueGrad)" opacity="0.85" />
            <rect x="377" y="63" width="66" height="5" rx="2.5" fill={lineGhost} />
          </g>
        </g>

        {/* Node badge */}
        <g filter="url(#softShadow)">
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,0; 5,-7; 0,0" dur="4.8s" repeatCount="indefinite" begin="1.5s" />
            <rect x="10" y="200" width="130" height="36" rx="10"
              fill={cardBg} stroke={cardBorder} strokeWidth="1.5" />
            <circle cx="31" cy="218" r="9" fill="rgba(74,222,128,0.12)" stroke="#4ade80" strokeWidth="1.5" />
            <circle cx="31" cy="218" r="3.5" fill="#4ade80" />
            <rect x="47" y="211" width="48" height="6" rx="3" fill="#4ade80" opacity="0.8" />
            <rect x="47" y="221" width="68" height="5" rx="2.5" fill={lineGhost} />
          </g>
        </g>

        {/* Cloud badge */}
        <g filter="url(#softShadow)">
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,0; 4,-9; 0,0" dur="5.5s" repeatCount="indefinite" begin="2s" />
            <rect x="22" y="320" width="126" height="36" rx="10"
              fill={cardBg} stroke={cardBorder} strokeWidth="1.5" />
            <circle cx="43" cy="338" r="9" fill="rgba(0,212,255,0.12)" stroke="#00d4ff" strokeWidth="1.5" />
            <circle cx="43" cy="338" r="3.5" fill="#00d4ff" />
            <rect x="59" y="331" width="38" height="6" rx="3" fill="#00d4ff" opacity="0.8" />
            <rect x="59" y="341" width="58" height="5" rx="2.5" fill={lineGhost} />
          </g>
        </g>

        {/* AI badge */}
        <g filter="url(#softShadow)">
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,0; -4,-8; 0,0" dur="4.2s" repeatCount="indefinite" begin="0.8s" />
            <rect x="310" y="355" width="170" height="36" rx="10"
              fill={cardBg} stroke={cardBorder} strokeWidth="1.5" />
            <circle cx="331" cy="373" r="9" fill="rgba(196,132,252,0.12)" stroke="#c084fc" strokeWidth="1.5" />
            <circle cx="331" cy="373" r="3.5" fill="#c084fc" />
            <rect x="347" y="366" width="56" height="6" rx="3" fill="#c084fc" opacity="0.8" />
            <rect x="347" y="376" width="86" height="5" rx="2.5" fill={lineGhost} />
          </g>
        </g>

        {/* ── Connecting dotted lines ── */}
        <line x1="350" y1="78" x2="350" y2="200" stroke="rgba(79,142,247,0.15)"
          strokeWidth="1.5" strokeDasharray="5 5" />
        <line x1="140" y1="236" x2="50" y2="218" stroke="rgba(79,142,247,0.12)"
          strokeWidth="1.5" strokeDasharray="5 5" />
        <line x1="140" y1="280" x2="90" y2="320" stroke="rgba(0,212,255,0.12)"
          strokeWidth="1.5" strokeDasharray="5 5" />
        <line x1="350" y1="314" x2="390" y2="355" stroke="rgba(196,132,252,0.12)"
          strokeWidth="1.5" strokeDasharray="5 5" />

        {/* ── Ambient particles ── */}
        {[
          { cx: 20, cy: 140, r: 3.5, color: '#4f8ef7', dur: '3.2s', begin: '0s' },
          { cx: 478, cy: 250, r: 3, color: '#00d4ff', dur: '2.8s', begin: '0.6s' },
          { cx: 240, cy: 430, r: 4, color: '#4f8ef7', dur: '4s', begin: '1.2s' },
          { cx: 460, cy: 160, r: 2.5, color: '#c084fc', dur: '3.5s', begin: '0.4s' },
          { cx: 60, cy: 400, r: 3, color: '#00d4ff', dur: '2.6s', begin: '1.8s' },
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.color} opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.65;0.3"
              dur={p.dur} repeatCount="indefinite" begin={p.begin} />
            <animate attributeName="cy" values={`${p.cy};${p.cy - 14};${p.cy}`}
              dur={p.dur} repeatCount="indefinite" begin={p.begin} />
          </circle>
        ))}
      </svg>
    </Box>
  );
}
