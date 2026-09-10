import type { Metadata } from 'next';
import { Header } from '../page';
import { Footer } from '../sections';

const linkedinUrl = 'https://www.linkedin.com/company/143783898/';

export const metadata: Metadata = {
  title: 'Lumosverse Organization — Company Information',
  description:
    'Official company information and profiles for Lumosverse, a creator-first story distribution platform.',
  alternates: { canonical: '/organization' },
};

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://lumosverse.io/#organization',
  name: 'Lumosverse',
  legalName: 'Lumosverse Inc.',
  url: 'https://lumosverse.io',
  logo: 'https://lumosverse.io/brand/favicon-light.png',
  email: 'info@lumosverse.io',
  description:
    'A creator-first content distribution platform helping meaningful stories reach the audiences who value them.',
  sameAs: [linkedinUrl],
};

export default function Organization() {
  return (
    <>
      <Header />
      <main className="organization-page wrap">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <section className="organization-intro">
          <p className="eyebrow">COMPANY INFORMATION</p>
          <h1>Lumosverse Inc.</h1>
          <p className="intro">
            Lumosverse is a creator-first content distribution platform built
            to help meaningful stories reach the audiences who value them.
          </p>
        </section>
        <dl className="organization-details">
          <div><dt>Organization</dt><dd>Lumosverse Inc.</dd></div>
          <div><dt>Focus</dt><dd>Story distribution · Creator community · Audience connection</dd></div>
          <div><dt>Website</dt><dd><a href="https://lumosverse.io">lumosverse.io ↗</a></dd></div>
          <div><dt>Contact</dt><dd><a href="mailto:info@lumosverse.io">info@lumosverse.io ↗</a></dd></div>
          <div><dt>LinkedIn</dt><dd><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">Company page ↗</a></dd></div>
        </dl>
      </main>
      <Footer />
    </>
  );
}
