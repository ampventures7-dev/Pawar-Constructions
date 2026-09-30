import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, Shield, AlertCircle, RefreshCw } from 'lucide-react';

/**
 * Professional Contact & Project Enquiry Form Component
 * Supported fields:
 * - Name
 * - Email
 * - Phone
 * - Project Type
 * - Project Location
 * - Budget Range
 * - Message
 * Button: "Send Enquiry"
 * 
 * Features:
 * - Real-time and on-submit validation
 * - Clear inline error messages with icons
 * - Required field indicators
 * - Reassuring success state with submitted summary
 * - Mobile responsive grid layout
 */
export default function ContactForm({
  title = "Project Enquiry & Consultation",
  subtitle = "Complete the details below. Our civil engineering and estimation desk will evaluate your requirements and contact you within 24 hours.",
}) {
  const [searchParams] = useSearchParams();

  // Helper to infer project type from query parameters upon initial mount
  const getInitialProjectType = () => {
    const serviceParam = searchParams.get('service');
    const projectParam = searchParams.get('project');

    if (serviceParam || projectParam) {
      const queryStr = (serviceParam || projectParam).toLowerCase();
      if (queryStr.includes('commercial')) return 'Commercial Construction';
      if (queryStr.includes('residential')) return 'Residential Construction';
      if (queryStr.includes('industrial')) return 'Industrial Construction';
      if (queryStr.includes('civil') || queryStr.includes('infrastructure')) return 'Civil Infrastructure';
      if (queryStr.includes('renovation')) return 'Renovation & Remodeling';
    }
    return '';
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: getInitialProjectType(),
    projectLocation: '',
    budgetRange: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Validation function
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';

      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address (e.g. name@domain.com).';
        }
        return '';

      case 'phone':
        if (!value.trim()) return 'Phone number is required.';
        // Allows digits, optional leading +, dashes, spaces, min 10 digits
        if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/.test(value.trim())) {
          return 'Please enter a valid phone number (minimum 10 digits).';
        }
        return '';

      case 'projectType':
        if (!value) return 'Please select a project type.';
        return '';

      case 'projectLocation':
        if (!value.trim()) return 'Proposed project location is required.';
        return '';

      case 'budgetRange':
        if (!value) return 'Please select an estimated budget range.';
        return '';

      case 'message':
        if (!value.trim()) return 'Project details or message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';

      default:
        return '';
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If field was already touched, validate on keystroke
    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = {
      name: true,
      email: true,
      phone: true,
      projectType: true,
      projectLocation: true,
      budgetRange: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) newErrors[field] = errorMsg;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus first error field
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) element.focus();
      return;
    }

    // Submit valid data
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      projectLocation: '',
      budgetRange: '',
      message: '',
    });
    setErrors({});
    setTouched({});
    setSubmittedData(null);
  };

  // Success Confirmation State
  if (submittedData) {
    return (
      <div className="contact-form-card success-card" role="alert" aria-live="polite">
        <div className="success-icon-wrapper">
          <CheckCircle2 size={44} className="success-check-icon" />
        </div>
        <h3 className="success-title">Enquiry Received Successfully!</h3>
        <p className="success-message">
          Thank you, <strong>{submittedData.name}</strong>. Your construction enquiry for{' '}
          <strong>{submittedData.projectType}</strong> at <strong>{submittedData.projectLocation}</strong> has been
          logged with our engineering estimation desk.
        </p>

        <div className="submitted-summary-box">
          <div className="summary-row">
            <span className="summary-lbl">Primary Contact:</span>
            <span className="summary-val">{submittedData.phone} | {submittedData.email}</span>
          </div>
          <div className="summary-row">
            <span className="summary-lbl">Project Category:</span>
            <span className="summary-val">{submittedData.projectType}</span>
          </div>
          <div className="summary-row">
            <span className="summary-lbl">Target Budget:</span>
            <span className="summary-val">{submittedData.budgetRange}</span>
          </div>
          <div className="summary-row">
            <span className="summary-lbl">Response Target:</span>
            <span className="summary-val" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              Within 24 Business Hours
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="cta-button btn-outline btn-md"
          style={{ margin: '0 auto' }}
        >
          <RefreshCw size={15} />
          <span>Send Another Enquiry</span>
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <div className="form-card-header">
        <h3 className="form-title">{title}</h3>
        <p className="form-subtitle">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="enquiry-form">
        {/* Row 1: Name & Phone */}
        <div className="form-grid-2">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name <span className="req-asterisk">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${touched.name && errors.name ? 'input-error' : ''}`}
              placeholder="e.g. Rajesh Pawar"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={Boolean(touched.name && errors.name)}
              aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
            />
            {touched.name && errors.name && (
              <span className="field-error-msg" id="name-error">
                <AlertCircle size={13} />
                <span>{errors.name}</span>
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="req-asterisk">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`form-input ${touched.phone && errors.phone ? 'input-error' : ''}`}
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={Boolean(touched.phone && errors.phone)}
              aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
            />
            {touched.phone && errors.phone && (
              <span className="field-error-msg" id="phone-error">
                <AlertCircle size={13} />
                <span>{errors.phone}</span>
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Email & Project Type */}
        <div className="form-grid-2">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span className="req-asterisk">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${touched.email && errors.email ? 'input-error' : ''}`}
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={Boolean(touched.email && errors.email)}
              aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
            />
            {touched.email && errors.email && (
              <span className="field-error-msg" id="email-error">
                <AlertCircle size={13} />
                <span>{errors.email}</span>
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="projectType" className="form-label">
              Project Type <span className="req-asterisk">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              className={`form-select ${touched.projectType && errors.projectType ? 'input-error' : ''}`}
              value={formData.projectType}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={Boolean(touched.projectType && errors.projectType)}
              aria-describedby={touched.projectType && errors.projectType ? 'projectType-error' : undefined}
            >
              <option value="">-- Select Project Type --</option>
              <option value="Residential Construction">Residential Construction</option>
              <option value="Commercial Construction">Commercial Construction</option>
              <option value="Industrial Construction">Industrial Construction</option>
              <option value="Civil Infrastructure">Civil Infrastructure & Roads</option>
              <option value="Renovation & Remodeling">Renovation & Structural Retrofit</option>
              <option value="Turnkey EPC Project">Turnkey EPC General Contracting</option>
              <option value="Other Construction Inquiry">Other Construction Inquiry</option>
            </select>
            {touched.projectType && errors.projectType && (
              <span className="field-error-msg" id="projectType-error">
                <AlertCircle size={13} />
                <span>{errors.projectType}</span>
              </span>
            )}
          </div>
        </div>

        {/* Row 3: Project Location & Budget Range */}
        <div className="form-grid-2">
          <div className="form-group">
            <label htmlFor="projectLocation" className="form-label">
              Project Location <span className="req-asterisk">*</span>
            </label>
            <input
              type="text"
              id="projectLocation"
              name="projectLocation"
              className={`form-input ${touched.projectLocation && errors.projectLocation ? 'input-error' : ''}`}
              placeholder="e.g. Tech Zone Phase 2, Pune"
              value={formData.projectLocation}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={Boolean(touched.projectLocation && errors.projectLocation)}
              aria-describedby={touched.projectLocation && errors.projectLocation ? 'projectLocation-error' : undefined}
            />
            {touched.projectLocation && errors.projectLocation && (
              <span className="field-error-msg" id="projectLocation-error">
                <AlertCircle size={13} />
                <span>{errors.projectLocation}</span>
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="budgetRange" className="form-label">
              Budget Range <span className="req-asterisk">*</span>
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              className={`form-select ${touched.budgetRange && errors.budgetRange ? 'input-error' : ''}`}
              value={formData.budgetRange}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={Boolean(touched.budgetRange && errors.budgetRange)}
              aria-describedby={touched.budgetRange && errors.budgetRange ? 'budgetRange-error' : undefined}
            >
              <option value="">-- Select Budget Range --</option>
              <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
              <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
              <option value="₹1 Crore - ₹5 Crores">₹1 Crore - ₹5 Crores</option>
              <option value="₹5 Crores - ₹20 Crores">₹5 Crores - ₹20 Crores</option>
              <option value="₹20+ Crores">₹20+ Crores (Large-Scale / Institutional)</option>
              <option value="Flexible / Needs Consultation">Flexible / Needs Consultation</option>
            </select>
            {touched.budgetRange && errors.budgetRange && (
              <span className="field-error-msg" id="budgetRange-error">
                <AlertCircle size={13} />
                <span>{errors.budgetRange}</span>
              </span>
            )}
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message <span className="req-asterisk">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`form-textarea ${touched.message && errors.message ? 'input-error' : ''}`}
            placeholder="Tell us about your project scale (approx. area in sq. ft., target completion date, architectural blueprints ready or needed, site condition)..."
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={Boolean(touched.message && errors.message)}
            aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
          />
          {touched.message && errors.message && (
            <span className="field-error-msg" id="message-error">
              <AlertCircle size={13} />
              <span>{errors.message}</span>
            </span>
          )}
        </div>

        {/* Submit Button: Exact text "Send Enquiry" */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="cta-button btn-primary btn-lg" 
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {isSubmitting ? (
            <>
              <RefreshCw size={18} className="spin-animation" />
              <span>Processing Enquiry...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Send Enquiry</span>
            </>
          )}
        </button>

        <p className="form-security-note">
          <Shield size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          <span>
            Confidentiality Guaranteed: All plans and estimates are handled under strict NDA protocols. Zero hidden fees.
          </span>
        </p>
      </form>
    </div>
  );
}
