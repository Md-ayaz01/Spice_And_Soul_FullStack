'use client';

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  const linkStyle = (path) => ({
    color: pathname === path ? '#ff6347' : '#fff', // Tomato color when active, white otherwise
    fontWeight: pathname === path ? 'bold' : 'normal',
    textDecoration: 'none',
    margin: '0 10px',
    transition: '0.3s ease',
    borderBottom: pathname === path ? '2px solid #ff6347' : '2px solid transparent',
    paddingBottom: '4px'
  });

  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: '#1a1a1a' }} className="p-3 shadow-sm">
      <Container>
        <Link href="/" className="navbar-brand" style={{ color: '#ff6347', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Spice & Soul
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link href="/" style={linkStyle('/')}>Home</Link>
            <Link href="/menu" style={linkStyle('/menu')}>Menu</Link>
            <Link href="/gallery" style={linkStyle('/gallery')}>Gallery</Link>
            <Link href="/reservations" style={linkStyle('/reservations')}>Reservations</Link>
            <Link href="/about" style={linkStyle('/about')}>About</Link>
            <Link href="/contact" style={linkStyle('/contact')}>Contact</Link>
            <Link href="/blog" style={linkStyle('/blog')}>Blog</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
