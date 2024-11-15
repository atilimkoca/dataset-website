// DatasetRequest.js
import React, { useState } from 'react';
import './DatasetRequest.css';
import emailjs from 'emailjs-com'; // Import EmailJS
import logo from '../assets/images/ai-lab-logo.png';

function DatasetRequest() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_tih99ju',    // Replace with your EmailJS Service ID
      'template_d2ku5hi',    // Replace with your EmailJS Template ID
      {
        name: formData.name,
        institution: formData.institution,
        email: formData.email,
        reason: formData.reason
      },
      'T8wG6kmkFXZEAWSLD'         // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
      alert("Your request has been submitted successfully!");
      setFormData({ name: '', institution: '', email: '', reason: '' }); // Reset form
    })
    .catch((err) => {
      console.error('Failed to send email. Error: ', err);
      alert("Failed to submit request. Please try again.");
    });
  };

  return (
    <div className="dataset-page">
    <div className="dataset-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Dataset Request Form</h1>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            required /* This makes the name field required */
          />
          <input 
            type="text" 
            name="institution" 
            placeholder="Institution" 
            value={formData.institution}
            onChange={handleChange}
            required /* This makes the institution field required */
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required /* This makes the email field required */
          />
          <textarea 
            name="reason" 
            placeholder="Please describe the intended use and objectives for this dataset" 
            value={formData.reason}
            onChange={handleChange}
            required /* This makes the reason field required */
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="overlay">
        <img src={logo} alt="IKCU AI Lab Logo" className="logo" />
        <h1>IKCU AI Lab</h1>
        <p>Pioneering AI Research in Healthcare</p>
      </div>
    </div>
    </div>
  );
}

export default DatasetRequest;
