'use client';

import React from 'react';
import Lottie from 'lottie-react';
import foodAnimation from '../lotties/food.json';

const Hero = () => (
  <div className="hero-section">
    <Lottie animationData={foodAnimation} loop={true} className="lottie-hero" />
    <div className="hero-overlay">
      <h1 className="hero-title">Welcome to Spice & Soul</h1>
      <a href="/reservations" className="btn btn-primary mt-3">Book a Table</a>
    </div>
    <img 
      src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80" 
      alt="Spice & Soul Hero" 
      className="hero-image-bg"
    />
  </div>
);

export default Hero;
