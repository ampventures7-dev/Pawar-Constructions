import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HardHat, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  ArrowUp
} from 'lucide-react';
import { companyData } from '../../data/companyData';

// Clean SVG components for brand/social icons
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer Component
 * Charcoal theme with brand overview, quick navigation links, services directory,
 * contact placeholders, social icons, and copyright bar.
 */
export default function Footer() {
  const currentYear = CURRENT_YEAR;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Linkedin': return <LinkedInIcon />;
      case 'Facebook': return <FacebookIcon />;
      case 'Instagram': return <InstagramIcon />;
      case 'Twitter': return <TwitterIcon />;
      case 'Youtube': return <YouTubeIcon />;
      default: return null;
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Profile */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '18px' }}>
              <div className="brand-icon">
                <HardHat size={24} strokeWidth={2.4} />
              </div>
              <div className="brand-text">
                <span className="brand-name" style={{ color: '#FFFFFF' }}>
                  {companyData.name}
                </span>
                <span className="brand-tagline">
                  Civil & Infrastructure
                </span>
              </div>
            </div>
            <p className="footer-about-text">
              Specialized in delivering premium commercial, residential, industrial, and civil infrastructure projects with unwavering structural safety, transparent budgeting, and timely milestone handovers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {companyData.navigation.map((nav) => (
                <li key={nav.path} className="footer-link-item">
                  <Link to={nav.path}>
                    <ChevronRight size={14} />
                    <span>{nav.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              {companyData.services.slice(0, 5).map((service) => (
                <li key={service.id} className="footer-link-item">
                  <Link to="/services">
                    <ChevronRight size={14} />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Placeholders */}
          <div>
            <h4 className="footer-col-title">Corporate Office</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} />
                <div>
                  <strong>Address</strong>
                  <span>{companyData.contact.address}</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <strong>Direct Line</strong>
                  <span>{companyData.contact.phone}</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={18} />
                <div>
                  <strong>Official Inquiry</strong>
                  <span>{companyData.contact.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <div>
            All Rights Reserved © {currentYear} &mdash; <strong>{companyData.name}</strong>. Designed for professional infrastructure excellence.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Social Media Placeholders */}
            <div className="footer-social-strip">
              {companyData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url !== '#' ? social.url : '#'}
                  onClick={(e) => { if (social.url === '#') e.preventDefault(); }}
                  className="social-icon-btn"
                  aria-label={`Visit Pawar Constructions on ${social.name}`}
                  title={social.name}
                  target={social.url !== '#' ? "_blank" : undefined}
                  rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="social-icon-btn"
              title="Back to Top"
              aria-label="Back to Top"
              style={{ cursor: 'pointer' }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
