'use client';

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToReservation = () => {
    const section = document.getElementById('reservations');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-section"
      style={{
        position: 'relative',
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      {/* Glassmorphism Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(6px)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container style={{ zIndex: 2 }} className="text-center">
        <motion.h1
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Experience Flavor & Innovation
        </motion.h1>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Welcome to Spice & Soul — where exquisite cuisine meets AI-powered dining.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button variant="danger" size="lg" onClick={scrollToReservation}>
            Book a Table
          </Button>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Hero;
