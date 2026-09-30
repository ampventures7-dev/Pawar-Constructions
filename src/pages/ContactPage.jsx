import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/forms/ContactForm';
import SEO from '../components/common/SEO';
import { companyData } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Copy, 
  Check, 
  Compass, 
  ShieldCheck, 
  Building
} from 'lucide-react';

/**
 * ContactPage Component
 * Full contact page for PAWAR CONSTRUCTIONS.
 * Features:
 * - Exact Hero: "Let's Build Something Together"
 * - Two-column contact section:
 *   - LEFT: Contact information cards (Phone, Email, Address, Business Hours, WhatsApp CTA button)
 *   - RIGHT: Professional enquiry form (Name, Email, Phone, Project Type, Project Location, Budget Range, Message)
 * - Google Maps placeholder section with coordinates and directions
 * - Strictly uses editable placeholders: [COMPANY PHONE], [COMPANY EMAIL], [COMPANY ADDRESS], [BUSINESS HOURS], [WHATSAPP NUMBER]
 */
export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(companyData.contact.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact Us | Pawar Constructions - Let's Build Together"
        description="Connect with Pawar Constructions for preliminary cost estimates, site surveys, and construction consultations. Call or message us on WhatsApp today."
        canonicalPath="/contact"
        ogImage="/images/hero-bg.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Pawar Constructions",
          "description": "Contact Pawar Constructions for civil engineering, contracting, and project consultations.",
          "mainEntity": {
            "@type": "ConstructionBusiness",
            "name": "PAWAR CONSTRUCTIONS",
            "telephone": companyData.contact.phone,
            "email": companyData.contact.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": companyData.contact.address,
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          }
        }}
      />

      {/* Exact Page Hero */}
      <PageHero
        badge="Contact Us"
        title="Let's Build Something Together"
        subtitle="Connect with Pawar Constructions to discuss your architectural vision, site feasibility, and transparent cost estimates."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* Main Two-Column Contact Section */}
      <section className="section theme-light" style={{ paddingTop: '50px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="contact-two-column-layout">
            
            {/* LEFT COLUMN: Contact Information Cards & WhatsApp CTA */}
            <div className="contact-info-column">
              <div className="contact-info-header">
                <span className="badge-pill" style={{ marginBottom: '10px' }}>
                  Direct Contact
                </span>
                <h2 className="contact-column-title">Corporate Coordinates</h2>
                <p className="contact-column-desc">
                  Have an architectural schematic ready or need an on-site feasibility inspection? Reach out to our engineering office directly through the channels below.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="contact-cards-stack">
                
                {/* 1. Phone Card */}
                <div className="contact-card-item">
                  <div className="contact-card-icon-box">
                    <Phone size={22} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Phone</span>
                    <a href={`tel:${companyData.contact.phone}`} className="contact-card-main-val">
                      {companyData.contact.phone}
                    </a>
                    {companyData.contact.altPhone && (
                      <span className="contact-card-sub-val">
                        Secondary: {companyData.contact.altPhone}
                      </span>
                    )}
                  </div>
                </div>

                {/* 2. Email Card */}
                <div className="contact-card-item">
                  <div className="contact-card-icon-box">
                    <Mail size={22} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Email</span>
                    <a href={`mailto:${companyData.contact.email}`} className="contact-card-main-val">
                      {companyData.contact.email}
                    </a>
                    {companyData.contact.supportEmail && (
                      <span className="contact-card-sub-val">
                        Inquiries & Tenders: {companyData.contact.supportEmail}
                      </span>
                    )}
                  </div>
                </div>

                {/* 3. Address Card */}
                <div className="contact-card-item">
                  <div className="contact-card-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Address</span>
                    <p className="contact-card-main-val" style={{ margin: 0 }}>
                      {companyData.contact.address}
                    </p>
                    {companyData.contact.headquarters && (
                      <span className="contact-card-sub-val">
                        {companyData.contact.headquarters}
                      </span>
                    )}
                  </div>
                </div>

                {/* 4. Business Hours Card */}
                <div className="contact-card-item">
                  <div className="contact-card-icon-box">
                    <Clock size={22} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Business Hours</span>
                    <p className="contact-card-main-val" style={{ margin: 0 }}>
                      {companyData.contact.workingHours}
                    </p>
                    {companyData.contact.emergencySupport && (
                      <span className="contact-card-sub-val" style={{ color: 'var(--color-primary)' }}>
                        Site Emergency: {companyData.contact.emergencySupport}
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* WhatsApp CTA Button Card using [WHATSAPP NUMBER] */}
              <div className="whatsapp-cta-card">
                <div className="whatsapp-card-content">
                  <div className="whatsapp-icon-circle">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h3 className="whatsapp-card-title">Instant WhatsApp Inquiry</h3>
                    <p className="whatsapp-card-subtext">
                      Share site blueprints, plot coordinates, or request immediate callback from our estimation desk.
                    </p>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/?text=Hello%20Pawar%20Constructions,%20I%20would%20like%20to%20discuss%20a%20project%20requirement.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-btn-action"
                  aria-label={`Chat on WhatsApp with Pawar Constructions at ${companyData.contact.whatsapp}`}
                >
                  <MessageCircle size={20} />
                  <span className="whatsapp-btn-text">
                    Chat on WhatsApp: <strong>{companyData.contact.whatsapp}</strong>
                  </span>
                </a>
              </div>

              {/* Quality & NDA Assurance Badge */}
              <div className="contact-assurance-pill">
                <ShieldCheck size={20} className="assurance-icon" />
                <span>
                  All initial architectural reviews, BOQs, and site surveys are conducted under strict non-disclosure terms.
                </span>
              </div>

            </div>

            {/* RIGHT COLUMN: Professional Enquiry Form */}
            <div className="contact-form-column">
              <ContactForm 
                title="Request a Construction Consultation"
                subtitle="Fill out the project scope below. Our engineering estimation desk will evaluate your requirements and contact you within 24 business hours."
              />
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Placeholder Section */}
      <section className="section theme-offwhite" style={{ borderTop: '1px solid var(--border-light)', paddingTop: '60px', paddingBottom: '70px' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px' }}>
            <span className="badge-pill" style={{ marginBottom: '10px' }}>
              Corporate Map
            </span>
            <h2 style={{ fontSize: '2rem', marginBottom: '12px', color: 'var(--color-text-title)' }}>
              Google Maps Location
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
              Centrally accessible for corporate consultations, client meetings, vendor qualifications, and statutory documentation reviews.
            </p>
          </div>

          {/* Interactive-Feel Map Container */}
          <div className="google-map-placeholder-box">
            
            {/* Map Graphical Grid / Canvas */}
            <div className="map-canvas-visual" aria-hidden="true">
              <div className="map-road road-h-1" />
              <div className="map-road road-h-2" />
              <div className="map-road road-v-1" />
              <div className="map-road road-v-2" />
              <div className="map-river" />

              {/* Pulsing Pin Marker */}
              <div className="map-pin-marker">
                <div className="pin-pulse" />
                <div className="pin-head">
                  <Building size={16} />
                </div>
                <div className="pin-tooltip">
                  <strong>PAWAR CONSTRUCTIONS</strong>
                  <span>Corporate Headquarters</span>
                </div>
              </div>

              {/* Compass Indicator */}
              <div className="map-compass-badge">
                <Compass size={18} />
                <span>N</span>
              </div>
            </div>

            {/* Map Overlay Card */}
            <div className="map-details-overlay">
              <div className="overlay-header">
                <div className="overlay-badge">Verified Location</div>
                <h3 className="overlay-title">PAWAR CONSTRUCTIONS PVT. LTD.</h3>
                <p className="overlay-address">
                  {companyData.contact.address}
                </p>
                {companyData.contact.landmark && (
                  <p className="overlay-landmark">
                    Landmark: {companyData.contact.landmark}
                  </p>
                )}
              </div>

              <div className="overlay-timing-row">
                <Clock size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>Open: {companyData.contact.workingHours}</span>
              </div>

              <div className="overlay-actions">
                <a
                  href={`https://maps.google.com/?q=Pawar+Constructions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <ExternalLink size={14} />
                  <span>Get Directions</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  {copied ? (
                    <>
                      <Check size={14} style={{ color: '#16A34A' }} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Emergency & Site Safety Desk Banner */}
      <section className="section theme-charcoal">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="badge-pill dark" style={{ marginBottom: '12px' }}>
              Active Project Sites
            </span>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.9rem', marginBottom: '8px' }}>
              24/7 Site Safety & Emergency Coordination
            </h2>
            <p style={{ color: '#CBD5E1', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
              For active project sites, concrete batch delivery updates, or emergency site escalations, our operations dispatch desk operates around the clock.
            </p>
          </div>
          <div className="emergency-contact-box">
            <span className="emergency-label">Dispatch Desk:</span>
            <span className="emergency-number">{companyData.contact.emergencySupport}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
