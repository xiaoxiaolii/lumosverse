import { Header } from '../page';
import { Footer, Contact } from '../sections';
const steps = [
  ['CREATE', 'Publish your story.'],
  [
    'DISTRIBUTE',
    'Make it available through a more open distribution ecosystem.',
  ],
  ['CONNECT', 'Reach audiences and turn discovery into genuine connection.'],
  [
    'ENGAGE',
    'Give fans access to exclusive content, digital ownership, and experiences.',
  ],
  [
    'EARN',
    'Receive transparent, real-time rewards while retaining more of the value you create.',
  ],
];
export const metadata = {
  title: 'How Lumosverse Works — Story Distribution and Community',
  description:
    'See how Lumosverse connects stories with audiences through open distribution, digital ownership, and direct creator rewards.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'How Lumosverse Works — Story Distribution and Community',
    description:
      'See how Lumosverse connects stories with audiences through open distribution, digital ownership, and direct creator rewards.',
    url: '/how-it-works',
  },
};
export default function How() {
  return (
    <>
      <Header />
      <main>
        <section className="detail-hero wrap">
          <p className="eyebrow">HOW IT WORKS</p>
          <h1>
            From your story
            <br />
            to <em>your people.</em>
          </h1>
          <p className="intro">
            Creator → Story → Lumosverse → Audience → Superfan → Creator. A
            cycle that brings the value of a story back to the person who
            created it.
          </p>
        </section>
        <section className="section wrap">
          <div className="detail-rows">
            {steps.map(([title, copy], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section wrap">
          <p className="eyebrow">THE UNDERLYING MECHANISMS</p>
          <h2>
            Open distribution.
            <br />
            <em>More direct participation.</em>
          </h2>
          <div className="mechanisms">
            {[
              [
                'Decentralized distribution',
                'Make stories available through a more open distribution ecosystem.',
              ],
              [
                'Tokenized payouts',
                'Connect creator rewards with transparent, real-time payouts.',
              ],
              [
                'Digital ownership',
                'Give fans ways to collect and participate in the stories they value.',
              ],
              [
                'Superfan experiences',
                'Build deeper connections through exclusive content and experiences.',
              ],
            ].map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
