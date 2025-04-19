import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import Button from "../components/ui/Button/Button";

const Hero = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.from(".welcome-tag", { y: -30, opacity: 0 })
        .from(".headline", { scale: 0.9, opacity: 0 }, "<+0.2")
        .from(".subtext", { y: 30, opacity: 0 }, "<+0.2")
        .from(".cta-button-container", { y: 20, opacity: 0, stagger: 0.15 }, "<+0.1");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Navigate to register page when "Get Started" is clicked
  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden"
    >
      {/* Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at center, var(--primary-color) 0%, transparent 70%)",
          opacity: 0.4,
          filter: "blur(100px)",
        }}
      />

      {/* Welcome Tag */}
      <div
        className="welcome-tag z-10 mb-4 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm border dark:border-white/10 border-[var(--border-color)] bg-white/10 text-[var(--text-color)]"
      >
        👋 Welcome to A4 Zone
      </div>

      {/* Headline */}
      <h1 className="headline z-10 font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight max-w-4xl text-[var(--text-color)]">
        Conversations that understand your connection.
      </h1>

      {/* Subtext */}
      <p className="subtext z-10 mt-6 text-[var(--subtext-color)] max-w-xl text-lg">
        A4 Zone chat suggestions based on your relationships, making every conversation more meaningful and authentic.
      </p>

      {/* CTA Buttons */}
      <div className="z-10 mt-8 flex flex-wrap gap-4 justify-center">
        <div className="cta-button-container">
          <Button variant="primary" onClick={goToRegister}>
            Get Started
          </Button>
        </div>
        <div className="cta-button-container">
          <Button variant="secondary">
            Try Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;