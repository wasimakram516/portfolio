'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  IconButton,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmailIcon from '@mui/icons-material/Email';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DeveloperSVG from '@/components/DeveloperSVG';
import { useThemeMode } from '@/components/Providers';

const stats = [
  { value: 60, suffix: "+", label: "Projects" },
  { value: 4, suffix: '+', label: 'Years' },
  { value: 10, suffix: '+', label: 'Clients' },
  { value: 1, suffix: '', label: 'Research Paper' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      component="section"
      aria-label="Hero section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Animated grid background */}
      <Box className="grid-bg" />

      {/* Radial glow orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 142, 247, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 6, lg: 4 },
            alignItems: 'center',
          }}
        >
          {/* Left: Content */}
          <Box>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Chip
                icon={
                  <Box
                    component="span"
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#22c55e',
                      display: 'inline-block',
                      ml: '10px !important',
                      boxShadow: '0 0 6px #22c55e',
                      animation: 'heroPulse 2s ease-in-out infinite',
                      '@keyframes heroPulse': {
                        '0%, 100%': { opacity: 1 },
                        '50%': { opacity: 0.4 },
                      },
                    }}
                  />
                }
                label="Available for Work"
                size="small"
                sx={{
                  mb: 3,
                  background: 'rgba(79, 142, 247, 0.12)',
                  border: '1px solid rgba(79, 142, 247, 0.35)',
                  color: '#4f8ef7',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  px: 0.5,
                  '& .MuiChip-label': { px: 1 },
                  '& .MuiChip-icon': { fontSize: '7px' },
                }}
              />
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem', lg: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: 'text.primary',
                  mb: 1,
                }}
              >
                Hi, I&apos;m{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Wasim Akram
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.4rem' },
                  fontWeight: 700,
                  color: 'text.secondary',
                  mb: 1,
                }}
              >
                Senior Full-Stack Engineer
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                  fontWeight: 500,
                  color: '#00d4ff',
                  mb: 3,
                  opacity: 0.85,
                }}
              >
                Cloud &amp; AI Systems Builder
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  maxWidth: 560,
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                MS Computer Science (Research Track) candidate, building production-grade web systems
                at Whitewall Digital Solutions. Specializing in real-time platforms, government
                portals, AI-powered dashboards, and scalable cloud architectures.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<FolderOpenIcon />}
                  onClick={scrollToProjects}
                  aria-label="View projects section"
                  sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  onClick={scrollToContact}
                  aria-label="Navigate to contact section"
                  sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
                >
                  Contact Me
                </Button>
              </Stack>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 3, sm: 4 } }}>
                {stats.map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: { xs: '1.6rem', md: '2rem' },
                        lineHeight: 1.1,
                      }}
                    >
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', fontSize: '0.8rem', mt: 0.3 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Right: Animated developer illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}
            >
              {/* Floating skill badge — top right (desktop only) */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 0,
                  backgroundColor: isDark ? '#111827' : '#ffffff',
                  border: '1px solid rgba(79, 142, 247, 0.3)',
                  borderRadius: '12px',
                  px: 2,
                  py: 1,
                  boxShadow: isDark
                    ? '0 8px 24px rgba(0,0,0,0.4)'
                    : '0 8px 24px rgba(79,142,247,0.15)',
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  gap: 0.6,
                  zIndex: 2,
                  animation: 'float1 3s ease-in-out infinite',
                  '@keyframes float1': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                  },
                }}
              >
                <ElectricBoltIcon sx={{ fontSize: '0.9rem', color: '#4f8ef7' }} />
                <Typography variant="caption" sx={{ color: '#4f8ef7', fontWeight: 600, fontSize: '0.75rem' }}>
                  Next.js Expert
                </Typography>
              </Box>

              {/* Floating skill badge — bottom left (desktop only) */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 0,
                  backgroundColor: isDark ? '#111827' : '#ffffff',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  borderRadius: '12px',
                  px: 2,
                  py: 1,
                  boxShadow: isDark
                    ? '0 8px 24px rgba(0,0,0,0.4)'
                    : '0 8px 24px rgba(0,212,255,0.15)',
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  gap: 0.6,
                  zIndex: 2,
                  animation: 'float2 3.5s ease-in-out infinite',
                  '@keyframes float2': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
                }}
              >
                <PsychologyIcon sx={{ fontSize: '0.9rem', color: '#00d4ff' }} />
                <Typography variant="caption" sx={{ color: '#00d4ff', fontWeight: 600, fontSize: '0.75rem' }}>
                  AI Researcher
                </Typography>
              </Box>

              <Box sx={{ width: { xs: '100%', sm: 380, lg: 460 }, height: { xs: 'auto', sm: 340, lg: 400 } }}>
                <DeveloperSVG
                  width={460}
                  height={400}
                />
              </Box>
            </Box>
          </motion.div>
        </Box>

        {/* Scroll indicator */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 6, lg: 8 },
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <IconButton
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Scroll to about section"
              sx={{
                color: 'rgba(79, 142, 247, 0.6)',
                border: '1px solid rgba(79, 142, 247, 0.2)',
                '&:hover': { color: '#4f8ef7', borderColor: '#4f8ef7' },
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
