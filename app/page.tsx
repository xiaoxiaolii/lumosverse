import Link from 'next/link';
import Cinematic from './cinematic';
import LogoMark from './logo-mark';

export function Logo(){return <Link href="/" className="logo" aria-label="Lumosverse home"><LogoMark/>LUMOSVERSE</Link>}
export function Header(){return <header className="nav"><Logo/><nav aria-label="Main navigation"><Link href="/creators">For Creators</Link><Link href="/how-it-works">How It Works</Link><Link href="/about">About</Link></nav><a className="contact-link" href="mailto:info@lumosverse.io">Get in Touch <span>↗</span></a></header>}
export default function Home(){return <Cinematic/>}
