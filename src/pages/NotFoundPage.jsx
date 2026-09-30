import React from 'react';
import PageHero from '../components/common/PageHero';
import CTAButton from '../components/common/CTAButton';
import SEO from '../components/common/SEO';
import { AlertTriangle, Home } from 'lucide-react';

/**
 * NotFoundPage Component
 * 404 error boundary fallback displaying clear guidance and button back to homepage.
 */
export default function NotFoundPage() {
  return (
    <div>
      <SEO
        title="404 - Page Not Found | Pawar Constructions"
        description="The requested page could not be found on the Pawar Constructions portal."
      />
      <PageHero
        badge="404 Error"
        title="Page Not Found"
        subtitle="The page you requested could not be located on the PAWAR CONSTRUCTIONS portal."
        breadcrumbs={[{ label: '404' }]}
      />

      <section className="section theme-light" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-light)',
            color: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}>
            <AlertTriangle size={32} />
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Requested Page Does Not Exist</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
            The link you followed may be incorrect, broken, or the content has moved to another section of our architecture.
          </p>
          <CTAButton to="/" variant="primary" size="md" icon={<Home size={16} />}>
            Return to Homepage
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
