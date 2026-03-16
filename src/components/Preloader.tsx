'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeMode } from '@/components/Providers';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  useEffect(() => {
    const removeTimer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(removeTimer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: isDark ? '#060b17' : '#f0f4ff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'all',
          }}
        >
          {/* Ambient glow */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 500,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(79,142,247,0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          {/* Signature name — clip-path write-on effect */}
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 300,
                    fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
                    color: '#00d4ff',
                    lineHeight: 1,
                    opacity: 0.85,
                  }}
                >
                  {'<'}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "'Agustina', cursive",
                    fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '0.02em',
                    lineHeight: 1.8,
                    display: 'inline-block',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Wasim Akram
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 300,
                    fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
                    color: '#00d4ff',
                    lineHeight: 1,
                    opacity: 0.85,
                  }}
                >
                  {'/>'}
                </Typography>
              </Box>
            </motion.div>

            {/* Underline that draws itself */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: 'left center' }}
            >
              <Box
                sx={{
                  height: '2px',
                  background: 'linear-gradient(90deg, #4f8ef7, #00d4ff, transparent)',
                  borderRadius: '1px',
                  mt: 0.5,
                  opacity: 0.8,
                }}
              />
            </motion.div>

            {/* Subtitle fades in after name is drawn */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  color: isDark ? 'rgba(148,163,184,0.55)' : 'rgba(71,85,105,0.6)',
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  mt: 2,
                  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
                }}
              >
                Senior Full-Stack Engineer
              </Typography>
            </motion.div>
          </Box>

          {/* Progress bar at bottom */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'rgba(79,142,247,0.1)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #4f8ef7, #00d4ff)',
                boxShadow: '0 0 12px rgba(79,142,247,0.6)',
              }}
            />
          </Box>

          {/* Corner dots decoration */}
          {[
            { top: 24, left: 24 },
            { top: 24, right: 24 },
            { bottom: 24, left: 24 },
            { bottom: 24, right: 24 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.35, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              style={{
                position: 'absolute',
                ...pos,
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: i % 2 === 0 ? '#4f8ef7' : '#00d4ff',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
