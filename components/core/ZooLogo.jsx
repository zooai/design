import React from 'react'

/** The Zoo mark (assets/logo.svg), six-color — never re-hued. */
export function ZooLogo({ size = 22, variant = 'white', title = 'Zoo', style, ...rest }) {
  const fill = variant === 'white' ? '#ffffff' : variant === 'black' ? 'var(--zoo-black)' : 'currentColor'
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title} style={{ display: 'block', flexShrink: 0, ...style }} {...rest}>
      <path d="M10 10H14L16 16L18 10H22" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M10 22H22" stroke={fill} stroke-width="2" stroke-linecap="round" fill="none"></path><circle cx="16" cy="16" r="12" stroke={fill} stroke-width="1" stroke-opacity="0.2" fill="none"></circle>
    </svg>
  )
}

/** Mark + wordmark lockup, as used in the nav and footer. */
export function ZooWordmark({ size = 22, label = 'Zoo Labs Foundation', variant = 'white', style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...style }}>
      <ZooLogo size={size} variant={variant} />
      <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)' }}>{label}</span>
    </span>
  )
}
