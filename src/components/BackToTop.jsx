import React, { useState, useEffect } from "react";
import { Triangle } from "react-feather";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400 ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        className="btn btn-primary d-none d-lg-block position-fixed"
        onClick={scrollToTop}
        style={{
          bottom: '20px',
          right: '20px',
          borderRadius: '10px',
          padding: '0.5rem 1rem',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
          transition: 'opacity 0.3s ease',
          zIndex: 1000
        }}
      >
        Back To Top <Triangle size={16} color="white" />
      </button>
    )
  );
}

export default BackToTop;
