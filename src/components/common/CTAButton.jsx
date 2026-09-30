import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable Call-To-Action Button
 * Supports router links, external links, and standard buttons with diverse visual variants.
 */
export default function CTAButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const buttonClasses = `cta-button btn-${variant} btn-${size} ${className}`.trim();
  
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        typeof icon === 'boolean' ? <ArrowRight size={size === 'lg' ? 18 : 16} /> : icon
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
