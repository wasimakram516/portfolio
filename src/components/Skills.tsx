'use client';

import React from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useThemeMode } from '@/components/Providers';
import PaletteIcon from '@mui/icons-material/Palette';
import DnsIcon from '@mui/icons-material/Dns';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DevicesIcon from '@mui/icons-material/Devices';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import { skillCategories } from '@/data/skills';

type IconComponent = React.ComponentType<SvgIconProps>;

const skillIconMap: Record<string, IconComponent> = {
  Palette: PaletteIcon,
  Dns: DnsIcon,
  Storage: StorageIcon,
  Cloud: CloudIcon,
  Psychology: PsychologyIcon,
  Devices: DevicesIcon,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Skills() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box
      id="skills"
      component="section"
      aria-label="Skills section"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        backgroundColor: isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(79, 142, 247, 0.03)',
        overflow: 'hidden',
      }}
    >
      {/* Top border gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(79, 142, 247, 0.4), transparent)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(79, 142, 247, 0.4), transparent)',
        }}
      />

      <Container maxWidth="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{
                color: '#4f8ef7',
                fontWeight: 600,
                letterSpacing: '0.15em',
                fontSize: '0.8rem',
                display: 'block',
                mb: 1,
              }}
            >
              TECHNICAL EXPERTISE
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              Skills &{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Technologies
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mt: 2, maxWidth: 500, mx: 'auto' }}
            >
              A comprehensive toolkit built across 4+ years of production engineering
            </Typography>
          </Box>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {skillCategories.map((category) => {
              const CategoryIcon: IconComponent = skillIconMap[category.iconKey] ?? PaletteIcon;
              return (
                <motion.div key={category.title} variants={cardVariants}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      background: isDark ? 'rgba(17, 24, 39, 0.8)' : '#ffffff',
                      border: isDark
                        ? '1px solid rgba(79, 142, 247, 0.12)'
                        : '1px solid rgba(79, 142, 247, 0.18)',
                      backdropFilter: 'blur(10px)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(79, 142, 247, 0.35)',
                        boxShadow: '0 8px 32px rgba(79, 142, 247, 0.12)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    {/* Card header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '10px',
                          background: 'rgba(79, 142, 247, 0.1)',
                          border: '1px solid rgba(79, 142, 247, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <CategoryIcon sx={{ fontSize: '1.4rem', color: '#4f8ef7' }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: 'text.primary', fontSize: '1rem' }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    {/* Divider */}
                    <Box
                      sx={{
                        height: '1px',
                        background: 'linear-gradient(90deg, rgba(79, 142, 247, 0.3), transparent)',
                        mb: 2.5,
                      }}
                    />

                    {/* Skill chips */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(79, 142, 247, 0.08)',
                            border: '1px solid rgba(79, 142, 247, 0.2)',
                            color: 'text.secondary',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              backgroundColor: 'rgba(79, 142, 247, 0.16)',
                              borderColor: 'rgba(79, 142, 247, 0.5)',
                              color: '#4f8ef7',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
