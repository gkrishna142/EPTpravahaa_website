import React from "react";
import edupravahaa from "../assets/images/traning.jpg";
import { CheckCircle } from "react-feather";

function EDUPravahaa() {
  const features = [
    {
      title: "Expert IT Trainers",
      desc: "Learn from top professionals with real-world experience in software development and IT solutions.",
    },
    {
      title: "Live Interactive Classes",
      desc: "Join engaging live sessions packed with coding challenges, discussions, and projects.",
    },
    {
      title: "Flexible Learning",
      desc: "Access your learning materials anytime, anywhere, and grow at your own pace with mentorship.",
    },
    {
      title: "Cutting-edge Courses",
      desc: "Master technologies like AI, Web Development, DevOps, and Data Science through practical training.",
    },
  ];

  return (
    <section style={{
      fontFamily: '"Poppins", sans-serif',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      color: '#222',
      overflowX: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Hero Section */}
      <div className="py-5 position-relative" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
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
                marginBottom: '2rem',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}>Education Platform</span>
              <h1 className="mb-4 text-white" style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
                Master Future-Ready Skills with <span style={{
                  background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>EDU PRAVAHAA</span>
              </h1>
              <p className="mb-4 text-white" style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.8,
                maxWidth: '600px'
              }}>
                Learn cutting-edge technologies with expert trainers through live interactive sessions
                designed to make you job-ready.
              </p>
              <span className="d-inline-block mb-4" style={{
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#60a5fa',
                fontWeight: 500,
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}>🚀 Our next batch of online training is launching soon!</span>
            </div>
            <div className="col-lg-6 text-center position-relative">
              <div className="position-relative" style={{ display: 'inline-block' }}>
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
                <img src={edupravahaa} alt="EDU PRAVAHAA Platform" className="img-fluid rounded position-relative" style={{
                  maxWidth: '100%',
                  height: 'auto',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.5s ease',
                  zIndex: 1,
                  borderRadius: '16px'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5" style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
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
            }}>Why Choose Us</span>
            <h2 className="mb-3" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}>Why Choose EDU PRAVAHAA?</h2>
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#64748b',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>Comprehensive learning solutions designed for your success</p>
          </div>
          <div className="row g-4 justify-content-center">
            {features.map((f, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="h-100 bg-white rounded shadow-sm border text-center p-4" style={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderTop: '4px solid #3b82f6',
                  transition: 'all 0.3s ease',
                  minHeight: '300px',
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
                }}>
                  <div>
                    <div className="mb-4 d-flex justify-content-center">
                      <div className="rounded d-flex align-items-center justify-content-center" style={{
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                        color: 'white'
                      }}>
                        <CheckCircle size={32} />
                      </div>
                    </div>
                    <h3 className="mb-3" style={{
                      fontSize: 'clamp(1.2rem, 1.6vw, 1.5rem)',
                      color: '#0f172a',
                      fontWeight: 700,
                      marginBottom: '1rem'
                    }}>{f.title}</h3>
                  </div>
                  <p className="mb-0" style={{
                    fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                    color: '#475569',
                    lineHeight: 1.7
                  }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-5" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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
          <h2 className="mb-4 text-white" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
          }}>Transform Your IT Career with EDU PRAVAHAA</h2>
          <p className="mb-5 text-white mx-auto" style={{
            fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.8,
            maxWidth: '700px',
            margin: '0 auto clamp(2rem, 4vw, 3rem) auto'
          }}>Be the first to join when we launch — stay tuned for our next batch announcement!</p>
          <button className="btn btn-light" disabled style={{
            padding: 'clamp(0.875rem, 1.5vw, 1.125rem) clamp(2rem, 4vw, 3rem)',
            borderRadius: '8px',
            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            fontWeight: 600,
            opacity: 0.85,
            cursor: 'not-allowed',
            background: 'white',
            color: '#3b82f6',
            border: 'none'
          }}>
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}

export default EDUPravahaa;
