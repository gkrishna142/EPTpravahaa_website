import React from "react";
import { Users, Award, Briefcase, TrendingUp } from "react-feather";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users size={40} />,
      number: "500+",
      label: "Students Empowered",
      color: "#3b82f6"
    },
    {
      icon: <Award size={40} />,
      number: "200+",
      label: "Projects Completed",
      color: "#8b5cf6"
    },
    {
      icon: <Briefcase size={40} />,
      number: "50+",
      label: "Industry Partnerships",
      color: "#06b6d4"
    },
    {
      icon: <TrendingUp size={40} />,
      number: "98%",
      label: "Client Satisfaction",
      color: "#10b981"
    }
  ];

  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    }}>
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="text-center h-100 p-4" style={{
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
              }}>
                <div className="mb-3 d-flex justify-content-center" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <h3 className="mb-2" style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.5rem'
                }}>{stat.number}</h3>
                <p className="mb-0" style={{
                  fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                  color: '#64748b',
                  fontWeight: 500
                }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

