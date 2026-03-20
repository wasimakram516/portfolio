'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useThemeMode } from '@/components/Providers';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PublicIcon from '@mui/icons-material/Public';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const infoCards = [
  {
    icon: <SchoolIcon sx={{ fontSize: 28, color: '#4f8ef7' }} />,
    title: 'MS Computer Science',
    description:
      'Research Track — Explainable AI for educational analytics. Published research on XGBoost + SHAP models for student performance prediction and early intervention systems.',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 28, color: '#00d4ff' }} />,
    title: 'Technical Lead',
    description:
      'Leading full-stack development at Whitewall Digital Solutions — architecting real-time event platforms, government portals, and AI-powered applications for GCC clients.',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 28, color: '#7aabff' }} />,
    title: 'Open to Remote Opportunities',
    description:
      'Based in Pakistan, working globally. Available for remote full-stack engineering roles, technical consulting, and collaborative research projects worldwide.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box
      id="about"
      component="section"
      aria-label="About section"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '60%',
          background:
            'radial-gradient(ellipse, rgba(79, 142, 247, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
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
              GET TO KNOW ME
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              About{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Me
              </Box>
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Left: Text content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.9, fontSize: '1.05rem' }}
              >
                I&apos;m a Senior Full-Stack Engineer and Technical Lead with 4+ years of experience
                building production-grade web systems. My work spans real-time event platforms,
                government digital portals, AI-powered dashboards, and scalable cloud architectures
                deployed across the GCC region.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.9, fontSize: '1.05rem' }}
              >
                At Whitewall Digital Solutions, I lead end-to-end development of interactive
                applications for enterprise clients — from system architecture and API design to
                frontend polish and AWS deployment. I thrive on solving complex engineering problems
                with clean, maintainable code.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.05rem' }}
              >
                Alongside professional work, I&apos;m pursuing MS Computer Science with a focus on
                Explainable AI — developing XGBoost + SHAP models for educational analytics with a
                published research paper on student performance prediction.
              </Typography>

              {/* Highlights */}
              <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {[
                  { icon: <CheckCircleOutlineIcon sx={{ fontSize: '1rem', color: '#4f8ef7' }} />, text: '60+ Production Projects' },
                  { icon: <LanguageIcon sx={{ fontSize: '1rem', color: '#4f8ef7' }} />, text: 'GCC Region Clients' },
                  { icon: <ArticleIcon sx={{ fontSize: '1rem', color: '#4f8ef7' }} />, text: 'XAI Research Paper' },
                  { icon: <CloudQueueIcon sx={{ fontSize: '1rem', color: '#4f8ef7' }} />, text: 'AWS Cloud Patterns' },
                ].map((item) => (
                  <Box
                    key={item.text}
                    sx={{
                      px: 2,
                      py: 0.8,
                      borderRadius: '8px',
                      border: '1px solid rgba(79, 142, 247, 0.2)',
                      background: 'rgba(79, 142, 247, 0.06)',
                      fontSize: '0.85rem',
                      color: 'text.secondary',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.8,
                    }}
                  >
                    {item.icon}
                    {item.text}
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Info cards */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {infoCards.map((card) => (
                  <motion.div key={card.title} variants={itemVariants}>
                    <Card
                      sx={{
                        background: isDark ? 'rgba(17, 24, 39, 0.8)' : '#ffffff',
                        backdropFilter: 'blur(10px)',
                        border: isDark
                          ? '1px solid rgba(79, 142, 247, 0.12)'
                          : '1px solid rgba(79, 142, 247, 0.18)',
                        borderRadius: '16px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'rgba(79, 142, 247, 0.35)',
                          boxShadow: '0 8px 32px rgba(79, 142, 247, 0.12)',
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: '12px',
                              background: 'rgba(79, 142, 247, 0.1)',
                              border: '1px solid rgba(79, 142, 247, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            {card.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5, fontSize: '1rem' }}
                            >
                              {card.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.875rem' }}
                            >
                              {card.description}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
