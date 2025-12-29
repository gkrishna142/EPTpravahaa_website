import React from "react";
import { Cpu, CheckCircle, Shield, Users, Share2, TrendingUp, Globe, UserCheck } from "react-feather";

const features = [
  {
    icon: <Cpu size={32} />,
    title: "EdTech Innovation",
    description: "Edupravahaa leverages cutting-edge technology to deliver interactive and personalized learning experiences. We innovate constantly to ensure students gain skills for a digital future."
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Top-Quality Learning",
    description: "Our educational content is crafted by experts to meet the highest standards. Every lesson is engaging, accurate, and designed to empower students to achieve their best."
  },
  {
    icon: <Shield size={32} />,
    title: "Safety & Trust",
    description: "Rudra Ride ensures secure, reliable, and punctual transport services. Our commitment to safety and transparency builds trust with every journey."
  },
  {
    icon: <Users size={32} />,
    title: "Customer-Centric",
    description: "We put our users first. Whether it's learners using Edupravahaa or commuters using Rudra Ride, every decision is made to enhance their experience and satisfaction."
  },
  {
    icon: <Share2 size={32} />,
    title: "Collaborative Growth",
    description: "Collaboration drives our success. We work with educators, partners, and communities to create solutions that benefit everyone involved."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Sustainable Impact",
    description: "Our goal is long-term growth for our users, employees, and communities. By embracing learning, innovation, and mobility, we create a brighter, connected future."
  },
  {
    icon: <Globe size={32} />,
    title: "Accessibility",
    description: "We make education and transport accessible to all. Edupravahaa delivers learning anytime, anywhere, and Rudra Ride ensures convenient mobility for communities."
  },
  {
    icon: <UserCheck size={32} />,
    title: "Sustainability",
    description: "We prioritize eco-friendly practices in mobility and responsible growth in education, aiming for a greener future for our planet and society."
  }
];

const FeatureSection = () => {
  return (
    <div className="py-5 text-center" id="about" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
      paddingTop: 'clamp(4rem, 8vw, 6rem)',
      paddingBottom: 'clamp(4rem, 8vw, 6rem)'
    }}>
      <div className="container">
        <div className="mb-5">
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
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>Our Core Strengths</h2>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>Delivering excellence through innovation, quality, and customer-centric solutions</p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div 
                className="h-100 bg-white rounded shadow-sm border" 
                style={{
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: 'clamp(2rem, 3vw, 2.5rem)',
                  minHeight: '340px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderTop: '4px solid #3b82f6'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.borderTopColor = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderTopColor = '#3b82f6';
                }}
              >
                <div className="mb-4 d-flex align-items-center justify-content-center" style={{ 
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)'
                }}>{feature.icon}</div>
                <h3 className="mb-3" style={{
                  fontSize: 'clamp(1.2rem, 1.6vw, 1.5rem)',
                  color: '#0f172a',
                  fontWeight: 700,
                  marginBottom: 'clamp(1rem, 1.5vw, 1.25rem)',
                  lineHeight: 1.3
                }}>{feature.title}</h3>
                <p style={{
                  fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                  color: '#475569',
                  lineHeight: 1.7,
                  textAlign: 'center',
                  marginBottom: 0
                }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
