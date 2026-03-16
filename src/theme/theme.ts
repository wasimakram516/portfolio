'use client';

import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

export function buildTheme(mode: PaletteMode) {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#4f8ef7',
        light: '#7aabff',
        dark: '#2563eb',
      },
      secondary: {
        main: '#00d4ff',
        light: '#6eefff',
        dark: '#0099cc',
      },
      background: {
        default: isDark ? '#060b17' : '#f0f4ff',
        paper: isDark ? '#111827' : '#ffffff',
      },
      text: {
        primary: isDark ? '#f1f5f9' : '#1a2540',
        secondary: isDark ? '#94a3b8' : '#4b5b72',
      },
      divider: isDark ? 'rgba(79, 142, 247, 0.15)' : 'rgba(79, 142, 247, 0.2)',
    },
    typography: {
      fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.03em' },
      h2: { fontWeight: 700, letterSpacing: '-0.02em' },
      h3: { fontWeight: 700, letterSpacing: '-0.01em' },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      body1: { lineHeight: 1.7 },
      body2: { lineHeight: 1.6 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: isDark
              ? 'linear-gradient(125deg, #060b17 0%, #0a1628 25%, #060f1e 50%, #0d1a30 75%, #060b17 100%)'
              : 'linear-gradient(125deg, #eef4ff 0%, #f5f0ff 25%, #e8f4ff 50%, #f0f7ff 75%, #eef4ff 100%)',
            backgroundSize: '400% 400%',
            animation: 'bgShift 14s ease-in-out infinite',
            scrollBehavior: 'smooth',
          },
          '*': { boxSizing: 'border-box' },
          '::-webkit-scrollbar': { width: '6px' },
          '::-webkit-scrollbar-track': { background: isDark ? '#060b17' : '#e8eeff' },
          '::-webkit-scrollbar-thumb': { background: '#4f8ef7', borderRadius: '3px' },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '8px',
            padding: '10px 24px',
          },
          contained: {
            background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
            boxShadow: '0 4px 24px rgba(79, 142, 247, 0.35)',
            color: '#fff',
            '&:hover': {
              background: 'linear-gradient(135deg, #7aabff 0%, #6eefff 100%)',
              boxShadow: '0 6px 32px rgba(79, 142, 247, 0.5)',
              transform: 'translateY(-1px)',
            },
          },
          outlined: {
            borderColor: 'rgba(79, 142, 247, 0.5)',
            color: '#4f8ef7',
            '&:hover': {
              borderColor: '#4f8ef7',
              backgroundColor: 'rgba(79, 142, 247, 0.08)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: '6px', fontWeight: 500, fontSize: '0.75rem' },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: isDark ? '#111827' : '#ffffff',
            border: isDark
              ? '1px solid rgba(79, 142, 247, 0.1)'
              : '1px solid rgba(79, 142, 247, 0.15)',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(79, 142, 247, 0.4)',
              boxShadow: '0 8px 40px rgba(79, 142, 247, 0.15)',
              transform: 'translateY(-4px)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: { backgroundColor: isDark ? '#0d1526' : '#ffffff' },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: isDark ? 'rgba(17, 24, 39, 0.8)' : 'rgba(240, 244, 255, 0.8)',
              '& fieldset': { borderColor: 'rgba(79, 142, 247, 0.25)' },
              '&:hover fieldset': { borderColor: 'rgba(79, 142, 247, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: '#4f8ef7' },
            },
          },
        },
      },
    },
  });
}

// Default dark theme export (for backwards compat)
const theme = buildTheme('dark');
export default theme;
