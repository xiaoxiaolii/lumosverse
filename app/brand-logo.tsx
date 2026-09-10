/* oxlint-disable next/no-html-link-for-pages -- Sites requires full document navigation for reliable cross-page links. */
import Image from 'next/image';

export default function BrandLogo({ className = 'logo' }: { className?: string }) {
  return (
    <a
      href="/"
      className={className}
      aria-label="Return to Lumosverse home"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        width: className.includes('cinema-logo')
          ? 'min(220px, 43vw)'
          : 'min(212px, 42vw)',
      }}
    >
      <Image
        className="brand-wordmark"
        src="/brand/lumosverse-wordmark-light.png"
        alt="Lumosverse"
        width={440}
        height={84}
        style={{ display: 'block', width: '100%', height: 'auto' }}
        sizes="(max-width: 800px) 185px, 220px"
        priority
      />
    </a>
  );
}
