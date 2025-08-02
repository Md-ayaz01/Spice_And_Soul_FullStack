'use client';

import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <Container className="my-5 p-5 glass text-center">
      <h2 className="mb-4 fw-bold">About Spice & Soul</h2>
      <Image
        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80"
        alt="About Spice & Soul"
        rounded
        fluid
        className="mb-4"
        style={{ maxHeight: '300px', objectFit: 'cover' }}
      />
      <p>
        At <strong>Spice & Soul</strong>, we combine AI with culinary excellence.
        Enjoy personalized dining experiences that merge tradition and innovation.
      </p>
    </Container>
  </motion.div>
);

export default About;
