import React from 'react';

/**
 * Reusable SectionHeading Component
 * Provides unified title typography, category badge, and decorative industrial accent bar.
 */
export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) {
  return (
    <div className={`section-heading text-${align} ${dark ? 'dark' : ''} ${className}`}>
      {badge && (
        <span className={`badge-pill ${dark ? 'dark' : ''}`}>
          {badge}
        </span>
      )}
      <h2 className="title">{title}</h2>
      <div className="accent-bar" />
      {description && <p className="description">{description}</p>}
    </div>
  );
}
