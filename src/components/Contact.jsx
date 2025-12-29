import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "react-feather";

function Contact() {
  const handlePhoneClick = (e) => {
    e.preventDefault();
    window.location.href = "tel:+919100241284";
  };

  const handleLocationClick = (e) => {
    e.preventDefault();
    window.open(
      "https://www.google.com/maps/search/?api=1&query=EPT+TOWERS,+Ayyappa+Society,+Madhapur,+Hyderabad,+Telangana+500081",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: "Phone",
      content: "+91 9100241284",
      link: "tel:+919100241284",
      color: "#0072ff",
      gradient: "linear-gradient(135deg, #0072ff, #00c6ff)"
    },
    {
      icon: <Mail size={28} />,
      title: "Email",
      content: "eptpavahaa@gmail.com",
      link: "mailto:eptpavahaa@gmail.com?subject=Inquiry%20from%20Website",
      color: "#7f00ff",
      gradient: "linear-gradient(135deg, #7f00ff, #e100ff)"
    },
    {
      icon: <MapPin size={28} />,
      title: "Address",
      content: "EPT Towers, 201, Plot No. 658, Road No. 36, Ayyappa Society, Madhapur, Hyderabad, Telangana 500081",
      link: "https://www.google.com/maps/search/?api=1&query=EPT+TOWERS,+Ayyappa+Society,+Madhapur,+Hyderabad,+Telangana+500081",
      color: "#00c6ff",
      gradient: "linear-gradient(135deg, #00c6ff, #0072ff)"
    }
  ];

  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      minHeight: '100vh',
      color: '#1a1a1a',
      fontFamily: '"Poppins", sans-serif',
      paddingTop: '100px'
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
          }}>Contact Us</span>
          <h1 className="mb-4" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>Get in Touch</h1>
          <p className="mx-auto" style={{ 
            fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
            color: '#64748b',
            maxWidth: '700px',
            lineHeight: 1.8
          }}>
            Let's build something amazing together — your vision, our technology.
          </p>
        </div>

        {/* Why Contact Us Card */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="bg-white rounded shadow-sm border p-5" style={{
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderLeft: '5px solid #3b82f6',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            }}>
              <div className="d-flex align-items-center mb-4">
                <div className="rounded d-flex align-items-center justify-content-center me-4" style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  color: 'white',
                  flexShrink: 0
                }}>
                  <MessageCircle size={28} />
                </div>
                <h2 className="mb-0" style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  color: '#0f172a',
                  fontWeight: 700
                }}>Why You Should Contact Us!</h2>
              </div>
              <p className="mb-0" style={{ 
                lineHeight: 1.8, 
                color: '#475569',
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                marginLeft: '84px'
              }}>
                At <strong style={{ color: '#3b82f6' }}>EPTPRAVAHAA EDU TECH SOLUTIONS</strong>, we believe innovation drives growth
                and success. We deliver high-quality <strong>software solutions</strong>,
                <strong> custom products</strong>, and <strong>web & mobile app development</strong> services
                that help businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="row g-4 mb-5">
          {contactInfo.map((info, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div 
                className="h-100 bg-white rounded shadow-sm border p-4 position-relative"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minHeight: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderTop: `4px solid ${info.color}`
                }}
                onClick={(e) => {
                  if (info.title === "Address") {
                    handleLocationClick(e);
                  } else if (info.title === "Phone") {
                    handlePhoneClick(e);
                  } else {
                    window.open(info.link, "_blank");
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.borderTopColor = info.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded d-flex align-items-center justify-content-center me-3" style={{
                    width: '55px',
                    height: '55px',
                    background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)`,
                    color: 'white',
                    flexShrink: 0
                  }}>
                    {info.icon}
                  </div>
                  <h3 className="mb-0" style={{
                    fontSize: 'clamp(1.3rem, 1.8vw, 1.5rem)',
                    fontWeight: 700,
                    color: '#0f172a'
                  }}>{info.title}</h3>
                </div>
                <p className="mb-0" style={{
                  fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
                  lineHeight: 1.7,
                  color: '#475569',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}>{info.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="row">
          <div className="col-12">
            <div className="bg-white rounded shadow-sm border overflow-hidden" style={{
              border: '1px solid rgba(0, 0, 0, 0.08)'
            }}>
              <div className="p-4" style={{
                background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                color: 'white'
              }}>
                <h3 className="mb-0 d-flex align-items-center" style={{
                  fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                  fontWeight: 700
                }}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(59, 130, 246, 0.2)',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    color: '#60a5fa'
                  }}>
                    <MapPin size={22} />
                  </div>
                  Our Location
                </h3>
              </div>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '500px',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://maps.google.com/maps?q=EPT+Towers,+201,+Plot+No.+658,+Road+No.+36,+Ayyappa+Society,+Madhapur,+Hyderabad,+Telangana+500081&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'grayscale(0%) contrast(1.1)'
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EPT Pravahaa Location"
                ></iframe>
                <div 
                  className="position-absolute bottom-0 end-0 m-4"
                  style={{
                    pointerEvents: 'auto',
                    zIndex: 10
                  }}
                >
                  <button
                    className="btn shadow"
                    onClick={handleLocationClick}
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontWeight: 600,
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
                    }}
                  >
                    <MapPin size={18} className="me-2" />
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
