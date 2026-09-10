import Link from 'next/link';
import Image from 'next/image';

export default function BrandLogo({ className = 'logo' }: { className?: string }) {
  return (
    <Link href="/" className={className} aria-label="Lumosverse home">
      <Image
        className="brand-wordmark"
        src="/brand/lumosverse-wordmark-light.png"
        alt=""
        width={1400}
        height={269}
        priority
      />
    </Link>
  );
}
