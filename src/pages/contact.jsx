// ContactSection.js
import React, { useEffect } from 'react';
import './ContactSection.css';

function ContactSection() {
  useEffect(() => {
    // Initialize the Google Map after the component mounts
    const loadGoogleMaps = () => {
      const google = window.google;
      const myCenter = { lat: 51.308742, lng: -0.320850 };
      
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
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      script.async = true;
      script.onload = loadGoogleMaps;
      document.head.appendChild(script);
    } else {
      loadGoogleMaps();
    }
  }, []);

  return (
    <div className="map">
      <div id="map"></div>
      <div className="map-c">
        <h1>ABC Stores</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium id cumque est dolores voluptatibus.</p>
        <div className="det"><i className="fa fa-map-marker"></i> 102 New Road, New City</div>
        <div className="det"><i className="fa fa-phone"></i> 001 2045 509</div>
        <div className="det"><i className="fa fa-globe"></i> www.abcstores.com</div>
        <center>
          <button className="fa fa-car"></button>
          <button className="fa fa-envelope"></button>
        </center>
      </div>
    </div>
  );
}

export default ContactSection;
