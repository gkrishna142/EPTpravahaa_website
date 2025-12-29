import React, { useState, useEffect } from "react";
import { Menu, X } from "react-feather";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/About", label: "About", end: false },
    { to: "/Services", label: "Services", end: false },
    { to: "/contact", label: "Contact Us", end: false }
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{
      backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
      background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.85)',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      fontFamily: '"Poppins", sans-serif',
      padding: 'clamp(0.75rem, 1.5vw, 1rem) 0',
      transition: 'all 0.3s ease'
    }}>
      <div className="container">
        {/* Logo Section */}
        <NavLink 
          to="/" 
          className="d-flex align-items-center text-decoration-none" 
          style={{ 
            gap: 'clamp(12px, 1.8vw, 18px)', 
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={logo} 
              alt="EPTPRAVAHAA Logo" 
              style={{
                height: 'clamp(48px, 5.5vw, 58px)',
                width: 'clamp(48px, 5.5vw, 58px)',
                borderRadius: '10px',
                objectFit: 'cover',
                border: '2px solid rgba(59, 130, 246, 0.2)',
                transition: 'all 0.3s ease'
              }}
            />
          </div>
          <h1 className="mb-0 d-none d-md-block" style={{
            fontSize: 'clamp(1rem, 1.6vw + 0.4rem, 1.5rem)',
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '0.02em',
            lineHeight: 1.3,
            whiteSpace: 'nowrap',
            margin: 0
          }}>
            EPTPRAVAHAA
            <span style={{ 
              display: 'block', 
              fontSize: 'clamp(0.75rem, 1.2vw + 0.2rem, 1rem)', 
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.8)',
              letterSpacing: '0.05em'
            }}>EDU TECH SOLUTIONS</span>
          </h1>
        </NavLink>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler d-lg-none border-0"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          style={{
            background: 'transparent',
            color: '#ffffff',
            padding: '0.5rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto" style={{ 
            gap: 'clamp(0.5rem, 2vw, 2rem)', 
            alignItems: 'center'
          }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to || 
                (link.to !== '/' && location.pathname.startsWith(link.to));
              
              return (
                <li className="nav-item" key={link.to}>
                  <NavLink 
                    to={link.to} 
                    end={link.end}
                    className={({ isActive }) => 
                      `nav-link position-relative ${isActive ? 'active' : ''}`
                    }
                    onClick={closeMenu} 
                    style={{
                      fontWeight: 500,
                      fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
                      color: isActive ? '#3b82f6' : '#ffffff',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      position: 'relative',
                      background: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#60a5fa';
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.08)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {link.label}
                    <span 
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                      style={{
                        width: isActive ? '80%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                        transition: 'width 0.3s ease',
                        borderRadius: '2px'
                      }}
                    ></span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay Styles */}
      <style>{`
        @media (max-width: 991.98px) {
          .navbar-collapse.show {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(20px);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 2rem 1rem;
            z-index: 999;
            overflow-y: auto;
            animation: slideDown 0.3s ease;
          }
          
          .navbar-collapse.show .navbar-nav {
            width: 100%;
            max-width: 500px;
            gap: 1rem !important;
          }
          
          .navbar-collapse.show .nav-item {
            width: 100%;
          }
          
          .navbar-collapse.show .nav-link {
            width: 100%;
            text-align: center;
            padding: 1rem !important;
            font-size: 1.1rem !important;
            border-radius: 12px !important;
          }
          
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
