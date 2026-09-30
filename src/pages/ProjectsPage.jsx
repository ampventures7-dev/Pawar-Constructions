import React, { useState, useTransition } from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/cards/ProjectCard';
import CTAButton from '../components/common/CTAButton';
import SEO from '../components/common/SEO';
import { companyData } from '../data/companyData';
import { Filter, Search, Building2, CheckCircle2, Clock } from 'lucide-react';

/**
 * ProjectsPage Component
 * Premium project portfolio for PAWAR CONSTRUCTIONS.
 * Features:
 * - Exact Hero: "Our Projects" & "Explore our construction work and completed projects."
 * - Category filters: All, Residential, Commercial, Industrial, Civil, Renovation
 * - Responsive gallery grid with smooth filtering animation
 * - Project cards containing image, name, category, location, short description, View Details button
 * - Filter counts and search filter
 * - High-impact CTA banner
 */
export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [, startTransition] = useTransition();

  const categories = companyData.projectsPageConfig?.categories || [
    'All',
    'Residential',
    'Commercial',
    'Industrial',
    'Civil',
    'Renovation'
  ];

  const handleCategoryChange = (category) => {
    startTransition(() => {
      setSelectedCategory(category);
    });
  };

  // Filter projects by category, status, and search query
  const filteredProjects = companyData.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesStatus =
      statusFilter === 'All' ||
      project.status.toLowerCase() === statusFilter.toLowerCase();

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  // Calculate project counts per category
  const getCategoryCount = (category) => {
    if (category === 'All') return companyData.projects.length;
    return companyData.projects.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    ).length;
  };

  return (
    <div className="projects-page">
      <SEO
        title="Our Projects Portfolio | Pawar Constructions Developments"
        description="Explore our construction work and completed projects across commercial towers, residential townships, manufacturing plants, civil highways, and renovations."
        canonicalPath="/projects"
        ogImage="/images/project-commercial.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Pawar Constructions Projects Portfolio",
          "description": "Showcase of completed and active construction developments.",
          "publisher": {
            "@type": "Organization",
            "name": "PAWAR CONSTRUCTIONS",
            "url": "http://localhost:5173"
          }
        }}
      />

      {/* Exact Page Hero */}
      <PageHero
        badge="Portfolio Showcase"
        title={companyData.projectsPageConfig?.heroTitle || "Our Projects"}
        subtitle={companyData.projectsPageConfig?.heroSubtitle || "Explore our construction work and completed projects."}
        breadcrumbs={[{ label: 'Our Projects' }]}
      />

      {/* Main Portfolio Section */}
      <section className="section theme-light" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          
          <SectionHeading
            badge="Engineering Portfolio"
            title="Completed & Active Construction Work"
            description="Explore our cross-sector portfolio spanning luxury residential gated developments, grade-A commercial complexes, pre-engineered industrial warehouses, heavy civil road networks, and seismic structural retrofits."
            align="center"
          />

          {/* Filter Bar Controls */}
          <div className="portfolio-controls-card">
            
            {/* Category Filter Tabs */}
            <div className="category-filters-wrapper" role="tablist" aria-label="Project Category Filter">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                const count = getCategoryCount(category);

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`portfolio-filter-pill ${isActive ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    <span>{category}</span>
                    <span className="pill-count-badge">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Sub-Filters: Status & Quick Search */}
            <div className="portfolio-secondary-filters">
              
              {/* Status Toggle */}
              <div className="status-toggle-group">
                <span className="filter-label">
                  <Filter size={14} style={{ color: 'var(--color-primary)' }} />
                  <span>Status:</span>
                </span>
                <button
                  type="button"
                  className={`status-chip ${statusFilter === 'All' ? 'active' : ''}`}
                  onClick={() => setStatusFilter('All')}
                >
                  All
                </button>
                <button
                  type="button"
                  className={`status-chip ${statusFilter === 'Completed' ? 'active' : ''}`}
                  onClick={() => setStatusFilter('Completed')}
                >
                  <CheckCircle2 size={13} style={{ color: '#16A34A' }} />
                  Completed
                </button>
                <button
                  type="button"
                  className={`status-chip ${statusFilter === 'Ongoing' ? 'active' : ''}`}
                  onClick={() => setStatusFilter('Ongoing')}
                >
                  <Clock size={13} style={{ color: '#D97706' }} />
                  Ongoing
                </button>
              </div>

              {/* Quick Keyword Search */}
              <div className="portfolio-search-box">
                <Search size={15} className="search-box-icon" />
                <input
                  type="text"
                  placeholder="Filter by keyword, location, or type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="portfolio-search-input"
                  aria-label="Filter projects by search term"
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    className="search-clear-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    &times;
                  </button>
                )}
              </div>

            </div>

          </div>

          {/* Result Count and Active Filters Notice */}
          <div className="portfolio-status-bar">
            <span className="results-count-text">
              Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'development' : 'developments'}
              {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
              {statusFilter !== 'All' && <span> with <strong>{statusFilter}</strong> status</span>}
              {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            </span>

            {(selectedCategory !== 'All' || statusFilter !== 'All' || searchQuery !== '') && (
              <button
                type="button"
                className="reset-filters-btn"
                onClick={() => {
                  setSelectedCategory('All');
                  setStatusFilter('All');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Animated Responsive Project Gallery */}
          <div 
            key={`${selectedCategory}-${statusFilter}-${searchQuery}`}
            className="grid-3 portfolio-animated-grid"
          >
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className="portfolio-card-item-wrapper"
                style={{ animationDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="portfolio-empty-state">
              <Building2 size={48} className="empty-state-icon" />
              <h3>No Matching Projects Found</h3>
              <p>
                We could not find any construction projects matching your active category and keyword selection.
              </p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setSelectedCategory('All');
                  setStatusFilter('All');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Construction Standards / Capabilities Strip */}
      <section className="section theme-offwhite" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="portfolio-metrics-banner">
            <div className="metric-col">
              <span className="metric-tag">Execution Rigor</span>
              <h3 className="metric-title">Strict Code Adherence</h3>
              <p className="metric-desc">Every structure is mapped to seismic zone standards, approved BOQs, and third-party laboratory cube tests.</p>
            </div>
            <div className="metric-divider" />
            <div className="metric-col">
              <span className="metric-tag">Safety Culture</span>
              <h3 className="metric-title">Zero Compromise Protocols</h3>
              <p className="metric-desc">Mandatory PPE kits, daily toolbox hazard assessments, certified gantry hoists, and continuous site supervision.</p>
            </div>
            <div className="metric-divider" />
            <div className="metric-col">
              <span className="metric-tag">Schedule Discipline</span>
              <h3 className="metric-title">Milestone Assurance</h3>
              <p className="metric-desc">Transparent weekly digital progress logs, computerized critical path scheduling, and penalty-backed completion guarantees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Project CTA Banner */}
      <section className="section theme-charcoal">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '28px' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="badge-pill dark" style={{ marginBottom: '12px' }}>
              Have a Project in Mind?
            </span>
            <h2 style={{ color: '#FFFFFF', fontSize: '2.1rem', marginBottom: '10px' }}>
              Build Your Next Landmark with Pawar Constructions
            </h2>
            <p style={{ color: '#CBD5E1', margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
              From initial structural feasibility and municipal approvals to turnkey engineering execution, our team brings decades of contracting mastery.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <CTAButton to="/contact" variant="primary" size="lg">
              Request a Project Quote
            </CTAButton>
            <CTAButton to="/services" variant="outline" size="lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              Explore Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
