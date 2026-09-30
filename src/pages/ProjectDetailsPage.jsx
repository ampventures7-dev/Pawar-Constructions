import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Building, 
  Layers, 
  Award, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  Check
} from 'lucide-react';
import CTAButton from '../components/common/CTAButton';
import ProjectCard from '../components/cards/ProjectCard';
import SEO from '../components/common/SEO';
import { companyData } from '../data/companyData';

/**
 * ProjectDetailsPage Component
 * Comprehensive project showcase featuring:
 * - Project title & hero metadata
 * - Interactive multi-image gallery with active preview
 * - Location, category, completion status
 * - Detailed architectural description
 * - Scope of work checklist
 * - Project engineering highlights
 * - Technical specifications breakdown
 * - Direct enquiry CTA and related projects
 */
export default function ProjectDetailsPage() {
  const { id } = useParams();

  // Find target project
  const project = companyData.projects.find((p) => p.id === id);

  // State to track manually selected thumbnail
  const [selectedImage, setSelectedImage] = useState(null);
  const [prevId, setPrevId] = useState(id);

  // Reset selected image when navigating to a different project
  if (prevId !== id) {
    setPrevId(id);
    setSelectedImage(null);
  }

  const activeImage = selectedImage ?? (project?.gallery?.[0] || project?.imageUrl || '');

  if (!project) {
    return (
      <div className="section theme-light" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <Building size={48} style={{ color: 'var(--color-primary)', margin: '0 auto 16px' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '12px' }}>Project Not Found</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
            The requested project placeholder could not be located in our portfolio directory.
          </p>
          <CTAButton to="/projects" variant="primary" icon={<ArrowLeft size={16} />}>
            Back to Projects Portfolio
          </CTAButton>
        </div>
      </div>
    );
  }

  const isOngoing = project.status?.toLowerCase() === 'ongoing';
  const relatedProjects = companyData.projects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.category !== 'All'))
    .slice(0, 3);

  return (
    <div className="project-details-page">
      <SEO
        title={`${project.title} | Pawar Constructions Projects`}
        description={project.shortDesc || project.description}
        canonicalPath={`/projects/${project.id}`}
        ogImage={project.imageUrl || "/images/project-commercial.jpg"}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemPage",
          "name": project.title,
          "description": project.shortDesc || project.description,
          "provider": {
            "@type": "ConstructionBusiness",
            "name": "PAWAR CONSTRUCTIONS"
          }
        }}
      />

      {/* Breadcrumb Header Bar */}
      <section className="project-details-header theme-charcoal">
        <div className="container">
          <nav className="project-breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/projects" className="breadcrumb-link">Projects</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{project.title}</span>
          </nav>

          <div className="project-details-hero-content">
            <div className="project-hero-meta-strip">
              <span className={`project-status-badge large ${isOngoing ? 'ongoing' : 'completed'}`}>
                {project.badge || project.status}
              </span>
              <span className="project-category-badge">
                {project.category}
              </span>
            </div>

            <h1 className="project-details-title">{project.title}</h1>

            <div className="project-details-meta-row">
              <div className="meta-item">
                <MapPin size={18} className="meta-icon" />
                <span>{project.location}</span>
              </div>
              {project.specifications?.timeline && (
                <div className="meta-item">
                  <Clock size={18} className="meta-icon" />
                  <span>{project.specifications.timeline}</span>
                </div>
              )}
              {project.specifications?.structureType && (
                <div className="meta-item">
                  <Building size={18} className="meta-icon" />
                  <span>{project.specifications.structureType}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section theme-light" style={{ paddingTop: '40px', paddingBottom: '70px' }}>
        <div className="container">
          
          {/* Back Button Link */}
          <div style={{ marginBottom: '24px' }}>
            <Link 
              to="/projects" 
              className="back-to-projects-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-primary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'var(--transition-fast)'
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to All Projects</span>
            </Link>
          </div>

          <div className="project-details-layout">
            
            {/* Left Main Column: Media & Specifications */}
            <div className="project-details-main">
              
              {/* Interactive Gallery */}
              <div className="project-gallery-container">
                <div className="project-main-image-viewport">
                  <img 
                    src={activeImage} 
                    alt={project.title} 
                    className="project-featured-image"
                    decoding="async"
                  />
                  <div className="project-status-overlay">
                    <span className={`status-pill ${isOngoing ? 'ongoing' : 'completed'}`}>
                      {project.status === 'Completed' ? 'Completed Development' : 'Active Site Construction'}
                    </span>
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                {project.gallery && project.gallery.length > 1 && (
                  <div className="project-thumbnails-row">
                    {project.gallery.map((thumb, index) => {
                      const isSelected = thumb === activeImage;
                      return (
                        <button
                          key={index}
                          type="button"
                          className={`project-thumbnail-btn ${isSelected ? 'active' : ''}`}
                          onClick={() => setSelectedImage(thumb)}
                          aria-label={`View photo ${index + 1} of ${project.title}`}
                        >
                          <img 
                            src={thumb} 
                            alt={`Preview ${index + 1} of ${project.title}`} 
                            className="project-thumb-img"
                            loading="lazy"
                            decoding="async"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Technical Specifications Strip */}
              {project.specifications && (
                <div className="project-specs-grid">
                  <div className="spec-card">
                    <span className="spec-label">Project Area / Span</span>
                    <span className="spec-val">{project.specifications.area || 'N/A'}</span>
                  </div>
                  <div className="spec-card">
                    <span className="spec-label">Execution Timeline</span>
                    <span className="spec-val">{project.specifications.timeline || 'N/A'}</span>
                  </div>
                  <div className="spec-card">
                    <span className="spec-label">Structural Framing</span>
                    <span className="spec-val">{project.specifications.structureType || 'N/A'}</span>
                  </div>
                  <div className="spec-card">
                    <span className="spec-label">Client Type</span>
                    <span className="spec-val">{project.specifications.clientType || 'N/A'}</span>
                  </div>
                </div>
              )}

              {/* Project Description */}
              <div className="project-content-block">
                <h2 className="block-title">Project Overview</h2>
                <div className="block-text">
                  <p className="lead-paragraph">
                    {project.description}
                  </p>
                  <p>
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Scope of Work */}
              {project.scopeOfWork && project.scopeOfWork.length > 0 && (
                <div className="project-content-block">
                  <div className="block-header-with-icon">
                    <Layers className="block-icon" size={22} />
                    <h2 className="block-title" style={{ margin: 0 }}>Scope of Work</h2>
                  </div>
                  <ul className="project-checklist">
                    {project.scopeOfWork.map((item, idx) => (
                      <li key={idx} className="checklist-item">
                        <span className="check-icon-wrapper">
                          <Check size={14} className="check-icon" />
                        </span>
                        <span className="checklist-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="project-content-block">
                  <div className="block-header-with-icon">
                    <Award className="block-icon" size={22} />
                    <h2 className="block-title" style={{ margin: 0 }}>Project Highlights & Engineering Standards</h2>
                  </div>
                  <div className="highlights-grid">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="highlight-card">
                        <div className="highlight-icon-box">
                          <ShieldCheck size={20} />
                        </div>
                        <p className="highlight-text">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sticky Sidebar */}
            <aside className="project-details-sidebar">
              
              {/* Project Snapshot Card */}
              <div className="sidebar-card">
                <h3 className="sidebar-title">Project Summary</h3>
                <div className="sidebar-divider" />

                <div className="snapshot-row">
                  <span className="snapshot-label">Category:</span>
                  <span className="snapshot-value badge-light">{project.category}</span>
                </div>

                <div className="snapshot-row">
                  <span className="snapshot-label">Status:</span>
                  <span className={`snapshot-value ${isOngoing ? 'status-ongoing' : 'status-completed'}`}>
                    {project.status}
                  </span>
                </div>

                <div className="snapshot-row">
                  <span className="snapshot-label">Location:</span>
                  <span className="snapshot-value">{project.location}</span>
                </div>

                <div className="snapshot-row">
                  <span className="snapshot-label">Discipline:</span>
                  <span className="snapshot-value">General Contracting / EPC</span>
                </div>

                <div className="snapshot-row">
                  <span className="snapshot-label">Quality Grade:</span>
                  <span className="snapshot-value">[QUALITY STANDARD / CERTIFICATION]</span>
                </div>
              </div>

              {/* Request Consultation CTA Card */}
              <div className="sidebar-cta-card theme-charcoal">
                <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '8px' }}>
                  Have a Similar Construction Need?
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '20px', lineHeight: 1.5 }}>
                  Speak directly with Pawar Constructions structural engineers to review your plot measurements and preliminary architectural schematics.
                </p>

                <CTAButton 
                  to={`/contact?project=${project.id}`} 
                  variant="primary" 
                  size="md"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '12px' }}
                >
                  Request a Project Quote
                </CTAButton>

                <CTAButton 
                  to="/services" 
                  variant="outline" 
                  size="sm"
                  style={{ width: '100%', justifyContent: 'center', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  View Related Services
                </CTAButton>

                <div className="sidebar-contact-quick">
                  <div className="quick-item">
                    <Phone size={15} style={{ color: 'var(--color-primary)' }} />
                    <a href={`tel:${companyData.contactInfo.phone}`}>
                      {companyData.contactInfo.phone}
                    </a>
                  </div>
                  <div className="quick-item">
                    <Mail size={15} style={{ color: 'var(--color-primary)' }} />
                    <a href={`mailto:${companyData.contactInfo.email}`}>
                      {companyData.contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quality & Safety Assurance */}
              <div className="sidebar-assurance-card">
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <ShieldCheck size={24} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', fontWeight: 600 }}>Pawar Construction Assurance</h4>
                    <p style={{ margin: 0, fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
                      Strict adherence to certified mix designs, seismic structural codes, batch-inspected steel, and scheduled milestone sign-offs.
                    </p>
                  </div>
                </div>
              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="section theme-offwhite" style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="badge-pill" style={{ marginBottom: '8px' }}>Portfolio Showcase</span>
                <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Explore More Projects</h2>
              </div>
              <CTAButton to="/projects" variant="outline" size="sm" icon={<ArrowRight size={15} />}>
                View All Projects
              </CTAButton>
            </div>

            <div className="grid-3">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Global Banner */}
      <section className="section theme-charcoal">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '650px' }}>
            <span className="badge-pill dark" style={{ marginBottom: '12px' }}>
              Ready to Build?
            </span>
            <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '10px' }}>
              Start Your Next Project with Pawar Constructions
            </h2>
            <p style={{ color: '#CBD5E1', margin: 0, lineHeight: 1.6 }}>
              Whether residential communities, high-rise commercial premises, industrial plants, or civil infrastructure, we deliver on time and within budget.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <CTAButton to="/contact" variant="primary" size="lg">
              Get an Estimate
            </CTAButton>
            <CTAButton to="/services" variant="outline" size="lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              Explore Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
