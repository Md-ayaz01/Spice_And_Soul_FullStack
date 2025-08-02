'use client';

import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer style={{ background: '#f8f9fa', padding: '20px 0', textAlign: 'center' }}>
    <Container>
      <p>© {new Date().getFullYear()} Spice & Soul. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
