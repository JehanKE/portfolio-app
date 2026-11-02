import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaSpinner,
  FaExclamationCircle
} from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Contact.scss';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio message from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setFormSubmitted(true);
      } else {
        throw new Error(result.message || 'Failed to deliver message.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(
        'Unable to send automatically right now. Please try again or open in your email client.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Connect</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you are looking for a Senior Software Engineer, want to discuss system architectures, or have an exciting opportunity, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaEnvelope />
              </div>
              <div className="contact-card-details">
                <span className="contact-label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-value">
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="copy-action-btn"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <FaCheck className="copied-icon" /> : <FaCopy />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-card-details">
                <span className="contact-label">Phone & WhatsApp</span>
                <a href={`tel:${personalInfo.phone}`} className="contact-value">
                  {personalInfo.phone}
                </a>
              </div>
              <button
                onClick={handleCopyPhone}
                className="copy-action-btn"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? <FaCheck className="copied-icon" /> : <FaCopy />}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-card-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">{personalInfo.location}</span>
              </div>
            </div>

            {/* Socials Card */}
            <div className="socials-box">
              <span className="socials-box-title">Follow & Connect</span>
              <div className="socials-grid-btns">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-network-btn linkedin"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-network-btn github"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form with FormSubmit Backend */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-subtitle">
                Delivered straight to my personal inbox at <strong>{personalInfo.email}</strong>.
              </p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <div className="success-icon-wrap">
                    <FaCheck />
                  </div>
                  <h4>Message Sent to Jehan!</h4>
                  <p>
                    Thank you for reaching out, <strong>{formData.name}</strong>. Your message has been sent directly to my inbox and I will reply to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {submitError && (
                    <div className="form-error-banner">
                      <FaExclamationCircle className="error-icon" />
                      <div>
                        <p>{submitError}</p>
                        <a
                          href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                            formData.subject || 'Portfolio Inquiry'
                          )}&body=${encodeURIComponent(formData.message)}`}
                          className="error-fallback-link"
                        >
                          Send via Email Client instead &rarr;
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        disabled={isSubmitting}
                        placeholder="Required"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        disabled={isSubmitting}
                        placeholder="Required"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      required
                      disabled={isSubmitting}
                      placeholder="Required"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="spinner-icon" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
