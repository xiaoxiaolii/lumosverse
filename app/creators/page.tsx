import { Header } from '../page';
import { Footer, Contact, pillars } from '../sections';
export const metadata = {
  title: 'For Creators — Lumosverse',
  description:
    'Find your audience, build your community, and keep more of the value you create with Lumosverse.',
  alternates: { canonical: '/creators' },
};
export default function Creators() {
  return (
    <>
      <Header />
      <main>
        <section className="detail-hero wrap">
          <p className="eyebrow">FOR CREATORS</p>
          <h1>
            Your story.
            <br />
            Your community.
            <br />
            <em>More of the value.</em>
          </h1>
        </section>
        <section className="section wrap">
          <p className="eyebrow">BUILT AROUND YOU</p>
          <div className="detail-rows">
            {pillars.map(([title, copy], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section wrap creator-note">
          <p className="eyebrow">A DEEPER CONNECTION</p>
          <h2>
            Give your audience
            <br />a reason to become <em>superfans.</em>
          </h2>
          <p className="intro">
            Exclusive content, digital ownership, and participatory experiences
            open up new ways for people to connect with the stories they love.
          </p>
          <a className="text-link underlined" href="/how-it-works">
            Explore how it works ↗
          </a>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
