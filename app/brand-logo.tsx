'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BrandLogo({ className = 'logo' }: { className?: string }) {
  return (
    <Link
      href="/"
      prefetch={false}
      className={className}
      aria-label="Return to Lumosverse home"
      onClick={(event) => {
        event.preventDefault();
        window.location.assign('/');
      }}
    >
      <Image
        className="brand-wordmark"
        src="/brand/lumosverse-wordmark-light.png"
        alt="Lumosverse"
        width={1400}
        height={269}
        sizes="(max-width: 800px) 185px, 220px"
        priority
      />
    </Link>
  );
}
