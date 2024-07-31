// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import url1 from '../assets/url1.jpg';
import url2 from '../assets/url2.jpeg';
import url3 from '../assets/url3.jpeg';
import url4 from '../assets/url4.jpeg';
import url5 from '../assets/url5.jpeg';

const Home = () => {
  const images = [url1, url2, url3, url4, url5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div
      className="home"
      style={{
        position: 'relative',
        height: '94vh',
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '20px',
          maxWidth: '600px',
          width: '100%'
        }}
      >
        <h1>Welcome to the Monthly Menu Planner</h1>
        <p>Plan your meals for the entire month with ease.</p>
        <p>Get started by adding your favorite food menus and generate a monthly menu.</p>
        <Link to="/menu-list" className="btn btn-primary btn-lg">Get Started</Link>
      </div>
    </div>
  );
};

export default Home;
