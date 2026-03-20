'use client';

import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  SvgIcon,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarIcon from '@mui/icons-material/Star';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import GridViewIcon from '@mui/icons-material/GridView';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import QuizIcon from '@mui/icons-material/Quiz';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import TimelineIcon from '@mui/icons-material/Timeline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import MapIcon from '@mui/icons-material/Map';
import ShieldIcon from '@mui/icons-material/Shield';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BusinessIcon from '@mui/icons-material/Business';
import DomainIcon from '@mui/icons-material/Domain';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PrintIcon from '@mui/icons-material/Print';
import ImageIcon from '@mui/icons-material/Image';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import ParkIcon from '@mui/icons-material/Park';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { projects } from '@/data/projects';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import { useThemeMode } from '@/components/Providers';

type IconComponent = React.ComponentType<SvgIconProps>;

const iconMap: Record<string, IconComponent> = {
  Celebration: CelebrationIcon,
  SmartToy: SmartToyIcon,
  EmojiEvents: EmojiEventsIcon,
  PhotoCamera: PhotoCameraIcon,
  GridView: GridViewIcon,
  Autorenew: AutorenewIcon,
  Quiz: QuizIcon,
  Lightbulb: LightbulbIcon,
  HowToVote: HowToVoteIcon,
  RocketLaunch: RocketLaunchIcon,
  AccountBalance: AccountBalanceIcon,
  Groups: GroupsIcon,
  Timeline: TimelineIcon,
  ElectricBolt: ElectricBoltIcon,
  Map: MapIcon,
  Shield: ShieldIcon,
  Favorite: FavoriteIcon,
  Business: BusinessIcon,
  Domain: DomainIcon,
  Home: HomeIcon,
  Psychology: PsychologyIcon,
  PhoneAndroid: PhoneAndroidIcon,
  Work: WorkIcon,
  School: SchoolIcon,
  Print: PrintIcon,
  Image: ImageIcon,
  Star: StarIcon,
  PeopleAlt: PeopleAltIcon,
  MenuBook: MenuBookIcon,
  HowToReg: HowToRegIcon,
  AppRegistration: AppRegistrationIcon,
  LocalCafe: LocalCafeIcon,
  Park: ParkIcon,
  SelfImprovement: SelfImprovementIcon,
};

