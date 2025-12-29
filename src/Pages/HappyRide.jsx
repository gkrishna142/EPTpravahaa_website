import React from "react";
import Happyrideimage from "../assets/images/Happyrideimage1.png";

function HappyRide() {
  return (
    <div className="py-5" style={{
      fontFamily: '"Poppins", sans-serif',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      paddingTop: '100px',
      minHeight: '100vh'
    }}>
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5" style={{
          paddingTop: 'clamp(2rem, 4vw, 4rem)',
          paddingBottom: 'clamp(2rem, 4vw, 4rem)'
        }}>
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            color: 'white',
            borderRadius: '50px',
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>Our Products</span>
          <h2 className="mb-4" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>Our Products</h2>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>Innovative solutions transforming the way you travel</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-white rounded shadow-lg border overflow-hidden" style={{
              border: '1px solid rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}>
              <div className="row g-0">
                <div className="col-md-6" style={{
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '400px'
                }}>
                  <img src={Happyrideimage} alt="Happy Ride" className="img-fluid w-100 h-100" style={{
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }} />
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), transparent)',
                    pointerEvents: 'none'
                  }}></div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="p-5" style={{
                    padding: 'clamp(2rem, 3vw, 3rem)'
                  }}>
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded d-flex align-items-center justify-content-center me-3" style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                        color: 'white'
                      }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <h1 className="mb-0" style={{
                        fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                        fontWeight: 800,
                        color: '#0f172a',
                        letterSpacing: '-0.02em'
                      }}>Happy Ride</h1>
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                      lineHeight: 1.8,
                      color: '#475569',
                      marginBottom: 0
                    }}>
                      Happy Ride is a reliable and user-friendly ride booking platform.
                      It connects passengers with trusted drivers, offering safe,
                      affordable, and comfortable travel experiences anytime, anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HappyRide;
