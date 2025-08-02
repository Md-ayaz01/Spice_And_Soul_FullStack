import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import About from '../components/About';
import BlogPreview from '../components/BlogPreview';
import Reservations from '../components/Reservations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';



export const metadata = {
  title: 'Spice & Soul | Home',
  description: 'Experience the best dining at Spice & Soul',
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Menu />         {/* This shows the menu with images and dishes */}
      <Gallery />
      <About />
      <Reservations />
      <BlogPreview />
      <Contact />
      <Footer />
      <Chatbot />
      
    </main>
  );
}
