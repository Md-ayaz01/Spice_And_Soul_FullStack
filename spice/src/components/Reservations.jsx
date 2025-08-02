'use client';

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { RESERVATION_API } from '@/utils/api';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
    guests: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, datetime, guests, message } = formData;

    const [date, time] = datetime.split('T'); // Split datetime-local

    const payload = {
      name,
      email,
      phone: '', // optional, not included in form
      date,
      time,
      guests,
      message,
    };

    try {
      const res = await fetch(`${RESERVATION_API}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert(data.message || 'Error: ' + data.error);
    } catch (error) {
      alert('Server Error: ' + error.message);
    }
  };

  return (
    <motion.div
      id="reservations"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container className="my-5 p-5 rounded glass text-center shadow-lg">
        <h2 className="mb-4 fw-bold">Reserve a Table</h2>
        <p className="mb-4">Book your dining experience now!</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="datetime-local"
              name="datetime"
              required
              value={formData.datetime}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              name="guests"
              placeholder="Number of Guests"
              min="1"
              max="20"
              required
              value={formData.guests}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              placeholder="Special requests (optional)"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="danger" size="lg" type="submit">
            Book Now
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
};

export default Reservations;
