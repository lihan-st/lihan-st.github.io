
/* Add by Amy Han in 2025-12-04 */

// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import Link from '@docusaurus/Link';

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="hero-card">

        {/* 左栏：头像 + 基本信息 */}
        <div className="hero-left">
          <div className="hero-avatar">
            <img src="/img/avatar-lh.png" alt="Li Han avatar" />
          </div>

          <h1 className="hero-name">Li Han</h1>
          <h2 className="hero-title">Software Validation Engineer </h2>

          <p className="hero-summary">
            I love building reliable test automation, beautiful documentation,
            and data-driven research projects — with a warm, human touch.
          </p>

          <div className="hero-social-row">
            <a
              href="https://github.com/lihan-st"
              className="hero-icon github"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
           
            <a
              href="https://www.linkedin.com/in/li-han-2a3055162/"
              className="hero-icon linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* 右栏：高亮信息卡 */}
        <div className="hero-right">
          <div className="hero-chip-row">
            <span className="hero-chip">🚗 Automotive HIL & QA</span>
            <span className="hero-chip">🌧️ ML for Weather & Remote Sensing</span>
            <span className="hero-chip">📚 Technical Writing & LaTeX</span>
          </div>

          <div className="hero-highlights">
            <p>
              • 8+ years in software validation, automation test, and CANoe + VT System
              workflows, focusing on BMS / body electronics.
            </p>
            <p>
              • Building reproducible Python / ML pipelines for precipitation prediction
              and remote sensing research.
            </p>
            <p>
              • Passionate about clear documentation, teaching, and making complex
              systems feel friendly and approachable.
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
