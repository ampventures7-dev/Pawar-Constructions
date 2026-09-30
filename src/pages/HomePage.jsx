import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/cards/ServiceCard';
import ProjectCard from '../components/cards/ProjectCard';
import CTAButton from '../components/common/CTAButton';
import SEO from '../components/common/SEO';
import { companyData } from '../data/companyData';
import { 
  ShieldCheck, 
  HardHat, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  Award, 
  FileCheck2, 
  ShieldAlert, 
  Users,
  PhoneCall
} from 'lucide-react';

/**
 * HomePage Component
 * Complete Home page for PAWAR CONSTRUCTIONS implementing the 9-part information hierarchy:
 * 1. Hero Section (full-width, background image, dark overlay, dual CTAs)
 * 2. Trust / Highlights Section (4 cards with icons and descriptions)
 * 3. About Preview (heading, original copy, image on one side, text + button on other)
 * 4. Services Section (6 core service cards with icons and Learn More links)
 * 5. Stats Section (visually strong, editable placeholders clearly marked)
 * 6. Why Choose Us (5 cards: Quality First, Transparent Process, Safety Focused, Skilled Team, Customer-Centric)
 * 7. Featured Projects (6 project placeholders with images, category, location, and View Project button)
 * 8. Large CTA Section ("Have a Construction Project in Mind?")
 * 9. Footer (rendered via master Layout)
 */
