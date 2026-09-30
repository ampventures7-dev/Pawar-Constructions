import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/cards/ServiceCard';
import CTAButton from '../components/common/CTAButton';
import SEO from '../components/common/SEO';
import { companyData } from '../data/companyData';
import { 
  MessageSquare, 
  Compass, 
  FileSpreadsheet, 
  Hammer, 
  CheckCircle2, 
  Key, 
  PhoneCall,
  Send
} from 'lucide-react';

/**
 * ServicesPage Component
 * Complete Services page for PAWAR CONSTRUCTIONS implementing the required specification:
 * 1. Hero ("Construction Solutions Built Around Your Needs")
 * 2. 8 Core Services with large images, icons, descriptions, key features, and "Enquire Now" CTA
 * 3. 6-Step Construction Process (01 Requirement Discussion to 06 Final Handover)
 * 4. Final CTA ("Have a project requirement?", "Request a Quote")
 * 5. 100% data-driven through centralized companyData.js
 */
export default function ServicesPage() {
  const { services, servicesProcess, servicesPageConfig } = companyData;

  // Icon resolver for the 6-step process
  const getProcessIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare size={24} />;
      case 'Compass': return <Compass size={24} />;
      case 'FileSpreadsheet': return <FileSpreadsheet size={24} />;
      case 'Hammer': return <Hammer size={24} />;
      case 'CheckCircle2': return <CheckCircle2 size={24} />;
      case 'Key': return <Key size={24} />;
      default: return <Hammer size={24} />;
    }
  };

  return (
    <div className="services-page">
      <SEO
        title="Construction Services | Pawar Constructions Solutions"
        description="Comprehensive construction solutions: residential townships, commercial complexes, industrial logistics warehouses, heavy civil infrastructure, and turnkey project management."
        canonicalPath="/services"
        ogImage="/images/service-interior.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "General Construction & Civil Contracting",
          "provider": {
            "@type": "ConstructionBusiness",
            "name": "PAWAR CONSTRUCTIONS",
            "url": "http://localhost:5173"
          }
        }}
      />

      {/* ------------------------------------------------------------------
          1. HERO SECTION
          ------------------------------------------------------------------ */}
      <PageHero
        badge="General Contracting & Engineering"
        title={servicesPageConfig.heroTitle}
        subtitle={servicesPageConfig.heroSubtitle}
        breadcrumbs={[{ label: 'Our Services' }]}
      />

      {/* ------------------------------------------------------------------
          2. CORE SERVICES SECTION (8 Services with Large Images & Enquire Now)
          ------------------------------------------------------------------ */}
      <section className="section theme-light" aria-label="Comprehensive Services">
        <div className="container">
          <SectionHeading
            badge="Engineering Spectrum"
            title="Our Construction Services"
            description="Explore our 8 specialized civil contracting and architectural disciplines, engineered to satisfy high-durability performance and safety benchmarks."
            align="center"
          />

          <div className="grid-3" style={{ rowGap: '36px' }}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} showImage={true} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. 6-STEP PROCESS SECTION (01 Requirement Discussion to 06 Handover)
          ------------------------------------------------------------------ */}
      <section className="section theme-subtle" aria-label="Construction Process">
        <div className="container">
          <SectionHeading
            badge="Lifecycle Methodology"
            title="Our 6-Step Construction Process"
            description="A transparent, milestone-driven execution roadmap ensuring precision quality control, budget discipline, and seamless project delivery."
            align="center"
          />

          <div className="services-process-grid">
            {servicesProcess.map((proc) => (
              <div key={proc.step} className="services-process-card">
                <div className="services-process-header">
                  <span className="services-process-step-badge">{proc.step}</span>
                  <div className="services-process-icon-box">
                    {getProcessIcon(proc.icon)}
                  </div>
                </div>
                <h3 className="services-process-title">{proc.title}</h3>
                <p className="services-process-desc">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. FINAL CTA SECTION ("Have a project requirement?")
          ------------------------------------------------------------------ */}
      <section className="cta-banner-large" aria-label="Project Requirement Call to Action">
        <div className="container cta-banner-inner">
          <div className="badge-pill dark" style={{ marginBottom: '20px' }}>
            <PhoneCall size={14} style={{ color: 'var(--color-primary)' }} />
            <span>Consultation & Project Estimation</span>
          </div>

          <h2 className="cta-banner-title">
            {servicesPageConfig.ctaHeading}
          </h2>

          <p className="cta-banner-text">
            {servicesPageConfig.ctaText}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <CTAButton to="/contact" variant="primary" size="lg" icon={<Send size={16} />}>
              {servicesPageConfig.ctaButton}
            </CTAButton>
            <CTAButton to="/projects" variant="outline-white" size="lg">
              Explore Our Projects
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
