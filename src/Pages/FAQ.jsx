import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Edupravahaa offer?",
      answer:
        "We provide comprehensive digital learning solutions including online IT training, software development courses, career guidance, and interactive sessions with industry experts.",
    },
    {
      question: "Who can join the online classes?",
      answer:
        "Our programs are designed for students, professionals, and IT enthusiasts looking to upgrade skills or learn new technologies from scratch.",
    },
    {
      question: "Do you provide certificates?",
      answer:
        "Yes! Upon successful completion of a course, you will receive a verified certificate recognized by Edupravahaa and industry partners.",
    },
    {
      question: "How do I interact with teachers?",
      answer:
        "Our platform allows live online sessions, Q&A forums, discussion boards, and one-on-one mentorship with experienced IT professionals.",
    },
    {
      question: "What technologies are covered?",
      answer:
        "We cover a wide range of technologies including Web Development, Python, Java, AI & ML, Data Science, Cloud Computing, and more.",
    },
    {
      question: "Can I get a trial class before enrolling?",
      answer:
        "Absolutely! We offer free demo classes for most courses to help you understand our teaching methodology and quality before enrollment.",
    },
    {
      question: "Is technical support available?",
      answer:
        "Yes, our support team is available 24/7 to assist you with technical issues, course queries, and account management.",
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
          }}>FAQ</span>
          <h1 className="mb-4" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>Frequently Asked Questions</h1>
          <p className="mx-auto" style={{
            fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
            color: '#64748b',
            maxWidth: '800px',
            lineHeight: 1.8
          }}>
            Have questions about our courses or platform? Find answers to common
            queries below. If you don't see your question, reach out to us directly!
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded shadow-sm border mb-3"
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderLeft: activeIndex === index ? '4px solid #3b82f6' : '4px solid transparent'
                }}
                onClick={() => toggleFAQ(index)}
                onMouseEnter={(e) => {
                  if (activeIndex !== index) {
                    e.currentTarget.style.borderLeftColor = '#3b82f6';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeIndex !== index) {
                    e.currentTarget.style.borderLeftColor = 'transparent';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                  }
                }}
              >
                <div className="d-flex justify-content-between align-items-center p-4" style={{
                  background: activeIndex === index ? 'linear-gradient(135deg, #eff6ff, #dbeafe)' : '#f8fafc',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 className="mb-0" style={{
                    fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)',
                    color: '#0f172a',
                    fontWeight: 600,
                    flex: 1,
                    paddingRight: '1rem'
                  }}>{faq.question}</h3>
                  <div style={{
                    color: '#3b82f6',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    {activeIndex === index ? (
                      <FiChevronUp size={24} />
                    ) : (
                      <FiChevronDown size={24} />
                    )}
                  </div>
                </div>
                <div
                  style={{
                    maxHeight: activeIndex === index ? "500px" : "0px",
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease',
                    background: '#ffffff',
                    padding: activeIndex === index ? '0 25px 25px 25px' : '0 25px'
                  }}
                >
                  <p className="mb-0" style={{
                    fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
                    lineHeight: 1.8,
                    color: '#475569',
                    paddingTop: activeIndex === index ? '1rem' : '0'
                  }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
