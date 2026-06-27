import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

// ==========================================
// BUTTON COMPONENT
// ==========================================
interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const buttonStyles: Record<string, React.CSSProperties> = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: 600,
    borderRadius: 'var(--radius-full)',
    cursor: 'pointer',
    transition: 'var(--transition)',
    border: '2px solid transparent',
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
    letterSpacing: '0.01em',
  },
};

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  disabled,
  loading,
  type = 'button',
  fullWidth,
  style,
}: ButtonProps) {
  const sizeMap = {
    sm: { padding: '0.4rem 1rem', fontSize: '0.85rem' },
    md: { padding: '0.65rem 1.5rem', fontSize: '0.95rem' },
    lg: { padding: '0.85rem 2rem', fontSize: '1rem' },
  };

  const variantMap: Record<string, React.CSSProperties> = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-white)',
      boxShadow: 'var(--shadow-blue)',
    },
    secondary: {
      background: 'var(--color-secondary)',
      color: 'var(--color-white)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-primary)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
    },
  };

  const computedStyle: React.CSSProperties = {
    ...buttonStyles.base,
    ...sizeMap[size],
    ...variantMap[variant],
    width: fullWidth ? '100%' : undefined,
    opacity: disabled || loading ? 0.7 : 1,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    ...style,
  };

  const content = loading ? (
    <>
      <span
        style={{
          width: '1em',
          height: '1em',
          border: '2px solid currentColor',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          display: 'inline-block',
          animation: 'spin 0.7s linear infinite',
        }}
      />
      Procesando...
    </>
  ) : (
    children
  );

  if (href && !disabled) {
    return (
      <Link href={href} style={computedStyle}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={computedStyle}
    >
      {content}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </button>
  );
}

// ==========================================
// SECTION TITLE COMPONENT
// ==========================================
interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ tag, title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '2.5rem' }}>
      {tag && (
        <span
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            background: 'var(--color-primary-light)',
            color: 'var(--color-primary)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          {tag}
        </span>
      )}
      <h2
        style={{
          marginBottom: subtitle ? '0.75rem' : 0,
          color: 'var(--color-gray-900)',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-gray-500)',
            maxWidth: '600px',
            margin: centered ? '0 auto' : '0',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ==========================================
// CARD COMPONENT
// ==========================================
interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: string;
  style?: React.CSSProperties;
}

export function Card({ children, hover = true, padding = '1.75rem', style }: CardProps) {
  return (
    <div
      className={hover ? 'card-hover' : ''}
      style={{
        background: 'var(--color-white)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)',
        padding,
        border: '1px solid var(--color-gray-100)',
        transition: 'var(--transition-slow)',
        ...style,
      }}
    >
      {children}
      <style>{`
        .card-hover:hover {
          box-shadow: var(--shadow-lg) !important;
          transform: translateY(-3px);
          border-color: var(--color-primary-light) !important;
        }
      `}</style>
    </div>
  );
}
