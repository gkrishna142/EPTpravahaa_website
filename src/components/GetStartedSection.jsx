import React from "react";
import { useNavigate } from "react-router-dom";
import RudraImage from "../assets/images/getintouch.png";

const GetStartedSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#fff',
      fontFamily: '"Poppins", sans-serif',
      paddingTop: 'clamp(4rem, 8vw, 6rem)',
      paddingBottom: 'clamp(4rem, 8vw, 6rem)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="position-absolute" style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(59, 130, 246, 0.2)',
              color: '#60a5fa',
              borderRadius: '50px',
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}>Get Started</span>
            <h2 className="mb-4" style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
            }}>
              Experience <span style={{ 
                background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Innovation</span> in Motion
            </h2>
            <p className="mb-4" style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
            }}>
              Ready to transform the way you move and learn? Discover{" "}
              <strong style={{ color: '#60a5fa' }}>Rudra Ride</strong> for seamless, safe mobility and{" "}
              <strong style={{ color: '#60a5fa' }}>Edupravahaa</strong> for engaging digital learning.
              Whether riding across the city or enhancing education, our
              solutions are built to simplify and empower your journey.
            </p>
            <p className="mb-4" style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: 'clamp(2rem, 4vw, 2.5rem)'
            }}>
              Take the next step toward innovation today — connect with us and
              explore how our products can drive your success.
            </p>
            <button 
              className="btn" 
              onClick={handleContactClick} 
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.4)';
              }}
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                border: 'none',
                padding: 'clamp(0.875rem, 1.5vw, 1.125rem) clamp(2rem, 4vw, 3rem)',
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                fontWeight: 600,
                color: '#fff',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px'
              }}>
              Get in Touch
            </button>
          </div>

          <div className="col-lg-6 text-center position-relative">
            <div className="position-relative" style={{
              display: 'inline-block'
            }}>
              <div className="position-absolute" style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: 0
              }}></div>
              <img src={RudraImage} alt="Rudra Innovation" className="img-fluid rounded position-relative" style={{
                maxWidth: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 20px 40px rgba(59, 130, 246, 0.3))',
                transition: 'transform 0.4s ease',
                zIndex: 1,
                borderRadius: '16px'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
