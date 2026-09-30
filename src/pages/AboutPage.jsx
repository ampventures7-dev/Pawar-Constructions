import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTAButton from '../components/common/CTAButton';
import SEO from '../components/common/SEO';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  HeartHandshake, 
  Leaf, 
  Scale, 
  Lightbulb, 
  Compass, 
  Hammer, 
  Key, 
  MessageSquare, 
  CheckCircle2, 
  Edit3,
  Building2
} from 'lucide-react';

/**
 * AboutPage Component
 * Complete About Us page for PAWAR CONSTRUCTIONS implementing the 8-part specification:
 * 1. Page Hero ("About Pawar Constructions", "Building trust through quality, commitment and craftsmanship.")
 * 2. Company Introduction (Two-column layout with construction photo + editable placeholders)
 * 3. Our Mission (5 focus areas: Quality, Safety, Customer Satisfaction, Responsible Construction, Timely Execution)
 * 4. Our Vision (Separate visually strong dark charcoal section with strategic pillars)
 * 5. Our Values (6 cards: Integrity, Quality, Reliability, Safety, Innovation, Customer Satisfaction)
 * 6. Our Approach (4-step process: 01 Consultation, 02 Planning, 03 Construction, 04 Handover)
 * 7. Company Stats (Editable placeholders: [YEARS], [PROJECTS], [CLIENTS], [EMPLOYEES])
 * 8. CTA ("Let's Build Something Great Together" with "Contact Us" button)
 */
