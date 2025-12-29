import React from "react";
import { Linkedin, Instagram } from "react-feather";
import logo from "../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Navigation Handlers
  const handlestudentbook = () => navigate("/edupravahaa");
  const handlebusinessguider = () => navigate("/rudra-rides");
  const handleFAQ = () => navigate("/FAQ");
  const handlePrivacyPolicy = () => navigate("/PrivacyPolicy");
  const handleTermsConditions = () => navigate("/TermsConditions");

  return (
    <footer className="w-100" style={{
      background: 'linear-gradient(135deg, #0a1f44, #052b64)',
      color: '#f4f4f4',
      padding: '60px 10%',
      fontFamily: '"Poppins", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-md-6 col-lg-3">
            <div className="d-flex align-items-center mb-3" style={{ gap: '12px' }}>
              <img src={logo} alt="EPT Pravahaa Logo" style={{
                width: '55px',
                height: '55px',
                borderRadius: '10px',
                border: '2px solid #00bfff'
              }} />
              <h3 className="h6 mb-0 text-white" style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}>EPTPRAVAHAA EDU TECH SOLUTIONS PVT LTD</h3>
            </div>
            <p className="text-white-50" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
              Where innovation meets technology, crafting intelligent products, scalable software, and beautiful digital experiences that bring your ideas to life.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://www.linkedin.com/company/eptpravahaa-edu-tech-solutions-private-limited/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ transition: 'all 0.3s' }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/reel/DQt1yqPDxIc/?igsh=bTdlbmlzaW4ydDY0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ transition: 'all 0.3s' }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="col-md-6 col-lg-3">
            <h4 className="text-white mb-3" style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
              borderBottom: '2px solid #007bff',
              display: 'inline-block',
              paddingBottom: '5px'
            }}>Products</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span
                  onClick={handlestudentbook}
                  className="text-white-50"
                  style={{
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s'
                  }}
                >
                  EDU PRAVAHAA
                </span>
              </li>
              <li className="mb-2">
                <span
                  onClick={handlebusinessguider}
                  className="text-white-50"
                  style={{
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s'
                  }}
                >
                  Rudra Ride
                </span>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-md-6 col-lg-3">
            <h4 className="text-white mb-3" style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
              borderBottom: '2px solid #007bff',
              display: 'inline-block',
              paddingBottom: '5px'
            }}>Support</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span
                  onClick={handleFAQ}
                  className="text-white-50"
                  style={{
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s'
                  }}
                >
                  FAQ
                </span>
              </li>
              <li className="mb-2">
                <span
                  onClick={handlePrivacyPolicy}
                  className="text-white-50"
                  style={{
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s'
                  }}
                >
                  Privacy Policy
                </span>
              </li>
              <li className="mb-2">
                <span
                  onClick={handleTermsConditions}
                  className="text-white-50"
                  style={{
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s'
                  }}
                >
                  Terms & Conditions
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Info Section */}
          <div className="col-md-6 col-lg-3">
            <h4 className="text-white mb-3" style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
              borderBottom: '2px solid #007bff',
              display: 'inline-block',
              paddingBottom: '5px'
            }}>Our Platforms</h4>
            <ul className="list-unstyled">
              <li className="mb-2 text-white-50" style={{ fontSize: '0.95rem' }}>LMS Platform</li>
              <li className="mb-2 text-white-50" style={{ fontSize: '0.95rem' }}>Rudra Ride Platform</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 text-center" style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        fontSize: '0.9rem',
        color: '#aaa'
      }}>
        <p className="mb-2">
          © {new Date().getFullYear()} <strong style={{ color: '#00bfff' }}>EPTPRAVAHAA EDU TECH SOLUTIONS</strong> — All Rights Reserved.
        </p>
        <span>Designed & Developed by <strong style={{ color: '#00bfff' }}>EPTPRAVAHAA EDU TECH SOLUTIONS</strong></span>
      </div>
    </footer>
  );
};

export default Footer;
