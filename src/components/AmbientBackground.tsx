'use client';

import { Box } from '@mui/material';
import { useThemeMode } from '@/components/Providers';

export default function AmbientBackground() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const orbs = [
    {
      color: isDark ? 'rgba(79,142,247,0.45)' : 'rgba(79,142,247,0.22)',
      width: 800, height: 800,
      top: '-15%', left: '-15%',
      animation: 'orbDrift1 18s ease-in-out infinite',
    },
    {
      color: isDark ? 'rgba(0,212,255,0.35)' : 'rgba(0,212,255,0.18)',
      width: 700, height: 700,
      top: '25%', right: '-18%',
      animation: 'orbDrift2 22s ease-in-out infinite',
    },
    {
      color: isDark ? 'rgba(139,92,246,0.3)' : 'rgba(139,92,246,0.15)',
      width: 600, height: 600,
      bottom: '0%', left: '15%',
      animation: 'orbDrift3 26s ease-in-out infinite',
    },
    {
      color: isDark ? 'rgba(79,142,247,0.25)' : 'rgba(79,142,247,0.14)',
      width: 500, height: 500,
      top: '50%', right: '20%',
      animation: 'orbDrift4 20s ease-in-out infinite',
    },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {orbs.map((orb, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: orb.width,
            height: orb.height,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 55%)`,
            filter: 'blur(40px)',
            animation: orb.animation,
            ...(orb.top    !== undefined && { top:    orb.top }),
            ...(orb.bottom !== undefined && { bottom: orb.bottom }),
            ...(orb.left   !== undefined && { left:   orb.left }),
            ...(orb.right  !== undefined && { right:  orb.right }),
          }}
        />
      ))}
    </Box>
  );
}
