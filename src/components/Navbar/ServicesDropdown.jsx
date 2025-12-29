import React from "react";
import { Code, Cloud, CheckCircle, ArrowRight } from "react-feather";
import Webdevelopment from "../../assets/images/web-app.jpg";
import Devops from "../../assets/images/aws.png";
import Softwaretesting from "../../assets/images/qa.png";

function ServicesSection() {
  const services = [
    {
      title: "Web & Mobile Development",
      img: Webdevelopment,
      icon: <Code size={32} />,
      color: "#3b82f6",
      features: [
        "React.js for interactive web apps",
        "React Native for mobile solutions",
        "Python & Node.js for powerful backends",
        "RESTful APIs & integrations"
      ],
    },
    {
      title: "DevOps (AWS)",
      img: Devops,
      icon: <Cloud size={32} />,
      color: "#8b5cf6",
      features: [
        "Cloud architecture & deployment",
        "CI/CD pipeline setup",
        "Infrastructure automation",
        "Continuous monitoring & optimization"
      ],
    },
    {
      title: "Software Testing & QA",
      img: Softwaretesting,
      icon: <CheckCircle size={32} />,
      color: "#10b981",
      features: [
        "Manual & automated testing",
        "Performance & load testing",
        "Compatibility & security validation",
        "Continuous quality monitoring"
      ],
    },
  ];

  return (
    <section style={{
      fontFamily: '"Poppins", sans-serif',
      paddingTop: '100px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <div className="py-5" style={{
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
          <div className="text-center">
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
            }}>Our Services</span>
            <h1 className="mb-4" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
            }}>Our Services</h1>
            <p className="mx-auto" style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.8,
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              At <strong style={{ color: '#60a5fa' }}>EPTPRAVAHAA EDU TECH SOLUTIONS</strong>, we combine innovation, technology, and expertise 
              to deliver powerful digital solutions. From building intelligent software to securing your 
              digital ecosystem, we empower organizations to grow, innovate, and lead in the digital era.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-5" style={{
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}>
        <div className="container">
          {services.map((service, index) => (
            <div 
              key={index}
              className="mb-5"
            >
              <div 
                className="row align-items-center g-0 bg-white rounded shadow-lg overflow-hidden"
                style={{
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
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="col-md-6" style={{
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '400px'
                    }}>
                      <img 
                        src={service.img} 
                        alt={service.title}
                        className="w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                        background: `linear-gradient(135deg, ${service.color}40, transparent)`,
                        pointerEvents: 'none'
                      }}></div>
                    </div>
                    <div className="col-md-6 p-5" style={{
                      background: 'white'
                    }}>
                      <div className="d-flex align-items-center mb-4">
                        <div className="rounded d-flex align-items-center justify-content-center me-3" style={{
                          width: '60px',
                          height: '60px',
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                          color: 'white'
                        }}>
                          {service.icon}
                        </div>
                        <h2 className="mb-0" style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          fontWeight: 700,
                          color: '#0f172a',
                          letterSpacing: '-0.01em'
                        }}>{service.title}</h2>
                      </div>
                      <p className="mb-4" style={{
                        fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                        color: '#475569',
                        lineHeight: 1.8,
                        marginBottom: '1.5rem'
                      }}>
                        {index === 0 && "We craft scalable web and mobile apps that deliver smooth, intuitive, and fast user experiences."}
                        {index === 1 && "Streamline your development and deployment with our DevOps services built around AWS."}
                        {index === 2 && "Ensure product reliability and user satisfaction through rigorous testing and quality checks."}
                      </p>
                      <ul className="list-unstyled mb-0">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="mb-3 d-flex align-items-start" style={{ gap: '12px' }}>
                            <ArrowRight 
                              size={20} 
                              style={{ 
                                color: service.color, 
                                flexShrink: 0,
                                marginTop: '2px'
                              }} 
                            />
                            <span style={{
                              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                              color: '#64748b',
                              lineHeight: 1.7
                            }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-6 p-5" style={{
                      background: 'white',
                      order: 1
                    }}>
                      <div className="d-flex align-items-center mb-4">
                        <div className="rounded d-flex align-items-center justify-content-center me-3" style={{
                          width: '60px',
                          height: '60px',
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                          color: 'white'
                        }}>
                          {service.icon}
                        </div>
                        <h2 className="mb-0" style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          fontWeight: 700,
                          color: '#0f172a',
                          letterSpacing: '-0.01em'
                        }}>{service.title}</h2>
                      </div>
                      <p className="mb-4" style={{
                        fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                        color: '#475569',
                        lineHeight: 1.8,
                        marginBottom: '1.5rem'
                      }}>
                        {index === 0 && "We craft scalable web and mobile apps that deliver smooth, intuitive, and fast user experiences."}
                        {index === 1 && "Streamline your development and deployment with our DevOps services built around AWS."}
                        {index === 2 && "Ensure product reliability and user satisfaction through rigorous testing and quality checks."}
                      </p>
                      <ul className="list-unstyled mb-0">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="mb-3 d-flex align-items-start" style={{ gap: '12px' }}>
                            <ArrowRight 
                              size={20} 
                              style={{ 
                                color: service.color, 
                                flexShrink: 0,
                                marginTop: '2px'
                              }} 
                            />
                            <span style={{
                              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                              color: '#64748b',
                              lineHeight: 1.7
                            }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6" style={{
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '400px',
                      order: 2
                    }}>
                      <img 
                        src={service.img} 
                        alt={service.title}
                        className="w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                        background: `linear-gradient(135deg, ${service.color}40, transparent)`,
                        pointerEvents: 'none'
                      }}></div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-5" style={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
        paddingTop: 'clamp(4rem, 8vw, 6rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="bg-white rounded shadow-lg p-5" style={{
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderTop: '4px solid #3b82f6'
              }}>
                <h2 className="mb-4" style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem'
                }}>Ready to Transform Your Business?</h2>
                <p className="mb-4" style={{
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                  color: '#475569',
                  lineHeight: 1.8,
                  marginBottom: '2rem'
                }}>
                  Let's discuss how our services can help you achieve your goals. Get in touch with our team today.
                </p>
                <a 
                  href="/contact"
                  className="btn"
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
                    letterSpacing: '0.3px',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.4)';
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
