import React from "react";
import slideBackground from '../assets/images/image1.png';

function Slide() {
  return (
    <div className="position-relative d-flex align-items-center justify-content-center" style={{
      minHeight: '50rem',
      backgroundImage: `url(${slideBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      overflow: 'hidden'
    }}>
      <div className="position-absolute" style={{
        inset: 0,
        background: 'rgba(0, 26, 102, 0.6)',
        zIndex: 1
      }}></div>
      <div className="position-relative text-center text-white rounded" style={{
        zIndex: 2,
        width: '65%',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '3rem 2rem',
        backdropFilter: 'blur(8px)'
      }}>
        <h1 className="mb-4" style={{
          fontSize: '2.5rem',
          color: '#3f63d6'
        }}>Empowering Learning & Mobility</h1>
        <p className="mb-0" style={{
          fontSize: '1.1rem',
          lineHeight: 1.8
        }}>
          📚 <strong>Edupravahaa</strong> delivers interactive, high-quality video lessons for students, making learning fun, engaging, and accessible anytime, anywhere.  
          🚗 <strong>Rudra Ride</strong> provides safe, fast, and reliable transportation solutions, ensuring you reach your destination hassle-free.  
          Together, we <span style={{ color: '#00cfff', fontWeight: 700 }}>transform experiences</span> for a smarter and connected future.
        </p>
      </div>
    </div>
  );
}

export default Slide;
