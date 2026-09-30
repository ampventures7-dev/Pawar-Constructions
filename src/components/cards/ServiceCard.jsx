import React from 'react';
import { 
  Building2, 
  Home, 
  Factory, 
  HardHat, 
  Briefcase, 
  Wrench, 
  Paintbrush, 
  Layers, 
  Check, 
  Send
} from 'lucide-react';
import CTAButton from '../common/CTAButton';

/**
 * Reusable ServiceCard Component
 * Displays service with large image/icon, title, detailed description,
 * key features checklist, and a prominent "Enquire Now" CTA button.
 */
export default function ServiceCard({ service, showImage = true }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 size={24} />;
      case 'Home': return <Home size={24} />;
      case 'Factory': return <Factory size={24} />;
      case 'HardHat': return <HardHat size={24} />;
      case 'Briefcase': return <Briefcase size={24} />;
      case 'Wrench': return <Wrench size={24} />;
      case 'Paintbrush': return <Paintbrush size={24} />;
      case 'Layers': return <Layers size={24} />;
      default: return <Building2 size={24} />;
    }
  };

  return (
    <article className="service-card-enhanced">
      {/* Large Image Header */}
      {showImage && service.image && (
        <div className="service-card-image-wrap">
          <img
            src={service.image}
            alt={service.title}
            className="service-card-img"
            loading="lazy"
            decoding="async"
          />
          <div className="service-card-image-overlay" />
          <div className="service-floating-icon">
            {getIcon(service.icon)}
          </div>
        </div>
      )}

      <div className="service-card-body">
        {(!showImage || !service.image) && (
          <div className="service-icon-box">
            {getIcon(service.icon)}
          </div>
        )}

        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">
          {service.fullDesc || service.shortDesc}
        </p>

        {service.features && service.features.length > 0 && (
          <div className="service-features-container">
            <h4 className="service-features-heading">Key Capabilities</h4>
            <ul className="service-features-list">
              {service.features.map((feature, idx) => (
                <li key={idx} className="service-feature-row">
                  <Check size={14} className="feature-check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Enquire Now CTA Button */}
        <div className="service-card-action">
          <CTAButton
            to={service.ctaLink || "/contact"}
            variant="primary"
            size="md"
            icon={<Send size={15} />}
            style={{ width: '100%' }}
          >
            {service.ctaText || "Enquire Now"}
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