export default function HomePage() {
  // Map icon names for Trust cards
  const getTrustIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={28} />;
      case 'HardHat': return <HardHat size={28} />;
      case 'Clock': return <Clock size={28} />;
      case 'HeartHandshake': return <HeartHandshake size={28} />;
      default: return <ShieldCheck size={28} />;
    }
  };

  // Map icon names for Why Choose Us cards
  const getWhyIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award size={28} />;
      case 'FileCheck': return <FileCheck2 size={28} />;
      case 'ShieldAlert': return <ShieldAlert size={28} />;
      case 'Users': return <Users size={28} />;
      case 'HeartHandshake': return <HeartHandshake size={28} />;
      default: return <Award size={28} />;
    }
  };

  return (
    <div className="home-page">
      <SEO
        title="Pawar Constructions | Quality Construction Services"
        description="Pawar Constructions delivers dependable construction solutions with a focus on quality, safety, and customer satisfaction across residential, commercial, industrial, and civil infrastructure."
        canonicalPath="/"
        ogImage="/images/hero-bg.jpg"
      />

      {/* ------------------------------------------------------------------
          1. HERO SECTION (Full-Width, Premium Background, Dark Overlay)
          ------------------------------------------------------------------ */}
      <HeroSection
        heading="Building Strong Foundations for a Better Tomorrow"
        supportingText="Pawar Constructions delivers dependable construction solutions with a focus on quality, safety and customer satisfaction."
        primaryCtaText="Get a Quote"
        secondaryCtaText="View Our Projects"
      />

      {/* ------------------------------------------------------------------
          2. TRUST / HIGHLIGHTS SECTION (4 Cards with Icons & Descriptions)
          ------------------------------------------------------------------ */}
      <section className="section-sm theme-subtle" aria-label="Key Trust Pillars">
        <div className="container">
          <div className="trust-cards-grid">
            {companyData.trustCards.map((card) => (
              <div key={card.id} className="trust-card">
                <div className="trust-icon-box">
                  {getTrustIcon(card.icon)}
                </div>
                <h3 className="trust-card-title">{card.title}</h3>
                <p className="trust-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. ABOUT PREVIEW (Image on one side, text + Learn More on other)
          ------------------------------------------------------------------ */}
      <section className="section theme-light" aria-label="About Pawar Constructions">
        <div className="container">
          <div className="about-preview-grid">
            {/* Visual Side: High-Resolution Photo + Experience Overlay */}
            <div className="about-preview-image-wrap">
              <img
                src="/images/about-engineers.jpg"
                alt="Pawar Constructions Engineering Team Inspecting Blueprints on Site"
                className="about-preview-img"
                loading="lazy"
                decoding="async"
              />
              <div className="about-floating-experience">
                <div className="about-floating-icon">
                  <HardHat size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#FFFFFF' }}>
                    Engineered for Excellence
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                    Certified Civil Engineering Team
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Side: Heading, Paragraph, Key Checks, CTA */}
            <div>
              <SectionHeading
                badge="About Pawar Constructions"
                title="Building With Trust. Delivering With Excellence."
                align="left"
                description="Founded with a dedication to structural integrity and architectural finesse, Pawar Constructions has earned an enduring reputation as a dependable general contracting and infrastructure partner."
              />

              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '22px' }}>
                We combine deep technical engineering capabilities with hands-on site management to execute complex residential developments, high-traffic commercial spaces, and heavy industrial facilities. Our success is built on mutual respect, transparent cost accounting, and delivering structures that inspire confidence for generations.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <div className="about-feature-check">
                  <CheckCircle2 size={18} />
                  <span><strong>Turnkey Delivery:</strong> From preliminary geotechnical surveys to final statutory clearance.</span>
                </div>
                <div className="about-feature-check">
                  <CheckCircle2 size={18} />
                  <span><strong>Zero-Compromise Safety:</strong> Continuous on-site hazard prevention and 100% PPE compliance.</span>
                </div>
                <div className="about-feature-check">
                  <CheckCircle2 size={18} />
                  <span><strong>Transparent Bill of Quantities:</strong> Accurate material forecasting with zero surprise cost creep.</span>
                </div>
              </div>

              <div>
                <CTAButton to="/about" variant="primary" size="md">
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. SERVICES SECTION (Heading + 6 Service Cards)
          ------------------------------------------------------------------ */}
      <section className="section theme-subtle" aria-label="Our Construction Services">
        <div className="container">
          <SectionHeading
            badge="What We Build"
            title="Our Construction Services"
            description="Comprehensive contracting solutions across diverse sectors, delivered with precision craftsmanship, modern equipment, and certified raw materials."
            align="center"
          />

          <div className="grid-3">
            {companyData.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <CTAButton to="/services" variant="secondary" size="md">
              View Detailed Service Breakdown
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. STATS SECTION (Visually Strong, Clearly Marked Placeholders)
          ------------------------------------------------------------------ */}
      <StatsSection stats={companyData.stats} />

      {/* ------------------------------------------------------------------
          6. WHY CHOOSE US (5 Distinct Value Cards)
          ------------------------------------------------------------------ */}
      <section className="section theme-light" aria-label="Why Choose Us">
        <div className="container">
          <SectionHeading
            badge="The Pawar Advantage"
            title="Why Choose Pawar Constructions"
            description="Our proven methodology integrates engineering excellence, transparent governance, and reliable client communication into every phase of the construction journey."
            align="center"
          />

          <div className="why-choose-grid">
            {companyData.whyChooseUs.map((card) => (
              <div key={card.id} className="why-choose-card">
                <div className="why-choose-icon-box">
                  {getWhyIcon(card.icon)}
                </div>
                <h3 className="why-choose-title">{card.title}</h3>
                <p className="why-choose-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7. FEATURED PROJECTS (Modern Grid with 6 Project Placeholders)
          ------------------------------------------------------------------ */}
      <section className="section theme-subtle" aria-label="Featured Projects">
        <div className="container">
          <SectionHeading
            badge="Our Landmark Works"
            title="Featured Construction Projects"
            description="An overview of current and delivered residential towers, commercial headquarters, industrial logistics hubs, and infrastructure developments."
            align="center"
          />

          <div className="grid-3">
            {companyData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <CTAButton to="/projects" variant="primary" size="md">
              Explore Full Projects Portfolio
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          8. LARGE CTA SECTION ("Have a Construction Project in Mind?")
          ------------------------------------------------------------------ */}
      <section className="cta-banner-large" aria-label="Project Consultation Call to Action">
        <div className="container cta-banner-inner">
          <div className="badge-pill dark" style={{ marginBottom: '20px' }}>
            <PhoneCall size={14} style={{ color: 'var(--color-primary)' }} />
            <span>Consultation & Project Estimation</span>
          </div>

          <h2 className="cta-banner-title">
            Have a Construction Project in Mind?
          </h2>

          <p className="cta-banner-text">
            Let's discuss your requirements and turn your vision into reality. Our civil estimation desk delivers itemized feasibility estimates, architectural reviews, and turnkey delivery timelines.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <CTAButton to="/contact" variant="primary" size="lg">
              Request a Quote
            </CTAButton>
            <CTAButton to="/projects" variant="outline-white" size="lg">
              View Our Projects
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
