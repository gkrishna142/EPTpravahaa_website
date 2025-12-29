import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Empower Your Learning with Edupravahaa",
    description:
      "Edupravahaa provides world-class educational content, interactive courses, and hands-on learning experiences designed for all ages. Learn anytime, anywhere — your growth starts here.",
    button: "Explore Edupravahaa",
    link: "/edupravahaa",
  },
  {
    title: "Ride Smart, Ride Safe with Rudra Ride",
    description:
      "Experience effortless commuting with Rudra Ride. Book your rides instantly, track in real-time, and enjoy a comfortable journey backed by technology and trust.",
    button: "Explore Rudra Ride",
    link: "/rudra-rides",
  },
  {
    title: "Innovate. Learn. Move Forward.",
    description:
      "At EPTPRAVAHAA EDU TECH SOLUTIONS, we combine technology, innovation, and creativity to transform ideas into impactful digital solutions for education, mobility, and beyond.",
    button: "Get Started",
    link: "/contact",
  },
];

function Banner() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="position-relative" style={{
      width: '100%',
      height: 'clamp(500px, 70vh, 700px)',
      minHeight: '500px',
      overflow: 'hidden',
      fontFamily: '"Poppins", sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      marginTop: '80px',
      background: 'linear-gradient(135deg, #0a1a66 0%, #1e3a8a 50%, #3b82f6 100%)'
    }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`position-absolute w-100 h-100 d-flex justify-content-center align-items-center ${index === current ? '' : 'd-none'}`}
          style={{
            inset: 0,
            opacity: index === current ? 1 : 0,
            transform: index === current ? 'scale(1)' : 'scale(1.1)',
            transition: 'opacity 1s ease-in-out, transform 1.5s ease-in-out',
            background: 'linear-gradient(135deg, #0a1a66 0%, #1e3a8a 50%, #3b82f6 100%)',
            backgroundSize: '100% 100%',
            zIndex: index === current ? 2 : 1
          }}
        >
          <div className="text-center" style={{ 
            maxWidth: '900px', 
            padding: 'clamp(1.5rem, 3vw, 3rem)',
            margin: '0 auto'
          }}>
            <h1 className="mb-4" style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              letterSpacing: '-0.02em'
            }}>{slide.title}</h1>
            <p className="mb-5" style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.8,
              maxWidth: '850px',
              margin: '0 auto clamp(2rem, 4vw, 3rem) auto',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}>{slide.description}</p>
            <button
              className="btn"
              onClick={() => navigate(slide.link)}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 18px rgba(0, 229, 255, 0.5)';
              }}
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                border: 'none',
                padding: 'clamp(0.875rem, 1.8vw, 1.125rem) clamp(2rem, 4vw, 3rem)',
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                fontWeight: 600,
                color: '#fff',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                letterSpacing: '0.3px',
                textTransform: 'none'
              }}
            >
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      <div className="position-absolute" style={{
        bottom: 'clamp(30px, 5vh, 60px)',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 'clamp(10px, 1.5vw, 15px)',
        zIndex: 3,
        alignItems: 'center'
      }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className="rounded-circle"
            onClick={() => setCurrent(index)}
            onMouseEnter={(e) => {
              if (index !== current) {
                e.target.style.background = 'rgba(255, 255, 255, 0.6)';
                e.target.style.transform = 'scale(1.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (index !== current) {
                e.target.style.background = 'rgba(255, 255, 255, 0.4)';
                e.target.style.transform = 'scale(1)';
              }
            }}
            style={{
              width: 'clamp(10px, 1.2vw, 14px)',
              height: 'clamp(10px, 1.2vw, 14px)',
              background: index === current ? '#00e5ff' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transform: index === current ? 'scale(1.4)' : 'scale(1)',
              boxShadow: index === current ? '0 0 15px rgba(0, 229, 255, 0.8)' : 'none',
              transition: 'all 0.3s ease',
              border: index === current ? '2px solid rgba(255, 255, 255, 0.3)' : '2px solid transparent'
            }}
          ></span>
        ))}
      </div>

      <div className="w-100 text-center" style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        color: '#1e293b',
        fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 2vw, 2rem)'
      }}>
        <div className="container">
          <p className="mb-0" style={{ 
            lineHeight: 1.8, 
            maxWidth: '1000px', 
            margin: '0 auto',
            color: '#475569',
            fontWeight: 400
          }}>
            <span style={{ color: '#3b82f6', fontWeight: 600 }}>Edupravahaa</span> empowers students with
            personalized, high-quality learning experiences, while{" "}
            <span style={{ color: '#3b82f6', fontWeight: 600 }}>Rudra Ride</span> redefines travel with
            technology-driven, safe, and convenient mobility. Together, we help
            you <span style={{ color: '#3b82f6', fontWeight: 600 }}>explore, learn, and grow</span> every
            day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
