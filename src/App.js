// App.js
import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './App.css';

function App() {
  // State to store form data and submission status
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Clear the form data
    setFormData({ name: '', email: '', message: '' });

    // Hide the success message after 2 seconds
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <div className="App">
      <div className="ContactForm-Container">
        {/* Header Section */}
        <header className="header">
          <img className="logo" src="https://culturelinkr.com/logo.png" alt="CultureLinkr Logo" />
          <h3 className="header-title">CultureLinkr</h3>
        </header>

        {/* Content Section */}
        <div className="content-container">
          {/* Left Section: Text and Contact Info */}
          <div className="content-section">
            <div className="text-container">
              <h1 className="text-section">Let's talk</h1>
              <p className="text-statement">Ask us anything or just say hi...</p>
            </div>

            <div className="contact-container">
              <div className="contact-section">
                <FaPhoneAlt className="icon" />
                <p className="text-statement">12345678</p>
              </div>
              <div className="contact-section">
                <MdEmail className="icon" />
                <p className="text-statement">hai@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <label className="form-labels">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />

              <label className="form-labels">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                required
              />

              <label className="form-labels">Message</label>
              <input type = "text"
                className="input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi there..."
                required
              />

              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {isSubmitted && <p className="success-message">Thank you! Your message has been sent!</p>}
    </div>
  );
}

export default App;
