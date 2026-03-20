'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeMode } from '@/components/Providers';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { mode, toggleMode } = useThemeMode();
  const isDark = mode === 'dark';

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? isDark
              ? 'rgba(6, 11, 23, 0.92)'
              : 'rgba(255, 255, 255, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? isDark
              ? '1px solid rgba(79, 142, 247, 0.15)'
              : '1px solid rgba(79, 142, 247, 0.2)'
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Signature Logo */}
            <Box
              component="button"
              onClick={() => scrollTo('#home')}
              aria-label="Go to home"
              sx={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                mr: 'auto',
                p: 0,
                py: '4px',
                overflow: 'visible',
                gap: 0.3,
                userSelect: 'none',
              }}
            >
              {/* < bracket */}
              <Typography
                component="span"
                sx={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  color: '#00d4ff',
                  lineHeight: 1,
                  opacity: 0.85,
                  mt: '2px',
                }}
              >
                {'<'}
              </Typography>
              {/* Signature name */}
              <Typography
                sx={{
                  fontFamily: "'Agustina', cursive",
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  letterSpacing: '0.01em',
                  background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.8,
                  display: 'inline-block',
                  userSelect: 'none',
                  mx: 0.5,
                }}
              >
                Wasim Akram
              </Typography>
              {/* /> bracket */}
              <Typography
                component="span"
                sx={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  color: '#00d4ff',
                  lineHeight: 1,
                  opacity: 0.85,
                  mt: '2px',
                }}
              >
                {'/>'}
              </Typography>
            </Box>

            {/* Desktop nav links */}
            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, mr: 2 }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  aria-label={`Navigate to ${link.label}`}
                  sx={{
                    color:
                      activeSection === link.href.replace('#', '')
                        ? '#4f8ef7'
                        : 'text.secondary',
                    fontWeight: activeSection === link.href.replace('#', '') ? 600 : 400,
                    fontSize: '0.875rem',
                    px: 1.5,
                    py: 1,
                    minWidth: 'auto',
                    background: 'none',
                    boxShadow: 'none',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform:
                        activeSection === link.href.replace('#', '')
                          ? 'translateX(-50%) scaleX(1)'
                          : 'translateX(-50%) scaleX(0)',
                      width: '60%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #4f8ef7, #00d4ff)',
                      borderRadius: '1px',
                      transition: 'transform 0.2s ease',
                    },
                    '&:hover': {
                      color: '#4f8ef7',
                      background: 'rgba(79, 142, 247, 0.06)',
                      boxShadow: 'none',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* GitHub CTA */}
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/wasimakram516"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
              size="small"
              sx={{
                display: { xs: 'none', md: 'flex' },
                borderColor: 'rgba(79, 142, 247, 0.5)',
                color: '#4f8ef7',
                fontSize: '0.8rem',
                px: 2,
                py: 0.8,
                '&:hover': {
                  borderColor: '#4f8ef7',
                  backgroundColor: 'rgba(79, 142, 247, 0.08)',
                  transform: 'none',
                },
              }}
            >
              View GitHub
            </Button>

            {/* Theme toggle */}
            <IconButton
              onClick={toggleMode}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              size="small"
              sx={{
                color: '#4f8ef7',
                border: '1px solid rgba(79, 142, 247, 0.3)',
                borderRadius: '8px',
                p: 0.8,
                ml: 1.5,
                mr: 1,
                '&:hover': {
                  backgroundColor: 'rgba(79, 142, 247, 0.08)',
                  borderColor: '#4f8ef7',
                },
              }}
            >
              {isDark ? (
                <LightModeIcon sx={{ fontSize: '1.1rem' }} />
              ) : (
                <DarkModeIcon sx={{ fontSize: '1.1rem' }} />
              )}
            </IconButton>

            {/* Mobile hamburger */}
            <IconButton
              edge="end"
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#4f8ef7' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 280,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box
              component="button"
              onClick={() => { setDrawerOpen(false); scrollTo('#home'); }}
              aria-label="Go to home"
              sx={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.3, p: 0, userSelect: 'none' }}
            >
              <Typography component="span" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.1rem', color: '#00d4ff', opacity: 0.85, lineHeight: 1 }}>{'<'}</Typography>
              <Typography
                component="span"
                sx={{
                  fontFamily: "'Agustina', cursive",
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.8,
                  display: 'inline-block',
                  mx: 0.4,
                  userSelect: 'none',
                }}
              >
                Wasim Akram
              </Typography>
              <Typography component="span" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.1rem', color: '#00d4ff', opacity: 0.85, lineHeight: 1 }}>{'/>'}</Typography>
            </Box>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
              sx={{ color: 'text.secondary' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ pt: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  onClick={() => scrollTo(link.href)}
                  sx={{
                    px: 3,
                    py: 1.5,
                    color:
                      activeSection === link.href.replace('#', '')
                        ? '#4f8ef7'
                        : 'text.secondary',
                    borderLeft:
                      activeSection === link.href.replace('#', '')
                        ? '2px solid #4f8ef7'
                        : '2px solid transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(79, 142, 247, 0.08)',
                      color: '#4f8ef7',
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ p: 3, mt: 'auto' }}>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/wasimakram516"
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              sx={{
                borderColor: 'rgba(79, 142, 247, 0.5)',
                color: '#4f8ef7',
                '&:hover': {
                  borderColor: '#4f8ef7',
                  backgroundColor: 'rgba(79, 142, 247, 0.08)',
                },
              }}
            >
              View GitHub
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
