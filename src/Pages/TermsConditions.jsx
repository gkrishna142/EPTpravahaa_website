import React from "react";
import { FileText, Shield, Globe, Code, Info } from "react-feather";

function TermsConditions() {
  const terms = [
    {
      icon: <Shield size={24} />,
      title: "Acceptance of Terms",
      content: (
        <p>
          By accessing or using our website or services, you agree to comply with these Terms and Conditions.
          If you do not agree with any part of these Terms, please refrain from using our services.
        </p>
      ),
    },
    {
      icon: <Globe size={24} />,
      title: "Use of Our Website",
      content: (
        <>
          <p>You agree to use our website responsibly and lawfully. You shall not:</p>
          <ul>
            <li>Engage in activities that may damage or impair the website's functionality.</li>
            <li>Upload or transmit harmful, malicious, or illegal content.</li>
            <li>Attempt unauthorized access to systems or data.</li>
            <li>Violate applicable laws or regulations.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Code size={24} />,
      title: "Intellectual Property",
      content: (
        <p>
          All content, logos, trademarks, code, and visual materials on this website are the exclusive property of 
          <strong> EPTPRAVAHAA EDU TECH SOLUTIONS</strong> or its licensors. No material may be copied, modified, or distributed without written consent.
        </p>
      ),
    },
    {
      icon: <Info size={24} />,
      title: "Services & Modifications",
      content: (
        <p>
          Our services are subject to continuous improvement. We reserve the right to update, modify, or discontinue any product or service without prior notice.
        </p>
      ),
    },
    {
      icon: <FileText size={24} />,
      title: "Limitation of Liability",
      content: (
        <p>
          <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong> shall not be liable for any direct or indirect losses resulting from the use or inability to use our services or website. Users are responsible for their own actions.
        </p>
      ),
    },
    {
      icon: <FileText size={24} />,
      title: "Changes to Terms",
      content: (
        <p>
          We may update or modify these Terms periodically. Updated Terms will be effective immediately upon posting. We encourage users to review this page regularly.
        </p>
      ),
    },
    {
      icon: <FileText size={24} />,
      title: "Contact Us",
      content: (
        <>
          <p>For questions or concerns regarding these Terms and Conditions, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:eptpavahaa@gmail.com">eptpavahaa@gmail.com</a></li>
            <li><strong>Phone:</strong> +91 9100241284</li>
            <li><strong>Address:</strong> EPT Towers, 201, Plot No. 658, Road No. 36, Ayyappa Society, Madhapur, Hyderabad, Telangana 500081</li>
          </ul>
        </>
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
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: 'white',
              boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)'
            }}>
              <FileText size={50} />
            </div>
          </div>
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: 'white',
            borderRadius: '50px',
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>Legal</span>
          <h1 className="mb-4" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>Terms & Conditions</h1>
          <p className="mx-auto" style={{
            fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
            color: '#64748b',
            lineHeight: 1.8,
            maxWidth: '800px'
          }}>
            Welcome to <strong style={{ color: '#0f172a' }}>EPTPRAVAHAA EDU TECH SOLUTIONS</strong>. 
            Please read these Terms & Conditions carefully before using our services.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {terms.map((term, index) => (
              <div
                key={index}
                className="bg-white rounded shadow-sm border mb-4 position-relative"
                style={{
                  padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderLeft: '5px solid #f59e0b'
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
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: 'white',
                    flexShrink: 0
                  }}>
                    {term.icon}
                  </div>
                  <h2 className="mb-0" style={{
                    fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                    color: '#0f172a',
                    fontWeight: 700
                  }}>{term.title}</h2>
                </div>
                <div style={{
                  color: '#475569',
                  lineHeight: 1.8,
                  fontSize: 'clamp(1rem, 1.2vw, 1.1rem)'
                }}>
                  {term.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsConditions;
