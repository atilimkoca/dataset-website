// pages/AboutUs.js
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContactSection from './contact'; 
// Import images from the assets folder
import image from '../assets/images/image.webp';
import video from '../assets/images/video.webp';
import glucose from '../assets/images/glucose.webp';
import ai_lab from '../assets/images/ai_computer_lab_image.png';
import our_mission from '../assets/images/our_mission.png';
import research from '../assets/images/research.png';
import support from '../assets/images/support.png';
import focus_area from '../assets/images/key_focus_areas_image.png';
import glucose2 from '../assets/images/glucose_prediction_image.png';
import './AboutUs.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.8 } // Trigger animations closer to full view
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}
function FocusAreaCard({ title, icon, description }) {
  return (
    <div className="focus-area-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
function AboutUs() {
  const sections = [
    {
      title: 'About IKCU AI Lab',
      content: 'Pioneering AI Research in Healthcare at Izmir Katip Celebi University.',
      backgroundImage: ai_lab, // Pass imported image directly
    },
    {
      title: 'Our Mission',
      content: `At IKCU AI Lab, we are dedicated to advancing healthcare through innovative 
                artificial intelligence solutions. Our research focuses on developing 
                cutting-edge AI technologies that can improve patient care and medical 
                decision-making processes.`,
      backgroundImage: our_mission,
    },
    {
      
      title: 'Key Focus Areas',
      content: (
        <div className="focus-area-grid">
          <FocusAreaCard 
            title="Medical AI Research" 
            icon="🔬" 
            description="Exploring cutting-edge AI applications for medical research."
          />
          <FocusAreaCard 
            title="Healthcare Analytics" 
            icon="📊" 
            description="Leveraging data to drive insights and improve healthcare outcomes."
          />
          <FocusAreaCard 
            title="Patient Data Processing" 
            icon="💻" 
            description="Processing patient data securely to support clinical decision-making."
          />
          <FocusAreaCard 
            title="Predictive Healthcare Models" 
            icon="📈" 
            description="Building predictive models to enhance patient care and treatment."
          />
        </div>// Another imported image if needed
    ), backgroundImage: focus_area},
    {
      title: 'Current Research Projects',
      content: (
        <div className="card-container">
          <Card 
            title="Medical Image Captioning" 
            content="Developing advanced AI models to automatically generate accurate descriptions of medical images, helping healthcare professionals in diagnosis and documentation."
            image={image}
          />
          <Card 
            title="Medical Video Captioning" 
            content="Creating AI systems that can analyze and describe medical procedure videos, enhancing medical education and documentation processes."
            image={video}
          />
          <Card 
            title="Glucose Prediction" 
            content="Developing predictive models for glucose levels, providing a tool for healthcare providers to better manage diabetes care."
            image={glucose}
          />
        </div>
      ),
      backgroundImage: research,
    },
    {
      title: 'TUBITAK Support',
      content: `Our projects are proudly supported by TUBITAK (The Scientific and Technological Research Council of Turkey), which provides crucial funding and resources that enable us to drive forward our innovative research in AI and healthcare.`,
      backgroundImage: support,
    },
    {
      title: 'Contact Us',
      content: (
        <div className="contact-section">
      
      <div className="contact-container">
        <div id="map"></div>
        <div className="contact-info">
          <h3>IKCU AI Lab</h3>
          <p>Pioneering AI Research in Healthcare at Izmir Katip Celebi University.</p>
          <address>
            Izmir Katip Celebi University,<br />
            Faculty of Engineering and Architecture,<br />
            Lab HZ 44
          </address>
          <p>
            <strong>Email:</strong> <a href="mailto:ikcuailab@gmail.com">ikcuailab@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
      ),
      backgroundImage: glucose2, // Optional: Background image if desired
    },
  ];
  
  useEffect(() => {
    // Load Google Maps API and initialize map if the contact section is visible
    const loadGoogleMaps = () => {
      const google = window.google;
      const myCenter = { lat: 38.4629, lng: 27.2261 }; // Replace with your actual latitude and longitude

      const map = new google.maps.Map(document.getElementById("map"), {
        center: myCenter,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      new google.maps.Marker({
        position: myCenter,
        map: map,
      });
    };
  
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`; // Replace YOUR_API_KEY with an actual API key
      script.async = true;
      script.onload = loadGoogleMaps;
      document.head.appendChild(script);
    } else {
      loadGoogleMaps();
    }
  }, []);
  return (
    <div className="about-us-page">
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          content={section.content}
          backgroundImage={section.backgroundImage}
        />
      ))}
    </div>
  );
}

function Section({ title, content, backgroundImage }) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`section ${isVisible ? 'visible' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div> {/* Added overlay */}
      <div className="section-content">
        <h2>{title}</h2>
        <div className="section-text">{content}</div>
      </div>
    </div>
  );
}

function Card({ title, content, image }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
}

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
// };

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
//   backgroundImage: PropTypes.string.isRequired,
// };

export default AboutUs;
