// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import url1 from '../assets/url1.jpg';
import url2 from '../assets/url2.jpeg';
import url3 from '../assets/url3.jpeg';

const Home = () => {
  const images = [url1, url2, url3];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="home" style={{ backgroundImage: `url(${randomImage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center', paddingTop: '20%' }}>
      <h1>Welcome to the Monthly Menu Planner</h1>
      <p>Plan your meals for the entire month with ease.</p>
      <p>Get started by adding your favorite recipes and generate a monthly menu.</p>
      <Link to="/recipes" className="btn btn-primary btn-lg">Get Started</Link>
    </div>
  );
};

export default Home;
