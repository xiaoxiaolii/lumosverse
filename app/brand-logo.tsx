import Link from 'next/link';
import Image from 'next/image';

export default function BrandLogo({
  className = 'logo',
  whiteBackground = false,
}: {
  className?: string;
  whiteBackground?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`${className}${whiteBackground ? ' brand-logo-white' : ''}`}
      aria-label="Return to Lumosverse home"
    >
      <Image
        className="brand-wordmark"
        src={whiteBackground
          ? '/brand/lumosverse-wordmark-dark.png'
          : '/brand/lumosverse-wordmark-light.png'}
        alt=""
        width={1400}
        height={269}
        priority
      />
    </Link>
  );
}
