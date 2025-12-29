import React from "react";
import LoginForm from './Navbar/LoginForm'
import {
  Award,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Clock,
  Briefcase,
  Check
} from "react-feather";
import { FaRupeeSign } from "react-icons/fa";

const Services = () => {
  return (
    <div className="py-5 text-white" style={{
      backgroundImage: 'url("../assets/images/Coursesimage.png")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container">
        <h1 className="text-center mb-4" style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#fff'
        }}>Courses</h1>

        <div className="bg-white p-4 rounded shadow" style={{ color: '#333' }}>
          {/* Intro */}
          <div className="text-center mb-4">
            <h2 className="mb-3 d-flex align-items-center justify-content-center flex-wrap" style={{
              fontSize: '1.8rem',
              color: '#003f73',
              gap: '8px'
            }}>
              <Award size={20} style={{ stroke: '#003f73' }} /> Launch Your Tech Career with Our 6-Months Coaching Program!
            </h2>
            <p className="mx-auto" style={{
              marginTop: '10px',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: '#444',
              textAlign: 'justify',
              maxWidth: '900px',
              textAlignLast: 'center'
            }}>
              We're excited to announce a comprehensive coaching opportunity designed
              to shape the next generation of tech professionals! Whether you're a fresher
              or someone looking to switch domains, this is your chance to get trained,
              work on real-time projects, and potentially land a permanent position with us!
            </p>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="h-100 p-3 rounded" style={{
                background: '#f8fdfa',
                border: '1px solid #eee',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <h3 className="d-flex align-items-center mb-3" style={{
                  gap: '8px',
                  color: '#003f73',
                  fontSize: '1.3rem'
                }}>
                  <Award size={20} style={{ stroke: '#003f73' }} /> Program Highlights
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <FaRupeeSign size={16} style={{ flexShrink: 0 }} /> Coaching Fee: ₹30,000
                  </li>
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Clock size={16} style={{ flexShrink: 0 }} /> Duration: 6 months (includes internship)
                  </li>
                  <li className="mb-2 d-flex align-items-start" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Briefcase size={16} style={{ flexShrink: 0, marginTop: '2px' }} /> Job Opportunity: Permanent role based on performance or internship certificate
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="h-100 p-3 rounded" style={{
                background: '#f8fdfa',
                border: '1px solid #eee',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <h3 className="d-flex align-items-center mb-3" style={{
                  gap: '8px',
                  color: '#003f73',
                  fontSize: '1.3rem'
                }}>
                  <BookOpen size={20} style={{ stroke: '#003f73' }} /> Available Courses
                </h3>
                <ul className="list-unstyled mb-3">
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Check size={16} style={{ flexShrink: 0 }} /> Manual & Automation Testing
                  </li>
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Check size={16} style={{ flexShrink: 0 }} /> DevOps
                  </li>
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Check size={16} style={{ flexShrink: 0 }} /> React.js & React Native
                  </li>
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Check size={16} style={{ flexShrink: 0 }} /> Python with Django
                  </li>
                </ul>

                <h3 className="d-flex align-items-center mb-3" style={{
                  gap: '8px',
                  color: '#003f73',
                  fontSize: '1.3rem'
                }}>
                  <TrendingUp size={20} style={{ stroke: '#003f73' }} /> Coming Soon
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Check size={16} style={{ flexShrink: 0 }} /> Data Science
                  </li>
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Check size={16} style={{ flexShrink: 0 }} /> AI & Machine Learning
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="h-100 p-3 rounded" style={{
                background: '#f8fdfa',
                border: '1px solid #eee',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <h3 className="d-flex align-items-center mb-3" style={{
                  gap: '8px',
                  color: '#003f73',
                  fontSize: '1.3rem'
                }}>
                  <CheckCircle size={20} style={{ stroke: '#003f73' }} /> Why Choose Us?
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Check size={16} style={{ flexShrink: 0 }} /> Real-world project experience
                  </li>
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Check size={16} style={{ flexShrink: 0 }} /> Mentorship from professionals
                  </li>
                  <li className="mb-2 d-flex align-items-center" style={{ gap: '8px', color: '#003f73', fontSize: '1rem' }}>
                    <Check size={16} style={{ flexShrink: 0 }} /> Career guidance & placement support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
