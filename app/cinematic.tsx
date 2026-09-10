'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  Pause,
  Play,
  Sparkles,
  Globe2,
  Users,
} from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import BrandLogo from './brand-logo';
const videoUrl =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4';
const scenes = [
  {
    label: 'THE MISSION',
    title: (
      <>
        Every story deserves
        <br />
        its audience.
      </>
    ),
    description: '',
    meta: [
      'Creator-first',
      'Stories without boundaries',
      'Made for connection',
    ],
    cta: 'Discover Lumosverse',
    href: null,
    secondary: 'For Creators',
    secondaryHref: '/creators',
  },
  {
    label: 'THE PLATFORM',
    title: (
      <>
        Your story.
        <br />A world of possibilities.
      </>
    ),
    description: '',
    meta: ['Find your audience', 'Build your community', 'Keep more value'],
    cta: 'See How It Works',
    href: '/how-it-works',
    secondary: 'For Creators',
    secondaryHref: '/creators',
  },
  {
    label: 'THE IMPACT',
    title: (
      <>
        Built from zero.
        <br />
        Made real, together.
      </>
    ),
    description: '',
    meta: [
      '10K+ monthly uploads',
      '20K new sign-ups',
      '60% higher creator retention',
    ],
    cta: 'Explore Our Story',
    href: '/about',
    secondary: 'Get in Touch',
    secondaryHref: 'mailto:info@lumosverse.io',
  },
];
const links = [
  ['For Creators', '/creators'],
  ['How It Works', '/how-it-works'],
  ['About', '/about'],
];
export default function Cinematic() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [menu, setMenu] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const scene = scenes[current];
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (reduced.matches) {
        el.pause();
        setPaused(true);
      } else {
        el.play().catch(() => setPaused(true));
      }
    };
    sync();
    reduced.addEventListener('change', sync);
    return () => reduced.removeEventListener('change', sync);
  }, []);
  const move = (direction: number) =>
    setCurrent((i) => (i + direction + scenes.length) % scenes.length);
  const toggle = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) {
      el.play()
        .then(() => setPaused(false))
        .catch(() => setFailed(true));
    } else {
      el.pause();
      setPaused(true);
    }
  };
  return (
    <div className="cinema">
      <video
        ref={video}
        className="cinema-video"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onError={() => setFailed(true)}
        onPause={() => setPaused(true)}
        onPlay={() => setPaused(false)}
      />
      <div className="cinema-blur" aria-hidden="true" />
      <header className="cinema-nav">
        <BrandLogo
          className="cinema-logo animate-blur-fade-up"
          whiteBackground
        />
        <nav aria-label="Main navigation" className="cinema-desktop-nav">
          {links.map(([label, href], i) => (
            <Link
              key={href}
              href={href}
              className="animate-blur-fade-up"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="cinema-nav-actions">
          <a
            href="mailto:info@lumosverse.io"
            className="liquid-glass cinema-pill nav-contact animate-blur-fade-up"
            style={{ animationDelay: '350ms' }}
          >
            Get in Touch <ArrowUpRight size={17} />
          </a>
          <Sheet open={menu} onOpenChange={setMenu}>
            <SheetTrigger
              className="liquid-glass cinema-round cinema-menu-button"
              aria-label="Open navigation"
            >
              <Menu size={20} />
            </SheetTrigger>
            <SheetContent side="top" className="cinema-mobile-menu">
              <SheetTitle className="text-white">LUMOSVERSE</SheetTitle>
              <SheetDescription className="sr-only">
                Explore Lumosverse and contact the team.
              </SheetDescription>
              <nav aria-label="Mobile navigation">
                {links.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMenu(false)}>
                    {label}
                    <ArrowUpRight size={17} />
                  </Link>
                ))}
                <a href="mailto:info@lumosverse.io">
                  Get in Touch
                  <ArrowUpRight size={17} />
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main
        className="cinema-main"
        aria-roledescription="carousel"
        aria-label="The Lumosverse story"
      >
        <div className="cinema-body">
          <section
            className="cinema-copy"
            key={current}
            aria-live="polite"
            aria-atomic="true"
          >
            <div
              className="cinema-meta animate-blur-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              {scene.meta.map((item, i) => {
                const Icon = [Sparkles, Globe2, Users][i];
                return (
                  <span key={item}>
                    <Icon size={16} />
                    {item}
                  </span>
                );
              })}
            </div>
            <p
              className="cinema-eyebrow animate-blur-fade-up"
              style={{ animationDelay: '180ms' }}
            >
              A CREATOR-FIRST CONTENT DISTRIBUTION PLATFORM
            </p>
            <h1
              className="animate-blur-fade-up"
              style={{ animationDelay: '250ms' }}
            >
              {scene.title}
            </h1>
            {scene.description && (
              <p
                className="cinema-description animate-blur-fade-up"
                style={{ animationDelay: '350ms' }}
              >
                {scene.description}
              </p>
            )}
            <div className="cinema-ctas">
              <a
                href={scene.href ?? '#platform'}
                onClick={
                  scene.href
                    ? undefined
                    : (event) => {
                        event.preventDefault();
                        setCurrent(1);
                      }
                }
                className="cinema-pill cinema-primary animate-blur-fade-up"
                style={{ animationDelay: '450ms' }}
              >
                <ArrowRight size={18} />
                {scene.cta}
              </a>
              <a
                href={scene.secondaryHref}
                className="cinema-pill liquid-glass animate-blur-fade-up"
                style={{ animationDelay: '550ms' }}
              >
                {scene.secondary}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </section>
          <div
            className="cinema-controls animate-blur-fade-up"
            style={{ animationDelay: '650ms' }}
          >
            <div className="cinema-pagination">
              <span>0{current + 1}</span>
              <span className="cinema-pagination-line" />
              <span>03</span>
            </div>
            <div className="cinema-arrows">
              <button
                className="cinema-pill liquid-glass"
                onClick={() => move(-1)}
                aria-label="Previous chapter"
              >
                <ChevronLeft size={18} />
                <span>Previous</span>
              </button>
              <button
                className="cinema-pill liquid-glass"
                onClick={() => move(1)}
                aria-label="Next chapter"
              >
                <span>Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="cinema-bottom">
          <div className="cinema-chapters" aria-label="Choose a chapter">
            {scenes.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setCurrent(i)}
                className={current === i ? 'selected' : ''}
                aria-pressed={current === i}
              >
                <span>0{i + 1}</span>
                {s.label}
                <i />
              </button>
            ))}
          </div>
          <div className="cinema-film-controls">
            {failed ? (
              <span className="cinema-video-error">Video unavailable</span>
            ) : (
              <button
                className="liquid-glass cinema-round"
                onClick={toggle}
                aria-label={
                  paused ? 'Play background video' : 'Pause background video'
                }
              >
                {paused ? <Play size={16} /> : <Pause size={16} />}
              </button>
            )}
            <a
              href="https://www.linkedin.com/in/zhaoliusc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zhaoli on LinkedIn, opens in a new tab"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