export default function AboutPage() {
  // 3. Our Mission - 5 Focus Areas
  const missionPillars = [
    {
      id: "mission-quality",
      title: "Quality",
      desc: "Zero tolerance for substandard raw materials. Every concrete pour and steel reinforcement batch undergoes standardized laboratory testing.",
      icon: <Award size={26} />
    },
    {
      id: "mission-safety",
      title: "Safety",
      desc: "Rigorous job-site safety rules, mandatory 100% PPE compliance, daily hazard briefings, and standard site safety protocols.",
      icon: <ShieldCheck size={26} />
    },
    {
      id: "mission-satisfaction",
      title: "Customer Satisfaction",
      desc: "Transparent itemized budgeting, proactive project status updates, and single-point accountability to fulfill client aspirations.",
      icon: <HeartHandshake size={26} />
    },
    {
      id: "mission-responsible",
      title: "Responsible Construction",
      desc: "Eco-conscious building methodologies, minimal site wastage, responsible resource recycling, and green standard compliance.",
      icon: <Leaf size={26} />
    },
    {
      id: "mission-timely",
      title: "Timely Execution",
      desc: "Gantt-chart driven critical path management, digital milestone tracking, and contractual punctuality on every handover.",
      icon: <Clock size={26} />
    }
  ];

  // 5. Our Values - 6 Core Disciplines
  const valuesData = [
    {
      num: "01",
      title: "Integrity",
      desc: "We uphold total honesty, ethical transparency, and contractual fidelity in all client, supplier, and stakeholder engagements.",
      icon: <Scale size={26} />
    },
    {
      num: "02",
      title: "Quality",
      desc: "Uncompromising standards in engineering, material sourcing, structural tolerances, and architectural finish execution.",
      icon: <Award size={26} />
    },
    {
      num: "03",
      title: "Reliability",
      desc: "A steadfast commitment to delivering promised milestones within budget, ensuring our clients can plan their future with complete certainty.",
      icon: <CheckCircle2 size={26} />
    },
    {
      num: "04",
      title: "Safety",
      desc: "Guarding our workers, site visitors, and future occupants with uncompromising safety culture, daily hazard audits, and preventive protocols.",
      icon: <ShieldCheck size={26} />
    },
    {
      num: "05",
      title: "Innovation",
      desc: "Embracing modern engineering techniques, pre-engineered steel designs, advanced surveying, and computerized project management.",
      icon: <Lightbulb size={26} />
    },
    {
      num: "06",
      title: "Customer Satisfaction",
      desc: "Building enduring relationships grounded in active listening, responsive support, and post-occupancy structural peace of mind.",
      icon: <HeartHandshake size={26} />
    }
  ];

  // 6. Our Approach - 4 Step Process
  const approachSteps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Initial client discovery, geotechnical soil evaluation, topographic analysis, site feasibility study, and preliminary budget roadmap.",
      icon: <MessageSquare size={22} />
    },
    {
      step: "02",
      title: "Planning",
      desc: "Architectural CAD drafting, 3D structural BIM modeling, statutory municipal approvals, itemized BOQ estimation, and procurement scheduling.",
      icon: <Compass size={22} />
    },
    {
      step: "03",
      title: "Construction",
      desc: "Mechanized site mobilization, batch-tested material placement, skilled civil engineering supervision, and daily quality & safety audits.",
      icon: <Hammer size={22} />
    },
    {
      step: "04",
      title: "Handover",
      desc: "Final structural and MEP quality inspections, client punch-list resolution, statutory occupancy documentation, and turnkey key handover.",
      icon: <Key size={22} />
    }
  ];

  // 7. Company Stats - Exact requested placeholders
  const aboutStats = [
    { id: "years", value: "[YEARS]", label: "Years of Experience", hint: "Editable Company Metric" },
    { id: "projects", value: "[PROJECTS]", label: "Projects Completed", hint: "Editable Company Metric" },
    { id: "clients", value: "[CLIENTS]", label: "Clients Served", hint: "Editable Company Metric" },
    { id: "employees", value: "[EMPLOYEES]", label: "Skilled Team Members", hint: "Editable Company Metric" },
  ];

  return (
    <div className="about-page">
      <SEO
        title="About Us | Pawar Constructions - Building Trust & Excellence"
        description="Learn about Pawar Constructions: our 5 core mission pillars, our vision for lasting infrastructure, ethical company values, and our 4-step project execution approach."
        canonicalPath="/about"
        ogImage="/images/about-facade.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Pawar Constructions",
          "description": "General contracting and infrastructure development firm committed to quality, safety and craftsmanship.",
          "publisher": {
            "@type": "Organization",
            "name": "PAWAR CONSTRUCTIONS",
            "url": "http://localhost:5173"
          }
        }}
      />

      {/* ------------------------------------------------------------------
          1. PAGE HERO
          ------------------------------------------------------------------ */}
      <PageHero
        badge="About Our Company"
        title="About Pawar Constructions"
        subtitle="Building trust through quality, commitment and craftsmanship."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* ------------------------------------------------------------------
          2. COMPANY INTRODUCTION (Two-Column Layout + Placeholders)
          ------------------------------------------------------------------ */}
      <section className="section theme-light" aria-label="Company Introduction">
        <div className="container">
          <div className="about-intro-grid">
            {/* Visual Column */}
            <div className="about-intro-image-container">
              <img
                src="/images/about-facade.jpg"
                alt="Pawar Constructions Modern Architectural Facade Engineering"
                className="about-intro-image"
                loading="lazy"
                decoding="async"
              />
              <div className="about-intro-badge">
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0
                }}>
                  <Building2 size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#FFFFFF' }}>
                    Pawar Constructions
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                    General Contracting & Infrastructure
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="about-intro-content">
              <SectionHeading
                badge="Who We Are"
                title="Engineering Landmark Structures Grounded in Customer Trust"
                align="left"
                description="Pawar Constructions is a forward-thinking general contracting and infrastructure development firm committed to delivering premier commercial, residential, and industrial builds."
              />

              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '16px' }}>
                With a strong foundation in civil engineering and modern project management, our team approaches every blueprint with precision, passion, and an uncompromising dedication to safety. We believe that enduring construction is not solely defined by concrete and steel, but by the trust and integrity shared with our clients.
              </p>

              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
                From master-planned residential townships and corporate headquarters to heavy industrial parks and public infrastructure, we oversee every phase from initial ground survey to final commissioning with single-source accountability.
              </p>

              {/* Editable Placeholder Content Box */}
              <div className="editable-info-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: 'var(--color-primary)' }}>
                  <Edit3 size={14} />
                  <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                    Corporate Credentials &bull; Configurable Data
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  <div>
                    <strong>Established:</strong>
                    <span>[YEAR FOUNDED]</span>
                  </div>
                  <div>
                    <strong>Headquarters:</strong>
                    <span>[COMPANY HEADQUARTERS ADDRESS]</span>
                  </div>
                  <div>
                    <strong>Leadership:</strong>
                    <span>[MANAGING DIRECTOR / FOUNDER NAME]</span>
                  </div>
                  <div>
                    <strong>License / Registration:</strong>
                    <span>[CONTRACTOR REGISTRATION NO.]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. OUR MISSION (5 Focus Areas)
          ------------------------------------------------------------------ */}
      <section className="section theme-subtle" aria-label="Our Mission">
        <div className="container">
          <SectionHeading
            badge="Guiding Purpose"
            title="Our Mission"
            description="Our mission is to construct enduring, sustainable, and structurally superior facilities by upholding the highest benchmarks across five foundational pillars."
            align="center"
          />

          <div className="mission-pillars-grid">
            {missionPillars.map((pillar) => (
              <div key={pillar.id} className="mission-pillar-card">
                <div className="mission-icon-box">
                  {pillar.icon}
                </div>
                <h3 className="mission-pillar-title">{pillar.title}</h3>
                <p className="mission-pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. OUR VISION (Separate Visually Strong Section)
          ------------------------------------------------------------------ */}
      <section className="vision-strong-section" aria-label="Our Vision">
        <div className="container">
          <div className="vision-grid-inner">
            {/* Left Statement */}
            <div>
              <span className="badge-pill dark" style={{ marginBottom: '20px' }}>
                Future Outlook
              </span>
              <h2 className="vision-quote-title">
                To Be the Benchmark of Enduring{' '}
                <span className="accent-text">Quality & Innovation</span> in Modern Construction.
              </h2>
              <p className="vision-quote-desc">
                We envision Pawar Constructions as a regional and national leader in turnkey civil engineering, recognized for pioneering sustainable infrastructure, empowering communities, and transforming architectural concepts into resilient, timeless landmarks.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <CTAButton to="/projects" variant="primary" size="md">
                  View Our Landmark Projects
                </CTAButton>
                <CTAButton to="/contact" variant="outline-white" size="md">
                  Partner With Us
                </CTAButton>
              </div>
            </div>

            {/* Right Strategic Goals Card */}
            <div className="vision-goals-box">
              <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '20px', fontWeight: 800 }}>
                Strategic Vision Milestones
              </h3>

              <div className="vision-goal-item">
                <div className="vision-goal-bullet">01</div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', margin: '0 0 4px 0' }}>
                    Sustainable & Eco-Conscious Building
                  </h4>
                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', margin: 0 }}>
                    Adopting carbon-reduced concrete formulations, energy-efficient building envelopes, and solar-ready rooftops.
                  </p>
                </div>
              </div>

              <div className="vision-goal-item">
                <div className="vision-goal-bullet">02</div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', margin: '0 0 4px 0' }}>
                    Digital Construction & BIM Integration
                  </h4>
                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', margin: 0 }}>
                    Leveraging Building Information Modeling (BIM) and drone topographic audits for clash detection and zero rework.
                  </p>
                </div>
              </div>

              <div className="vision-goal-item">
                <div className="vision-goal-bullet">03</div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', margin: '0 0 4px 0' }}>
                    Empowered Workforce & Zero-Incident Safety
                  </h4>
                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', margin: 0 }}>
                    Fostering an inclusive, safety-certified work culture with continuous upskilling across all civil engineering trades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. OUR VALUES (6 Distinct Cards)
          ------------------------------------------------------------------ */}
      <section className="section theme-light" aria-label="Our Values">
        <div className="container">
          <SectionHeading
            badge="Core Principles"
            title="Our Values"
            description="Our core values guide every structural calculation, supplier agreement, safety audit, and client interaction."
            align="center"
          />

          <div className="values-cards-grid">
            {valuesData.map((val) => (
              <div key={val.num} className="value-card-item">
                <div className="value-card-header">
                  <div className="value-card-icon">
                    {val.icon}
                  </div>
                  <span className="value-card-number">{val.num}</span>
                </div>
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6. OUR APPROACH (4-Step Process)
          ------------------------------------------------------------------ */}
      <section className="section theme-subtle" aria-label="Our Approach">
        <div className="container">
          <SectionHeading
            badge="Standardized Lifecycle"
            title="Our Approach"
            description="A disciplined, transparent 4-stage construction process that eliminates uncertainty and guarantees seamless milestone delivery."
            align="center"
          />

          <div className="approach-process-grid">
            {approachSteps.map((step) => (
              <div key={step.step} className="approach-step-card">
                <div className="approach-step-num">
                  <span>{step.step}</span>
                  <div className="approach-step-icon">
                    {step.icon}
                  </div>
                </div>
                <h3 className="approach-step-title">{step.title}</h3>
                <p className="approach-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7. COMPANY STATS (Editable Placeholders Only)
          ------------------------------------------------------------------ */}
      <section className="stats-editable-banner" aria-label="Company Statistics">
        <div className="container">
          <div className="stats-editable-notice">
            <span className="editable-tag-badge">
              <Edit3 size={13} />
              <span>Company Metrics Placeholder &bull; Configurable Data</span>
            </span>
          </div>

          <div className="grid-4">
            {aboutStats.map((item) => (
              <div key={item.id} className="stats-metric-card">
                <div className="stats-metric-value">{item.value}</div>
                <div className="stats-metric-label">{item.label}</div>
                <div className="stats-metric-hint">{item.hint}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          8. CALL TO ACTION SECTION
          ------------------------------------------------------------------ */}
      <section className="cta-banner-large" aria-label="Call to Action">
        <div className="container cta-banner-inner">
          <span className="badge-pill dark" style={{ marginBottom: '20px' }}>
            Start Your Next Build
          </span>

          <h2 className="cta-banner-title">
            Let's Build Something Great Together
          </h2>

          <p className="cta-banner-text">
            Reach out to our project engineering desk to discuss your site plans, feasibility analysis, and transparent cost estimates.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <CTAButton to="/contact" variant="primary" size="lg">
              Contact Us
            </CTAButton>
            <CTAButton to="/services" variant="outline-white" size="lg">
              Explore Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
