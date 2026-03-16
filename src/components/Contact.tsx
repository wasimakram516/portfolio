'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useThemeMode } from '@/components/Providers';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const contactItems = [
  {
    icon: <GitHubIcon sx={{ fontSize: 24, color: '#4f8ef7' }} />,
    label: 'GitHub',
    value: 'wasimakram516',
    href: 'https://github.com/wasimakram516',
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 24, color: '#00d4ff' }} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/wasimakram516',
    href: 'https://linkedin.com/in/wasimakram516',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 24, color: '#7aabff' }} />,
    label: 'Email',
    value: 'wasimakram4245@gmail.com',
    href: 'mailto:wasimakram4245@gmail.com',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 24, color: '#a78bfa' }} />,
    label: 'Location',
    value: 'Pakistan — Remote / Global',
    href: null,
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contact() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact: ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setErrors({ message: 'Something went wrong. Please try again.' });
      }
    } catch {
      setErrors({ message: 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      aria-label="Contact section"
      sx={{ py: { xs: 10, md: 14 }, position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(79, 142, 247, 0.06) 0%, transparent 70%)',
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
              GET IN TOUCH
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 700,
                color: 'text.primary',
                mb: 2,
              }}
            >
              Let&apos;s{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #4f8ef7 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Work Together
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}
            >
              Available for full-stack engineering roles, technical consulting, and collaborative
              projects. Let&apos;s build something great.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Contact info */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: 'text.primary', mb: 3, fontSize: '1.2rem' }}
              >
                Contact Information
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contactItems.map((item, index) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    <Card
                      sx={{
                        background: isDark ? 'rgba(17, 24, 39, 0.8)' : '#ffffff',
                        border: isDark
                          ? '1px solid rgba(79, 142, 247, 0.12)'
                          : '1px solid rgba(79, 142, 247, 0.18)',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'rgba(79, 142, 247, 0.35)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 24px rgba(79, 142, 247, 0.1)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
                            {item.icon}
                          </Box>
                          <Box sx={{ overflow: 'hidden' }}>
                            <Typography
                              variant="caption"
                              sx={{ color: 'text.secondary', fontSize: '0.72rem', display: 'block' }}
                            >
                              {item.label}
                            </Typography>
                            {item.href ? (
                              <Link
                                href={item.href}
                                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={`${item.label}: ${item.value}`}
                                sx={{
                                  color: 'text.primary',
                                  fontWeight: 500,
                                  fontSize: '0.875rem',
                                  textDecoration: 'none',
                                  display: 'block',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  '&:hover': { color: '#4f8ef7' },
                                }}
                              >
                                {item.value}
                              </Link>
                            ) : (
                              <Typography
                                variant="body2"
                                sx={{ color: 'text.primary', fontWeight: 500, fontSize: '0.875rem' }}
                              >
                                {item.value}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>

              {/* Availability note */}
              <Box
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: '12px',
                  background: 'rgba(79, 142, 247, 0.06)',
                  border: '1px solid rgba(79, 142, 247, 0.2)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#4ade80',
                      boxShadow: '0 0 8px #4ade80',
                      animation: 'pulse 2s ease-in-out infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { opacity: 1 },
                        '50%': { opacity: 0.5 },
                      },
                    }}
                  />
                  <Typography variant="caption" sx={{ color: '#4ade80', fontWeight: 600 }}>
                    Available for Work
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.82rem' }}>
                  Open to full-time remote roles, freelance projects, and technical collaboration.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Contact form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: '16px',
                  background: isDark ? 'rgba(17, 24, 39, 0.8)' : '#ffffff',
                  border: isDark
                    ? '1px solid rgba(79, 142, 247, 0.12)'
                    : '1px solid rgba(79, 142, 247, 0.18)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: isDark ? 'none' : '0 4px 24px rgba(79,142,247,0.08)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: 'text.primary', mb: 3, fontSize: '1.2rem' }}
                >
                  Send a Message
                </Typography>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        py: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 56, color: '#4ade80' }} />
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        Message Sent!
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 320 }}>
                        Thanks for reaching out. I&apos;ll get back to you as soon as possible —
                        usually within 24 hours.
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => setSubmitted(false)}
                        sx={{ mt: 1 }}
                      >
                        Send Another
                      </Button>
                    </Box>
                  </motion.div>
                ) : (
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                  >
                    <Grid container spacing={2.5}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          required
                          inputProps={{ 'aria-label': 'Your full name' }}
                          sx={{ '& .MuiInputLabel-root': { fontSize: '0.9rem' } }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          required
                          inputProps={{ 'aria-label': 'Your email address' }}
                          sx={{ '& .MuiInputLabel-root': { fontSize: '0.9rem' } }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          helperText={errors.message}
                          required
                          placeholder="Tell me about your project or opportunity..."
                          inputProps={{ 'aria-label': 'Your message' }}
                          sx={{ '& .MuiInputLabel-root': { fontSize: '0.9rem' } }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          disabled={loading}
                          endIcon={<SendIcon />}
                          aria-label="Send message"
                          sx={{
                            py: 1.5,
                            fontSize: '1rem',
                            fontWeight: 600,
                          }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
