import React from "react";

const Button = ({ variant = "primary", children, onClick }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-full transition-colors duration-300";
  
  const styles = {
    primary: `${baseClasses} text-white`,
    secondary: `${baseClasses} border`,
  };

  const inlineStyles = {
    primary: {
      backgroundColor: "var(--primary-color)",
    },
    secondary: {
      backgroundColor: "transparent",
      borderColor: "var(--border-color)",
      color: "var(--text-color)",
    },
  };

  return (
    <button
      className={styles[variant]}
      style={inlineStyles[variant]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
