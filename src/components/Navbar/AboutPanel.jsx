import React from "react";
import { Users, Award, Cpu, Globe, Target, Zap } from "react-feather";
import { useNavigate } from "react-router-dom";

const AboutPanel = () => {
  const navigate = useNavigate();

  const values = [
    { 
      icon: <Award size={32} />, 
      title: "Innovation", 
      desc: "We solve real problems creatively with cutting-edge technologies.",
      color: "#3b82f6"
    },
    { 
      icon: <Users size={32} />, 
      title: "Community", 
      desc: "Empowering students, professionals, and businesses across India.",
      color: "#8b5cf6"
    },
    { 
      icon: <Cpu size={32} />, 
      title: "Quality", 
      desc: "Delivering reliable, high-quality digital solutions our users trust.",
      color: "#06b6d4"
    },
    { 
      icon: <Globe size={32} />, 
      title: "Sustainability", 
      desc: "Creating solutions with a positive impact on society and the environment.",
      color: "#10b981"
    }
  ];

  return (
    <div style={{ fontFamily: '"Poppins", sans-serif', paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(4rem, 10vw, 8rem)',
        paddingBottom: 'clamp(4rem, 10vw, 8rem)'
      }}>
        <div className="position-absolute" style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
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
                marginBottom: '2rem',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}>About Us</span>
              <h1 className="mb-4" style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
                Empowering India with <span style={{
                  background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Rudra Ride</span> & <span style={{
                  background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Edupravahaa</span>
              </h1>
              <p className="mb-5" style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.8,
                maxWidth: '800px',
                margin: '0 auto clamp(2rem, 4vw, 3rem) auto'
              }}>
                Innovating mobility and education solutions for a smarter, faster, and brighter India.
              </p>
              <button 
                className="btn"
                onClick={() => navigate("/contact")}
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
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
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
              marginBottom: '1rem'
            }}>Our Foundation</span>
            <h2 className="mb-3" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>Our Values</h2>
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#64748b',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>The principles that guide everything we do</p>
          </div>
          <div className="row g-4">
            {values.map((val, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div 
                  className="h-100 bg-white rounded shadow-sm border text-center p-4"
                  style={{
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderTop: `4px solid ${val.color}`,
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div>
                    <div className="mb-4 d-flex justify-content-center">
                      <div style={{
                        width: '70px',
                        height: '70px',
                        background: `linear-gradient(135deg, ${val.color}, ${val.color}dd)`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        {val.icon}
                      </div>
                    </div>
                    <h3 className="mb-3" style={{
                      fontSize: 'clamp(1.2rem, 1.6vw, 1.5rem)',
                      color: '#0f172a',
                      fontWeight: 700,
                      marginBottom: '1rem'
                    }}>{val.title}</h3>
                  </div>
                  <p style={{
                    fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                    color: '#475569',
                    lineHeight: 1.7,
                    marginBottom: 0
                  }}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="bg-white rounded shadow-lg p-5" style={{
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderLeft: '5px solid #3b82f6'
              }}>
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                    color: 'white'
                  }}>
                    <Target size={28} />
                  </div>
                  <h2 className="mb-0" style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#0f172a',
                    letterSpacing: '-0.02em'
                  }}>Our Vision</h2>
                </div>
                <p style={{
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                  color: '#475569',
                  lineHeight: 1.8,
                  marginBottom: 0
                }}>
                  To make Indian technology products globally recognized for innovation, reliability, and societal impact. Inspiring students, entrepreneurs, and professionals to trust in Indian solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff',
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="position-absolute" style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container position-relative text-center">
          <div className="d-flex justify-content-center mb-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
              width: '80px',
              height: '80px',
              background: 'rgba(59, 130, 246, 0.2)',
              border: '2px solid rgba(59, 130, 246, 0.4)',
              color: '#60a5fa'
            }}>
              <Zap size={40} />
            </div>
          </div>
          <h2 className="mb-4" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
          }}>Join Our Journey</h2>
          <p className="mb-5" style={{
            fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.8,
            maxWidth: '700px',
            margin: '0 auto clamp(2rem, 4vw, 3rem) auto'
          }}>
            Be a part of India's innovation story. Whether you're a student, professional, or business, our products empower you to achieve more.
          </p>
          <button 
            className="btn"
            onClick={() => navigate("/contact")}
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
            }}
          >
            Start Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPanel;
