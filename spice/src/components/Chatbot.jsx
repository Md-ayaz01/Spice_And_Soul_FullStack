'use client';

import React, { useState } from 'react';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';
import { API_BASE } from '@/utils/api'; // Make sure this file exists: src/utils/api.js

const Chatbot = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: input })
      });

      const data = await response.json();
      const botMessage = { from: 'bot', text: data.response || 'Sorry, I didn’t understand that.' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Oops! Server error.' }]);
    }

    setLoading(false);
  };

  return (
    <>
      <Button
        variant="primary"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          zIndex: 9999
        }}
        onClick={() => setShow(true)}
      >
        💬
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Chat with Spice & Soul</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ textAlign: msg.from === 'bot' ? 'left' : 'right', margin: '5px 0' }}>
              <span style={{
                background: msg.from === 'bot' ? '#e9ecef' : '#0d6efd',
                color: msg.from === 'bot' ? '#000' : '#fff',
                padding: '8px 12px',
                borderRadius: '15px',
                display: 'inline-block'
              }}>
                {msg.text}
              </span>
            </div>
          ))}
          {loading && (
            <div style={{ textAlign: 'left', marginTop: '5px' }}>
              <span style={{
                background: '#e9ecef',
                color: '#000',
                padding: '8px 12px',
                borderRadius: '15px',
                display: 'inline-block'
              }}>
                Typing...
              </span>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="me-2"
          />
          <Button onClick={handleSend} disabled={loading}>Send</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Chatbot;
