import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  HardHat, 
  ChevronRight,
  FileText
} from 'lucide-react';
import { companyData } from '../../data/companyData';
import CTAButton from './CTAButton';

/**
 * Navbar Component
 * Features:
 * - Top corporate utility bar (collapses gracefully on mobile)
 * - Brand logo & text with engineering insignia
 * - Desktop navigation with active page indicators
 * - Prominent "Get a Quote" CTA button
 * - Animated mobile hamburger menu with backdrop overlay and body scroll locking
 * - Active page indicator on mobile drawer
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Reset mobile drawer on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      {/* Top Corporate Bar */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-items">
            <a href={`tel:${companyData.contact.phone}`} className="topbar-item">
              <Phone size={13} />
              <span>{companyData.contact.phone}</span>
            </a>
            <a href={`mailto:${companyData.contact.email}`} className="topbar-item topbar-email-item">
              <Mail size={13} />
              <span>{companyData.contact.email}</span>
            </a>
          </div>

          <div className="topbar-items topbar-hours-item">
            <span className="topbar-item">
              <span>{companyData.contact.workingHours}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="navbar" aria-label="Main Navigation">
        <div className="container navbar-container">
          {/* Brand Logo & Text */}
          <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
            <div className="brand-icon">
              <HardHat size={24} strokeWidth={2.4} />
            </div>
            <div className="brand-text">
              <span className="brand-name">{companyData.name}</span>
              <span className="brand-tagline">Engineering & Contracting</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-menu">
            {companyData.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Action */}
          <div className="nav-actions">
            <div className="desktop-quote-btn">
              <CTAButton to="/contact" variant="primary" size="sm" icon={<FileText size={15} />}>
                Get a Quote
              </CTAButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Backdrop */}
        <div 
          className={`mobile-backdrop ${mobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Mobile Navigation Drawer with Smooth Animation */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Navigation Menu</span>
            <span className="mobile-drawer-sub">Pawar Constructions</span>
          </div>

          <ul className="mobile-nav-list">
            {companyData.navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <span className="mobile-nav-text">{item.label}</span>
                  <ChevronRight size={16} className="mobile-nav-arrow" />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <CTAButton 
              to="/contact" 
              variant="primary" 
              size="md" 
              icon={<FileText size={16} />}
              onClick={closeMobileMenu}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Get a Quote
            </CTAButton>

            <div className="mobile-drawer-contact-info">
              <a href={`tel:${companyData.contact.phone}`} className="mobile-contact-pill">
                <Phone size={13} />
                <span>{companyData.contact.phone}</span>
              </a>
              <span className="mobile-contact-hours">{companyData.contact.workingHours}</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
