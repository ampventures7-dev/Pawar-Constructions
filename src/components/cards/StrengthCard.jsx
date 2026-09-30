import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  HardHat, 
  FileText, 
  Clock, 
  HeartHandshake, 
  Sparkles, 
  Award,
  CheckCircle2
} from 'lucide-react';

/**
 * Reusable StrengthCard Component
 * Displays a core engineering capability and trust pillar:
 * - Icon & Title
 * - Supporting Visual (image with badge)
 * - Detailed explanation
 * - Key engineering checkpoints
 * - Metric / validation badge
 */
export default function StrengthCard({ strength }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Users': return <Users size={24} />;
      case 'HardHat': return <HardHat size={24} />;
      case 'FileText': return <FileText size={24} />;
      case 'Clock': return <Clock size={24} />;
      case 'HeartHandshake': return <HeartHandshake size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      case 'Award': return <Award size={24} />;
      default: return <ShieldCheck size={24} />;
    }
  };

  return (
    <article className="strength-card-v2" id={strength.id}>
      {/* Supporting Visual Header */}
      {strength.visual && (
        <div className="strength-visual-wrapper">
          <img 
            src={strength.visual} 
            alt={strength.visualAlt || strength.title} 
            className="strength-visual-img"
            loading="lazy"
            decoding="async"
          />
          {strength.visualBadge && (
            <span className="strength-visual-badge">
              {strength.visualBadge}
            </span>
          )}
          {strength.number && (
            <span className="strength-number-tag">
              {strength.number}
            </span>
          )}
        </div>
      )}

      <div className="strength-card-content">
        {/* Header Strip with Icon and Title */}
        <div className="strength-header-strip">
          <div className="strength-icon-container">
            {getIcon(strength.icon)}
          </div>
          <div>
            <h3 className="strength-card-title">{strength.title}</h3>
            {strength.tagline && (
              <p className="strength-card-tagline">{strength.tagline}</p>
            )}
          </div>
        </div>

        {/* Detailed Explanation */}
        <p className="strength-card-explanation">
          {strength.explanation}
        </p>

        {/* Technical Metric Callout */}
        {strength.metric && (
          <div className="strength-metric-callout">
            <span className="strength-metric-value">{strength.metric}</span>
            <span className="strength-metric-label">{strength.metricLabel}</span>
          </div>
        )}

        {/* Key Engineering Practices Checklist */}
        {strength.keyPoints && strength.keyPoints.length > 0 && (
          <div className="strength-checklist-box">
            <h4 className="strength-checklist-heading">Engineering Practices</h4>
            <ul className="strength-checklist-items">
              {strength.keyPoints.map((point, index) => (
                <li key={index} className="strength-checklist-item">
                  <CheckCircle2 size={15} className="strength-check-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
