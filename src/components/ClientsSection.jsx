import React from "react";
import { User, Users, BarChart2, Video, Smartphone, Play } from "react-feather";

import rudraRides from "../assets/images/rudra.png";
import edupravahaa from "../assets/images/Edupravahaa.png";

const productsData = [
  {
    name: "Rudra Ride",
    logo: rudraRides,
    description: `Rudra Ride is a cutting-edge mobility platform that offers seamless ride solutions. 
      Designed for convenience and safety, it connects riders with reliable transportation services for a smooth journey.`,
    features: [
      { icon: <Smartphone />, text: "Easy Booking – Request a ride through our intuitive mobile app." },
      { icon: <User />, text: "Safe & Reliable – Verified drivers and secure rides for all passengers." },
      { icon: <BarChart2 />, text: "Real-Time Tracking – Track your ride live with accurate location updates." },
      { icon: <Play />, text: "Seamless Payments – Multiple payment options for a hassle-free experience." },
      { icon: <Users />, text: "Customer Support – 24/7 support to resolve any ride-related issues." },
    ],
  },
  {
    name: "Edupravahaa",
    logo: edupravahaa,
    description: `Edupravahaa is an innovative education platform aimed at making learning more accessible, 
      engaging, and effective for students at all levels. It empowers both students and educators with digital-first tools.`,
    features: [
      { icon: <User />, text: "Student-Centric Learning – Lessons, tests, and progress tracking made easy." },
      { icon: <Users />, text: "Teacher Tools – Course creation, test management, and performance insights." },
      { icon: <BarChart2 />, text: "Smart Dashboards – Visual reports on learning trends and results." },
      { icon: <Video />, text: "Live Classes – Real-time online classroom integration." },
      { icon: <Smartphone />, text: "Multi-Device Access – Fully responsive for web and mobile." },
    ],
  }
];

const ProductsSection = () => {
  return (
    <div className="py-5" id="products" style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      paddingTop: 'clamp(4rem, 8vw, 6rem)',
      paddingBottom: 'clamp(4rem, 8vw, 6rem)'
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
          }}>Our Solutions</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#0f172a',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>Our Products</h2>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>Innovative platforms transforming education and mobility</p>
        </div>

        <div className="row g-4 justify-content-center">
          {productsData.map((product, index) => (
            <div className="col-md-6 col-lg-5" key={index}>
              <div className="h-100 bg-white rounded shadow-lg border" style={{
                transition: 'all 0.3s ease',
                maxWidth: '600px',
                margin: '0 auto',
                padding: 'clamp(2rem, 3vw, 2.5rem)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderTop: '4px solid #3b82f6'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}>
                <div className="d-flex align-items-center justify-content-center mb-3" style={{ gap: '20px' }}>
                  <img
                    src={product.logo}
                    alt={`${product.name} logo`}
                    style={{
                      width: product.name === "Edupravahaa" ? '60px' : '80px',
                      height: product.name === "Edupravahaa" ? '60px' : '80px',
                      objectFit: 'contain',
                      borderRadius: '10px',
                      border: '1px solid #0056a0',
                      padding: product.name === "Edupravahaa" ? '10px' : '0'
                    }}
                  />
                  <h3 className="mb-0" style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#0056a0'
                  }}>{product.name}</h3>
                </div>

                <p className="mb-3" style={{
                  fontSize: '1rem',
                  color: '#333',
                  lineHeight: 1.6,
                  textAlign: 'justify'
                }}>{product.description}</p>

                <div>
                  <h4 className="mb-3" style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#0056a0'
                  }}>Key Features</h4>
                  {product.features.map((feature, idx) => (
                    <div className="d-flex align-items-start mb-3" key={idx} style={{ gap: '12px' }}>
                      <span style={{
                        color: '#0056a0',
                        minWidth: '24px',
                        minHeight: '24px',
                        marginTop: '2px'
                      }}>{feature.icon}</span>
                      <span style={{ fontSize: '1rem', color: '#333' }}>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
