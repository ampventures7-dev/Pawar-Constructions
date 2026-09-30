import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Reusable PageHero component for interior pages.
 * Displays page title, subtitle, and breadcrumb navigation with corporate dark charcoal styling.
 */
export default function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  className = '',
}) {
  return (
    <section className={`page-hero ${className}`}>
      <div className="container page-hero-inner">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="page-hero-breadcrumbs">
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Home size={14} />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight size={13} style={{ opacity: 0.6 }} />
              {crumb.path ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {badge && (
          <span className="badge-pill dark" style={{ marginBottom: '14px' }}>
            {badge}
          </span>
        )}

        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
