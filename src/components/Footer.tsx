'use client';

import React from 'react';
import { Box, Container, Typography, IconButton, Link, Divider } from '@mui/material';
import { useThemeMode } from '@/components/Providers';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      aria-label="Site footer"
      sx={{
        py: 5,
        position: 'relative',
        borderTop: isDark
          ? '1px solid rgba(79, 142, 247, 0.15)'
          : '1px solid rgba(79, 142, 247, 0.2)',
        background: isDark ? 'rgba(6, 11, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Brand */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
            <Box
              component="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Go to top"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.3, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1, background: 'none', border: 'none', cursor: 'pointer', p: 0, userSelect: 'none' }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '1.2rem',
                  color: '#00d4ff',
                  lineHeight: 1,
                  opacity: 0.85,
                }}
              >
                {'<'}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Agustina', cursive",
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  letterSpacing: '0.01em',
                  background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mx: 0.5,
                  userSelect: 'none',
                }}
              >
                Wasim Akram
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '1.2rem',
                  color: '#00d4ff',
                  lineHeight: 1,
                  opacity: 0.85,
                }}
              >
                {'/>'}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.82rem' }}>
              Senior Full-Stack Engineer · Cloud &amp; AI Systems Builder
            </Typography>
          </Box>

          {/* Nav links */}
          <Box
            component="nav"
            aria-label="Footer navigation"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 1.5, sm: 2.5 },
              justifyContent: 'center',
            }}
          >
            {navLinks.map((link) => (
              <Box
                key={link.label}
                component="button"
                onClick={() => scrollTo(link.href)}
                aria-label={`Navigate to ${link.label}`}
                sx={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'text.secondary',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  p: 0,
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#4f8ef7' },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* Social + Back to top */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              href="https://github.com/wasimakram516"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              size="small"
              sx={{
                color: 'text.secondary',
                border: '1px solid rgba(79, 142, 247, 0.2)',
                borderRadius: '8px',
                p: 0.8,
                '&:hover': {
                  color: '#4f8ef7',
                  borderColor: '#4f8ef7',
                  backgroundColor: 'rgba(79, 142, 247, 0.08)',
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: '1.1rem' }} />
            </IconButton>

            <IconButton
              href="https://linkedin.com/in/wasimakram516"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              size="small"
              sx={{
                color: 'text.secondary',
                border: '1px solid rgba(79, 142, 247, 0.2)',
                borderRadius: '8px',
                p: 0.8,
                '&:hover': {
                  color: '#00d4ff',
                  borderColor: '#00d4ff',
                  backgroundColor: 'rgba(0, 212, 255, 0.08)',
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: '1.1rem' }} />
            </IconButton>

            <IconButton
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              size="small"
              sx={{
                color: 'text.secondary',
                border: '1px solid rgba(79, 142, 247, 0.2)',
                borderRadius: '8px',
                p: 0.8,
                ml: 0.5,
                '&:hover': {
                  color: '#4f8ef7',
                  borderColor: '#4f8ef7',
                  backgroundColor: 'rgba(79, 142, 247, 0.08)',
                },
              }}
            >
              <KeyboardArrowUpIcon sx={{ fontSize: '1.1rem' }} />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'rgba(79, 142, 247, 0.1)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
            © {currentYear} Wasim Akram. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
