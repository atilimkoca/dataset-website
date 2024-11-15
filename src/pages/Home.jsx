import React from 'react';
import ParticlesAnimation from '../components/ParticlesAnimation';

const Home = () => {
  return (
    <>
      <section id="homepage-hero">
        <ParticlesAnimation />
        
        <div className="content-wrapper">
          <div className="container">
            <div className="hero-content">
              <h1>IKCU AI Lab</h1>
              <p>
                Advancing healthcare through artificial intelligence research and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;