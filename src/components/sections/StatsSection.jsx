import React from 'react';
import { Edit3 } from 'lucide-react';
import { companyData } from '../../data/companyData';

/**
 * Reusable StatsSection Component
 * Charcoal background banner with bold metric counts and descriptive labels.
 * Clearly marks placeholder figures as editable company data.
 */
export default function StatsSection({ stats = companyData.stats, className = '' }) {
  return (
    <section className={`stats-editable-banner ${className}`} aria-label="Company Statistics">
      <div className="container">
        <div className="stats-editable-notice">
          <span className="editable-tag-badge">
            <Edit3 size={13} />
            <span>Company Metrics Placeholder &bull; Configurable Data</span>
          </span>
        </div>

        <div className="grid-4">
          {stats.map((item) => (
            <div key={item.id} className="stats-metric-card">
              <div className="stats-metric-value">{item.value}</div>
              <div className="stats-metric-label">{item.label}</div>
              {item.subtitle && <div className="stats-metric-hint">{item.subtitle}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
