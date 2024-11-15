import React from 'react';
import './Research.css';
import glucose from '../assets/images/glucose.webp';
import video from '../assets/images/video.webp';
import image from '../assets/images/image.webp';
const Research = () => {
  return (
    <div className="wrap">
      <div className="tile"> 
        <img src={image} alt="Medical Image Captioning"/>
        <div className="text">
          <h1>Medical Image Captioning</h1>
          <h2 className="animate-text">Advanced AI for Medical Image Analysis</h2>
          <p className="animate-text">
            Our research focuses on developing sophisticated AI models that can automatically 
            generate accurate descriptions of medical images. This technology assists healthcare 
            professionals in diagnosis and documentation, improving efficiency and accuracy in 
            medical image interpretation.
          </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="tile"> 
        <img src={video} alt="Medical Video Captioning"/>
        <div className="text">
          <h1>Medical Video Captioning</h1>
          <h2 className="animate-text">AI-Powered Video Analysis</h2>
          <p className="animate-text">
            We're developing intelligent systems that can analyze and describe medical procedure 
            videos in real-time. This technology enhances medical education, improves 
            documentation processes, and provides valuable insights for healthcare training 
            and procedure analysis.
          </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
  
      <div className="tile"> 
        <img src={glucose} alt="Glucose Prediction"/>
        <div className="text">
          <h1>Glucose Prediction</h1>
          <h2 className="animate-text">TUBITAK-Supported Research</h2>
          <p className="animate-text">
            Supported by TUBITAK, our glucose prediction project utilizes advanced AI models 
            to predict blood glucose levels accurately. This research aims to revolutionize 
            diabetes management through predictive analytics and personalized patient care 
            solutions.
          </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;