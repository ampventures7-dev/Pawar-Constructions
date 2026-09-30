import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable SEO Component
 * Dynamically updates:
 * - document.title
 * - meta description
 * - canonical URL tag
 * - Open Graph tags (og:title, og:description, og:url, og:image, og:type)
 * - Twitter Card tags
 * - Optional page-level JSON-LD structured data
 */
export default function SEO({
  title = "Pawar Constructions | Quality Construction Services",
  description = "Pawar Constructions delivers dependable construction solutions with a focus on quality, safety and customer satisfaction.",
  canonicalPath,
  ogImage = "/images/hero-bg.jpg",
  ogType = "website",
  structuredData,
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create a meta tag
    const setMetaTag = (attribute, name, content) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Description
    setMetaTag('name', 'description', description);

    // 3. Canonical URL
    const fullCanonicalUrl = `${window.location.origin}${canonicalPath || location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', `${window.location.origin}${ogImage}`);
    setMetaTag('property', 'og:site_name', 'PAWAR CONSTRUCTIONS');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', `${window.location.origin}${ogImage}`);

    // 6. Structured Data Injection (if specified)
    let scriptElement = document.getElementById('page-structured-data');
    if (structuredData) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'page-structured-data';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, canonicalPath, ogImage, ogType, structuredData, location.pathname]);

  return null;
}
