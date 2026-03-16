'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useThemeMode } from '@/components/Providers';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';

const experiences = [
  {
    id: 'senior-lead',
    role: 'Senior Full-Stack Engineer / Technical Lead',
    company: 'Whitewall Digital Solutions',
    period: '2023 – Present',
    description:
      'Leading development of production-grade interactive event platforms, government portals, and AI-powered web systems. Architecting Next.js + Node.js solutions deployed to AWS and Vercel. Managing client relationships and technical delivery across the GCC region.',
    highlights: [
      'Led 20+ production deployments',
      'Architected real-time Socket.IO platforms',
      'AWS S3 + CloudFront media pipelines',
    ],
    icon: <WorkIcon />,
    color: '#4f8ef7',
    type: 'work',
  },
  {
    id: 'fullstack-dev',
    role: 'Full-Stack Developer',
    company: 'Whitewall Digital Solutions',
    period: '2022 – 2023',
    description:
      'Built real-time quiz and event engagement systems, real estate portals, and institutional timelines for clients across the GCC region. Developed scalable REST APIs and responsive frontends using Next.js and MUI.',
    highlights: [
      'Event engagement platforms',
      'Government digital portals',
      'Real estate web applications',
    ],
    icon: <CodeIcon />,
    color: '#00d4ff',
    type: 'work',
  },
  {
    id: 'ms-research',
    role: 'MS Computer Science (Research Track)',
    company: 'Academic Research',
    period: '2023 – Present',
    description:
      'Conducting research in Explainable AI for educational analytics — developing XGBoost + SHAP models with Next.js dashboard for student performance prediction and early intervention. Published research paper on XAI in educational systems.',
    highlights: [
      'XGBoost + SHAP research',
      'Published XAI research paper',
      'Next.js educator dashboard',
    ],
    icon: <SchoolIcon />,
    color: '#7aabff',
    type: 'education',
  },
  {
    id: 'desktop-dev',
    role: 'Desktop Application Developer',
    company: 'Freelance / Early Career',
    period: '2021 – 2022',
    description:
      'Developed enterprise C# desktop applications for employee supervision, institute management, and printing press management systems. Built comprehensive SQL Server-backed management tools with WinForms UI.',
    highlights: [
      'C# / .NET enterprise apps',
      'SQL Server database design',
      'WinForms UI development',
    ],
    icon: <ComputerIcon />,
    color: '#a78bfa',
    type: 'work',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Experience() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box
      id="experience"
      component="section"
      aria-label="Experience section"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        backgroundColor: isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(79, 142, 247, 0.03)',
        overflow: 'hidden',
      }}
    >
      {/* Border accents */}
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
              MY JOURNEY
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              Work{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Experience
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Timeline */}
        <Box sx={{ maxWidth: 800, mx: 'auto', position: 'relative' }}>
          {/* Vertical line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, sm: 28 },
              top: 0,
              bottom: 0,
              width: '2px',
              background:
                'linear-gradient(180deg, #4f8ef7 0%, #00d4ff 50%, rgba(79, 142, 247, 0.2) 100%)',
              borderRadius: '1px',
            }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 2.5, sm: 3.5 },
                    pl: { xs: 0, sm: 0 },
                    position: 'relative',
                  }}
                >
                  {/* Timeline dot */}
                  <Box sx={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                    <Box
                      sx={{
                        width: { xs: 40, sm: 56 },
                        height: { xs: 40, sm: 56 },
                        borderRadius: '50%',
                        background: `rgba(${exp.color === '#4f8ef7' ? '79, 142, 247' : exp.color === '#00d4ff' ? '0, 212, 255' : exp.color === '#7aabff' ? '122, 171, 255' : '167, 139, 250'}, 0.15)`,
                        border: `2px solid ${exp.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 0 20px ${exp.color}33`,
                        color: exp.color,
                        '& .MuiSvgIcon-root': { fontSize: { xs: '1.1rem', sm: '1.3rem' } },
                      }}
                    >
                      {exp.icon}
                    </Box>
                  </Box>

                  {/* Content */}
                  <Paper
                    elevation={0}
                    sx={{
                      flex: 1,
                      p: { xs: 2.5, sm: 3 },
                      background: isDark ? 'rgba(17, 24, 39, 0.8)' : '#ffffff',
                      border: isDark
                        ? '1px solid rgba(79, 142, 247, 0.12)'
                        : '1px solid rgba(79, 142, 247, 0.18)',
                      borderRadius: '16px',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: `${exp.color}4d`,
                        boxShadow: `0 8px 32px ${exp.color}15`,
                      },
                    }}
                  >
                    {/* Header row */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                            fontSize: { xs: '0.95rem', sm: '1.05rem' },
                          }}
                        >
                          {exp.role}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: exp.color, fontWeight: 600, fontSize: '0.875rem' }}
                        >
                          {exp.company}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '20px',
                          background: `${exp.color}15`,
                          border: `1px solid ${exp.color}30`,
                          flexShrink: 0,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: exp.color, fontWeight: 600, fontSize: '0.75rem' }}
                        >
                          {exp.period}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', lineHeight: 1.75, mb: 2, fontSize: '0.875rem' }}
                    >
                      {exp.description}
                    </Typography>

                    {/* Highlights */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.highlights.map((h) => (
                        <Box
                          key={h}
                          sx={{
                            px: 1.5,
                            py: 0.4,
                            borderRadius: '6px',
                            background: `${exp.color}0d`,
                            border: `1px solid ${exp.color}25`,
                            fontSize: '0.73rem',
                            color: 'text.secondary',
                            fontWeight: 500,
                          }}
                        >
                          {h}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
