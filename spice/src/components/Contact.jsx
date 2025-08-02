'use client';

import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <Container className="my-5 p-5 glass text-center">
      <h2 className="mb-4 fw-bold">Get in Touch</h2>
      <p className="mb-4">Have questions or feedback? Send us a message!</p>
      <Form action="https://formspree.io/f/mwkjaqvz" method="POST">
        <Form.Group className="mb-3">
          <Form.Control type="text" name="name" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" name="email" placeholder="Your Email" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control as="textarea" rows={3} name="message" placeholder="Your Message" required />
        </Form.Group>
        <Button variant="primary" type="submit">Send Message</Button>
      </Form>
    </Container>
  </motion.div>
);

export default Contact;
