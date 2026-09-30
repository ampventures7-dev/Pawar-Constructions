import React from 'react';
import { ShieldCheck, HardHat, Clock, Award } from 'lucide-react';
import CTAButton from '../common/CTAButton';

/**
 * Premium Full-Width Construction Hero Section
 * Features cinematic architectural background image, dark contrast overlay,
 * bold brand heading, supporting copy, and dual CTAs.
 */
export default function HeroSection({
  heading = "Building Strong Foundations for a Better Tomorrow",
  supportingText = "Pawar Constructions delivers dependable construction solutions with a focus on quality, safety and customer satisfaction.",
  primaryCtaText = "Get a Quote",
  secondaryCtaText = "View Our Projects",
}) {
  return (
    <section className="hero-premium">
      {/* Dark overlay for optimal text readability */}
      <div className="hero-premium-overlay" />

      <div className="container hero-premium-content">
        <div className="badge-pill dark" style={{ marginBottom: '22px' }}>
          <HardHat size={14} style={{ color: 'var(--color-primary)' }} />
          <span>General Contracting & Infrastructure</span>
        </div>

        <h1 className="hero-premium-title">
          {heading.includes("Better Tomorrow") ? (
            <>
              Building Strong Foundations for a{' '}
              <span className="highlight-accent">Better Tomorrow</span>
            </>
          ) : (
            heading
          )}
        </h1>

        <p className="hero-premium-desc">
          {supportingText}
        </p>

        <div className="hero-premium-actions">
          <CTAButton to="/contact" variant="primary" size="lg">
            {primaryCtaText}
          </CTAButton>
          <CTAButton to="/projects" variant="outline-white" size="lg">
            {secondaryCtaText}
          </CTAButton>
        </div>

        {/* Credibility trust badges below CTAs */}
        <div className="hero-premium-perks">
          <div className="hero-perk-item">
            <ShieldCheck size={18} />
            <span>Strict Safety Standards</span>
          </div>
          <div className="hero-perk-item">
            <Clock size={18} />
            <span>On-Time Milestone Handover</span>
          </div>
          <div className="hero-perk-item">
            <Award size={18} />
            <span>Certified Tested Materials</span>
          </div>
        </div>
      </div>
    </section>
  );
}
