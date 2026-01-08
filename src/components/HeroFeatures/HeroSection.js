
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
      <div className="hero-card">

        {/* 左栏：头像 + 基本信息 */}
        <div className="hero-left">
          <div className="hero-avatar">
            <img src="/img/avatar-lh.png" alt="Li Han avatar" />
          </div>

          <h1 className="hero-name">Li Han</h1>
          <h2 className="hero-title">Software Test Engineer </h2>

          <p className="hero-summary">
            I design and validate reliable software systems — from safety-critical
            embedded systems to web and API applications — with a strong focus on automation,
            test design, continuous integration, and clear documentation.
          </p>

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

        {/* 右栏：高亮信息卡 */}
        <div className="hero-right">
          <div className="hero-chip-row">
            <span className="hero-chip">🚗 Automative Embeded Software QA & HIL</span>
            <span className="hero-chip">🌐 Web & API Test</span>
            <span className="hero-chip">🤖 Python, Playwright, Pytest</span>
            <span className="hero-chip">✍️ Technical documentation & Test Design</span>
          </div>

          <div className="hero-highlights">
            <p>
              • 8+ years of hands-on experience in embeded software testing, 
              including system validation, test automation, and test design.
            </p>
            <p>
              • Strong background in automation test frameworks design and implementation.
            </p>
            <p>
              • Currently expanding expertise in Web and API testing, with a focus on Python and Playwright.  
            </p>
            <p>
              • Passionate about clear test design, documentation, and building reliable test 
              automation that improves both product quality and team efficiency.
            </p>
          </div>

          <div className="hero-cta-row">
              <Link className="hero-cta primary" to="/docs/about">About me</Link>
              <Link className="hero-cta secondary" to="/blog">Read my blog</Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
