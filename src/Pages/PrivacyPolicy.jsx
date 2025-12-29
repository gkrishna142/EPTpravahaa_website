import React from "react";
import { Shield, Lock, User, Database } from "react-feather";

function PrivacyPolicy() {
  const policies = [
    {
      icon: <User size={24} />,
      title: "Information We Collect",
      content: (
        <>
          <p>We collect information to deliver better services and user experiences. This may include:</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email, contact number, and form submissions.</li>
            <li><strong>Technical Data:</strong> IP address, device info, browser type, and usage patterns.</li>
            <li><strong>Cookies & Analytics:</strong> To enhance usability and understand user preferences.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Database size={24} />,
      title: "How We Use Your Information",
      content: (
        <ul>
          <li>Provide and personalize our services and digital products.</li>
          <li>Communicate updates, offers, or notifications with consent.</li>
          <li>Analyze engagement to improve website functionality.</li>
          <li>Ensure platform security and prevent unauthorized access.</li>
        </ul>
      ),
    },
    {
      icon: <Lock size={24} />,
      title: "Data Protection & Security",
      content: (
        <>
          <p>We implement encryption, restricted access, and industry-standard security practices to protect your data.</p>
          <p>No online transmission is 100% secure, but we continuously enhance our protocols.</p>
        </>
      ),
    },
    {
      icon: <Shield size={24} />,
      title: "Data Sharing & Disclosure",
      content: (
        <ul>
          <li>Shared only with trusted service providers under confidentiality agreements.</li>
          <li>Required by law, regulation, or legal process.</li>
          <li>During mergers or acquisitions with data protection safeguards.</li>
        </ul>
      ),
    },
    {
      icon: <User size={24} />,
      title: "Your Privacy Choices",
      content: (
        <p>
          You can request access, correction, or deletion of your personal data anytime at <strong>eptpavahaa@gmail.com</strong>. 
          Opt-out of marketing communications is also available.
        </p>
      ),
    },
    {
      icon: <Lock size={24} />,
      title: "Contact Us",
      content: (
        <p>
          <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong><br />
          EPT Towers, Ayyappa Society, Madhapur, Hyderabad, Telangana, India<br />
          <a href="mailto:eptpavahaa@gmail.com">eptpavahaa@gmail.com</a>
        </p>
      ),
    },
  ];

  return (
    <section className="py-5" style={{
      fontFamily: '"Poppins", sans-serif',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      color: '#1a1a1a',
      paddingTop: '100px',
      minHeight: '100vh'
    }}>
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5" style={{
          paddingTop: 'clamp(2rem, 4vw, 4rem)',
          paddingBottom: 'clamp(2rem, 4vw, 4rem)'
        }}>
          <div className="d-flex justify-content-center mb-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
            }}>
              <Shield size={50} />
            </div>
          </div>
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            borderRadius: '50px',
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>Privacy & Security</span>
          <h1 className="mb-4" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>Privacy Policy</h1>
          <p className="mx-auto" style={{
            fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
            color: '#64748b',
            lineHeight: 1.8,
            maxWidth: '800px'
          }}>
            Your trust matters. At <strong style={{ color: '#0f172a' }}>EPTPRAVAHAA EDU TECH SOLUTIONS</strong>, 
            we are committed to safeguarding your personal information with full transparency.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-white rounded shadow-sm border mb-4 position-relative"
                style={{
                  padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderLeft: '5px solid #10b981'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div className="d-flex align-items-center mb-4" style={{ gap: '15px' }}>
                  <div className="rounded d-flex align-items-center justify-content-center" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    flexShrink: 0
                  }}>
                    {policy.icon}
                  </div>
                  <h2 className="mb-0" style={{
                    fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                    color: '#0f172a',
                    fontWeight: 700
                  }}>{policy.title}</h2>
                </div>
                <div style={{
                  color: '#475569',
                  lineHeight: 1.8,
                  fontSize: 'clamp(1rem, 1.2vw, 1.1rem)'
                }}>
                  {policy.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
