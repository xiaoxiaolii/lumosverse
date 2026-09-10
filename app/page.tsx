/* oxlint-disable next/no-html-link-for-pages -- Sites requires full document navigation for reliable cross-page links. */
import Cinematic from './cinematic';
import BrandLogo from './brand-logo';

export function Logo(){return <BrandLogo/>}
export function Header(){return <header className="nav"><BrandLogo/><nav aria-label="Main navigation"><a href="/creators">For Creators</a><a href="/how-it-works">How It Works</a><a href="/about">About</a></nav><a className="contact-link" href="mailto:info@lumosverse.io?subject=Lumosverse%20Inquiry">Get in Touch <span>↗</span></a></header>}
export default function Home(){return <Cinematic/>}
