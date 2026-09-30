import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import StrengthCard from '../components/cards/StrengthCard';
import CTAButton from '../components/common/CTAButton';
import SEO from '../components/common/SEO';
import { companyData } from '../data/companyData';
import { 
  MessageSquare, 
  FileSpreadsheet, 
  Hammer, 
  CheckCircle2, 
  Key, 
  ArrowRight, 
  ShieldCheck, 
  HardHat, 
  Clock, 
  FileCheck2,
  Check
} from 'lucide-react';

/**
 * StrengthsPage Component
 * Premium trust-building page for PAWAR CONSTRUCTIONS.
 * Features:
 * - Exact Hero: "Why Choose Pawar Constructions?"
 * - 8 Core Strengths (Quality Materials, Skilled Professionals, Safety First,
 *   Transparent Communication, Timely Execution, Customer Satisfaction,
 *   Attention to Detail, Long-Term Reliability) with icons, explanations, and supporting visuals.
 * - Construction Process Timeline: Consultation → Planning → Execution → Quality Check → Handover
 * - CTA: "Start Your Project With Us"
 */
export default function StrengthsPage() {
  const getTimelineIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare size={22} />;
      case 'FileSpreadsheet': return <FileSpreadsheet size={22} />;
      case 'Hammer': return <Hammer size={22} />;
      case 'CheckCircle2': return <CheckCircle2 size={22} />;
      case 'Key': return <Key size={22} />;
      default: return <CheckCircle2 size={22} />;
    }
  };

  const trustBadges = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Batch Lab Tested",
      desc: "7-day & 28-day concrete cube compression testing."
    },
    {
      icon: <HardHat size={20} />,
      title: "Zero-Incident Safety",
      desc: "100% PPE compliance & daily hazard briefings."
    },
    {
      icon: <Clock size={20} />,
      title: "On-Time Milestone Delivery",
      desc: "Computerized critical-path Gantt schedules."
    },
    {
      icon: <FileCheck2 size={20} />,
      title: "Transparent Itemized BOQ",
      desc: "Structured milestone billing with zero hidden costs."
    }
  ];

  return (
    <div className="strengths-page">
      <SEO
        title="Our Strengths | Why Choose Pawar Constructions?"
        description="Discover why clients trust Pawar Constructions: certified quality materials, skilled professionals, safety first culture, transparent BOQ communication, and timely execution."
        canonicalPath="/strengths"
        ogImage="/images/strength-materials.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Why Choose Pawar Constructions - Core Strengths",
          "description": "8 core construction and civil contracting capabilities.",
          "publisher": {
            "@type": "Organization",
            "name": "PAWAR CONSTRUCTIONS",
            "url": "http://localhost:5173"
          }
        }}
      />

      {/* Exact Page Hero */}
      <PageHero
        badge="Competitive Advantage"
        title={companyData.strengthsPageConfig?.heroTitle || "Why Choose Pawar Constructions?"}
        subtitle={companyData.strengthsPageConfig?.heroSubtitle || "Engineered on structural integrity, verified with certified batch testing, and delivered through uncompromising craftsmanship across every project milestone."}
        breadcrumbs={[{ label: 'Our Strengths' }]}
      />

      {/* Trust Highlights Strip */}
      <section className="strengths-trust-strip">
        <div className="container">
          <div className="trust-strip-grid">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="trust-strip-item">
                <div className="trust-strip-icon">
                  {badge.icon}
                </div>
                <div>
                  <h4 className="trust-strip-title">{badge.title}</h4>
                  <p className="trust-strip-desc">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Core Strengths Section */}
      <section className="section theme-light" style={{ paddingTop: '60px', paddingBottom: '70px' }}>
        <div className="container">
          
          <SectionHeading
            badge="The 8 Pillars of Excellence"
            title="Disciplines That Define Pawar Constructions"
            description="Our reputation as a premier general contractor is built upon verifiable engineering standards, uncompromising safety culture, and enduring craftsmanship at every structural phase."
            align="center"
          />

          {/* 8 Strengths Grid */}
          <div className="strengths-responsive-grid">
            {companyData.strengths.map((strength) => (
              <StrengthCard key={strength.id} strength={strength} />
            ))}
          </div>

        </div>
      </section>

      {/* Construction Process Timeline Section */}
      <section className="section theme-offwhite" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span className="badge-pill" style={{ marginBottom: '12px' }}>
              Project Lifecycle
            </span>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '14px', color: 'var(--color-text-title)' }}>
              {companyData.strengthsPageConfig?.timelineTitle || "Our Construction Process Timeline"}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              {companyData.strengthsPageConfig?.timelineSubtitle || "Consultation → Planning → Execution → Quality Check → Handover"}
            </p>

            {/* Quick Breadcrumb Flow */}
            <div className="timeline-flow-badge-row">
              <span className="flow-step">Consultation</span>
              <span className="flow-arrow">&rarr;</span>
              <span className="flow-step">Planning</span>
              <span className="flow-arrow">&rarr;</span>
              <span className="flow-step">Execution</span>
              <span className="flow-arrow">&rarr;</span>
              <span className="flow-step">Quality Check</span>
              <span className="flow-arrow">&rarr;</span>
              <span className="flow-step highlight">Handover</span>
            </div>
          </div>

          {/* Interactive Timeline Track */}
          <div className="process-timeline-wrapper">
            <div className="process-timeline-grid">
              {companyData.timelineProcess.map((item) => (
                <div key={item.step} className="timeline-step-card">
                  {/* Step Connector Line on desktop */}
                  <div className="step-badge-circle">
                    <span className="step-num">{item.step}</span>
                  </div>

                  <div className="step-card-header">
                    <div className="step-icon-box">
                      {getTimelineIcon(item.icon)}
                    </div>
                    <div>
                      <span className="step-tag-text">{item.subtitle}</span>
                      <h3 className="step-title">{item.title}</h3>
                    </div>
                  </div>

                  <p className="step-desc">
                    {item.desc}
                  </p>

                  <div className="step-deliverables-box">
                    <span className="deliverables-label">Key Milestones:</span>
                    <ul className="deliverables-list">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="deliverable-item">
                          <Check size={13} className="deliverable-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Every step is governed by standardized quality checks and transparent milestone approvals.
            </p>
            <CTAButton to="/contact" variant="primary" size="md" icon={<ArrowRight size={16} />}>
              Start Consultation for Your Project
            </CTAButton>
          </div>

        </div>
      </section>

      {/* Trust & Quality Assurance Metric Banner */}
      <section className="section theme-charcoal">
        <div className="container">
          <div className="strengths-deep-dive-grid">
            <div className="deep-dive-content">
              <span className="badge-pill dark" style={{ marginBottom: '16px' }}>
                Engineering Governance
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: '2.2rem', marginBottom: '16px', lineHeight: 1.3 }}>
                Zero Compromise on Structural Safety & Material Integrity
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                We believe that trust is earned through empirical verification. That is why every batch of cement, consignment of steel rebar, and waterproofing application undergoes accredited testing before installation.
              </p>

              <div className="deep-dive-specs-list">
                <div className="deep-dive-spec-item">
                  <div className="spec-bullet-icon">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', margin: '0 0 4px', fontSize: '1rem' }}>Independent Third-Party Audits</h4>
                    <p style={{ color: '#94A3B8', margin: 0, fontSize: '0.875rem' }}>
                      Compression testing reports issued by accredited materials testing laboratories.
                    </p>
                  </div>
                </div>

                <div className="deep-dive-spec-item">
                  <div className="spec-bullet-icon">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', margin: '0 0 4px', fontSize: '1rem' }}>National Building Code (NBC) Compliance</h4>
                    <p style={{ color: '#94A3B8', margin: 0, fontSize: '0.875rem' }}>
                      Seismic Zone IV earthquake-resistant reinforcement detailing on all structural frames.
                    </p>
                  </div>
                </div>

                <div className="deep-dive-spec-item">
                  <div className="spec-bullet-icon">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', margin: '0 0 4px', fontSize: '1rem' }}>Documented Structural Warranties</h4>
                    <p style={{ color: '#94A3B8', margin: 0, fontSize: '0.875rem' }}>
                      Post-handover warranty certificates protecting foundations, RCC slabs, and waterproofing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="deep-dive-visual-card">
              <div className="visual-card-inner">
                <div className="visual-header-badge">
                  <ShieldCheck size={28} style={{ color: 'var(--color-primary)' }} />
                  <div>
                    <h3 style={{ color: '#FFFFFF', margin: 0, fontSize: '1.25rem' }}>Quality Guarantee</h3>
                    <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Pawar Constructions Protocol</span>
                  </div>
                </div>

                <div className="metric-score-row">
                  <div className="metric-score-box">
                    <span className="score-num">100%</span>
                    <span className="score-label">Batch Tested Steel & Concrete</span>
                  </div>
                  <div className="metric-score-box">
                    <span className="score-num">0</span>
                    <span className="score-label">Compromise Safety Standard</span>
                  </div>
                </div>

                <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.5, margin: '20px 0' }}>
                  Our site supervisors and safety engineers possess full stop-work authority if any raw material fails to meet certified design specifications.
                </p>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link 
                    to="/projects" 
                    className="btn btn-outline" 
                    style={{ flex: 1, textAlign: 'center', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}
                  >
                    View Our Portfolio
                  </Link>
                  <Link 
                    to="/contact" 
                    className="btn btn-primary" 
                    style={{ flex: 1, textAlign: 'center' }}
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Final CTA Section */}
      <section className="section theme-light" style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <span className="badge-pill" style={{ marginBottom: '14px' }}>
            Get Started
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text-title)', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            {companyData.strengthsPageConfig?.ctaHeading || "Start Your Project With Us"}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 32px' }}>
            {companyData.strengthsPageConfig?.ctaSubtitle || "Whether planning a commercial development, residential enclave, industrial manufacturing campus, or public civil infrastructure, partner with an engineering team dedicated to flawless execution."}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CTAButton to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Start Your Project With Us
            </CTAButton>
            <CTAButton to="/projects" variant="outline" size="lg">
              Explore Our Projects
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
