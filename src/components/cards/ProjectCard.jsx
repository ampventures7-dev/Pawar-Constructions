import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building, ArrowRight } from 'lucide-react';
import CTAButton from '../common/CTAButton';

/**
 * Reusable ProjectCard Component
 * Displays project showcase item with:
 * - Project image
 * - Project name
 * - Category
 * - Location
 * - Short description
 * - View Details button linking to /projects/:id
 */
export default function ProjectCard({ project }) {
  const isOngoing = project.status?.toLowerCase() === 'ongoing';

  return (
    <article className="project-card">
      <Link 
        to={`/projects/${project.id}`} 
        className="project-media-wrapper"
        aria-label={`View details for ${project.title}`}
      >
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="project-card-img" 
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project-media-graphic" aria-hidden="true">
            <Building strokeWidth={1.2} />
          </div>
        )}

        <span className={`project-status-badge ${isOngoing ? 'ongoing' : 'completed'}`}>
          {project.badge || project.status}
        </span>

        <span className="project-category-tag">
          {project.category}
        </span>
      </Link>

      <div className="project-body">
        <div className="project-header-meta">
          <span className="project-category-label">{project.category}</span>
          {project.specifications?.area && (
            <span className="project-area-pill">{project.specifications.area}</span>
          )}
        </div>

        <h3 className="project-title">
          <Link to={`/projects/${project.id}`} className="project-title-link">
            {project.title}
          </Link>
        </h3>

        <div className="project-location">
          <MapPin size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          <span>{project.location}</span>
        </div>

        <p className="project-desc">
          {project.shortDesc || project.description}
        </p>

        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          <CTAButton 
            to={`/projects/${project.id}`} 
            variant="outline" 
            size="sm" 
            icon={<ArrowRight size={15} />}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            View Details
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
