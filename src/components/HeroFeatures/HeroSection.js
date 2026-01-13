
/* Add by Amy Han in 2025-12-04 */
// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import Link from '@docusaurus/Link';
import useBaseUrl  from '@docusaurus/useBaseUrl';


export default function HeroSection() {
  const githubIcon = useBaseUrl('/img/github-16.svg');
  const linkedinIcon = useBaseUrl('/img/linkedin-16.svg');
  return (
    <section className="hero-wrapper">
     <div className="hero-container">
      <div className="hero-card">
        {/* Left */}
        <div className="hero-left">
          <div className="hero-avatar">
            <img src="/img/avatar-lh.png" alt="Li Han avatar" />
          </div>
          <h1 className="hero-name">Li Han</h1>
          <h2 className="hero-title">Software Test Engineer </h2>
          <div className="hero-social-row">
            <a
              href="https://github.com/lihan-st"
              className="hero-social-circle"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            > 
              <img src={githubIcon} alt="GitHub" className="hero-social-icon-img" />
              {/* <i className="fab fa-github"></i> */}
            </a>
            <a
              href="https://www.linkedin.com/in/li-han-2a3055162/"
              className="hero-social-circle"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="hero-social-icon-img" />
              {/* <i className="fab fa-linkedin"></i> */}
            </a>
          </div>
        </div>
        {/* Right */}
        <div className="hero-right">
          <div className="hero-highlights">
            <p>
              With +8 years of experience in automotive embedded software validation,
              I specialize in reliable test automation, root-cause analysis, and system-level debugging.
            </p>
            <p>
              Currently, I'm expanding into Web UI and API testing with Python and Playwright - bringing
              the same engineering rigor, clear test design, and CI-ready automation to software teams.
            </p>
            <p>
              I'm passionate about building maintable automation frameworks and high-quality test documentation
              that improve product quality and team efficiency.
            </p>
          </div>
          <div className="hero-cta-row">
            <a className="hero-cta primary" href="#experience">
              View Experience
            </a>
            <a
              className="hero-cta secondary"
              href="/resume/LiHan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
     </div>
      {/* 顶部波浪 */}
      <svg className="hero-wrapper-wave hero-wrapper-wave--top"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none">
        <path d="M0,80 C120,40 240,120 360,80 C480,40 600,120 720,80 C840,40 960,120 1080,80 C1200,40 1320,120 1440,80 L1440,140 L0,140 Z"/>
      </svg>
      {/* 让波浪跟随整屏 hero-wrapper */}
      <svg className="hero-wrapper-wave hero-wrapper-wave--bottom" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path d="M0,80 C120,40 240,120 360,80 C480,40 600,120 720,80 C840,40 960,120 1080,80 C1200,40 1320,120 1440,80 L1440,140 L0,140 Z"/>
      </svg>
  </section>
  );
}