const filterOptions = [
  { value: 'all', label: 'All Projects' },
  { value: 'event', label: 'Event Platforms' },
  { value: 'government', label: 'Government' },
  { value: 'realestate', label: 'Real Estate' },
  { value: 'ai', label: 'AI / Research' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'desktop', label: 'Desktop' },
  { value: 'tools', label: 'Tools' },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -10,
    transition: { duration: 0.25 },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <Box
      id="projects"
      component="section"
      aria-label="Projects section"
      sx={{ py: { xs: 10, md: 14 }, position: 'relative', overflow: 'hidden' }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
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
          <Box sx={{ mb: { xs: 5, md: 6 } }}>
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
              WHAT I&apos;VE BUILT
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 700, color: 'text.primary' }}
              >
                Featured{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Projects
                </Box>
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Box
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 5 }}
            role="group"
            aria-label="Filter projects by category"
          >
            {filterOptions.map((opt) => (
              <Button
                key={opt.value}
                onClick={() => setActiveFilter(opt.value)}
                aria-pressed={activeFilter === opt.value}
                size="small"
                sx={{
                  px: 2,
                  py: 0.8,
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  borderRadius: '8px',
                  background:
                    activeFilter === opt.value
                      ? 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)'
                      : 'transparent',
                  color: activeFilter === opt.value ? '#fff' : 'text.secondary',
                  border:
                    activeFilter === opt.value
                      ? 'none'
                      : '1px solid rgba(79, 142, 247, 0.2)',
                  boxShadow:
                    activeFilter === opt.value
                      ? '0 4px 16px rgba(79, 142, 247, 0.3)'
                      : 'none',
                  '&:hover': {
                    background:
                      activeFilter === opt.value
                        ? 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)'
                        : 'rgba(79, 142, 247, 0.08)',
                    color: activeFilter === opt.value ? '#fff' : '#4f8ef7',
                    transform: 'none',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                {opt.label}
              </Button>
            ))}
          </Box>
        </motion.div>

        {/* Project grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const ProjectIcon: IconComponent = iconMap[project.iconKey] ?? ImageIcon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: isDark ? '#111827' : '#ffffff',
                      border: isDark
                        ? '1px solid rgba(79, 142, 247, 0.1)'
                        : '1px solid rgba(79, 142, 247, 0.18)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(79, 142, 247, 0.4)',
                        boxShadow: '0 12px 48px rgba(79, 142, 247, 0.15)',
                        transform: 'translateY(-6px)',
                      },
                    }}
                  >
                    {/* Gradient thumbnail */}
                    <Box
                      sx={{
                        height: 140,
                        background: project.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Overlay pattern */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage:
                            'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)',
                        }}
                      />
                      <ProjectIcon
                        sx={{
                          fontSize: '3.5rem',
                          color: 'rgba(255,255,255,0.85)',
                          position: 'relative',
                          zIndex: 1,
                          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
                        }}
                        aria-label={project.title}
                      />

                      {/* Badges */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 10,
                          left: 10,
                          display: 'flex',
                          gap: 0.8,
                        }}
                      >
                        <Chip
                          label={project.categoryLabel}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(8px)',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.2)',
                            fontSize: '0.65rem',
                            fontWeight: 600,
                            height: 22,
                            '& .MuiChip-label': { px: 1 },
                          }}
                        />
                        {project.liveUrl && (
                          <Chip
                            label="LIVE"
                            size="small"
                            icon={
                              <Box
                                component="span"
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  background: '#4ade80',
                                  display: 'inline-block',
                                  ml: '6px !important',
                                  animation: 'livePulse 2s ease-in-out infinite',
                                  '@keyframes livePulse': {
                                    '0%, 100%': { opacity: 1 },
                                    '50%': { opacity: 0.4 },
                                  },
                                }}
                              />
                            }
                            sx={{
                              backgroundColor: 'rgba(0, 212, 80, 0.25)',
                              backdropFilter: 'blur(8px)',
                              color: '#4ade80',
                              border: '1px solid rgba(74, 222, 128, 0.4)',
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              height: 22,
                              '& .MuiChip-label': { px: 1 },
                              '& .MuiChip-icon': { fontSize: '6px' },
                            }}
                          />
                        )}
                      </Box>

                      {/* Featured badge */}
                      {project.featured && (
                        <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                          <Tooltip title="Featured Project">
                            <Box
                              sx={{
                                width: 28,
                                height: 28,
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                                border: '1px solid rgba(255, 215, 0, 0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <StarIcon sx={{ fontSize: 14, color: '#fbbf24' }} />
                            </Box>
                          </Tooltip>
                        </Box>
                      )}
                    </Box>

                    {/* Card content */}
                    <CardContent
                      sx={{
                        p: 2.5,
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        '&:last-child': { pb: 2.5 },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: 'text.primary', fontSize: '1rem', mb: 1 }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          fontSize: '0.85rem',
                          mb: 2,
                          flex: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Tech stack */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mb: 2.5 }}>
                        {project.stack.slice(0, 4).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(79, 142, 247, 0.07)',
                              border: '1px solid rgba(79, 142, 247, 0.18)',
                              color: 'text.secondary',
                              fontSize: '0.68rem',
                              fontWeight: 500,
                              height: 20,
                              '& .MuiChip-label': { px: 1 },
                            }}
                          />
                        ))}
                        {project.stack.length > 4 && (
                          <Chip
                            label={`+${project.stack.length - 4}`}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(79, 142, 247, 0.07)',
                              border: '1px solid rgba(79, 142, 247, 0.18)',
                              color: 'text.secondary',
                              fontSize: '0.68rem',
                              fontWeight: 500,
                              height: 20,
                              '& .MuiChip-label': { px: 1 },
                            }}
                          />
                        )}
                      </Box>

                      {/* Action buttons */}
                      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        {project.liveUrl && (
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<OpenInNewIcon sx={{ fontSize: '0.9rem' }} />}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                            sx={{
                              flex: 1,
                              py: 0.7,
                              fontSize: '0.78rem',
                              fontWeight: 600,
                            }}
                          >
                            Live Demo
                          </Button>
                        )}
                        <Tooltip title="View on GitHub">
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code on GitHub`}
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
                        </Tooltip>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Box>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Want to see more? Check out my GitHub for additional projects.
            </Typography>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/wasimakram516"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
              sx={{ px: 4 }}
            >
              View All on GitHub
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
