import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/blog/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Understanding SIF: Serious Injury and Fatality — Safety Studio',
  description:
    'Why traditional frequency metrics like LTIF miss the most dangerous events — and how SIF thinking helps organizations identify and manage what could kill someone.',
  openGraph: {
    title: 'Understanding SIF: Serious Injury and Fatality',
    description:
      'Why traditional frequency metrics like LTIF miss the most dangerous events — and how SIF thinking helps organizations identify and manage what could kill someone.',
    type: 'article',
    publishedTime: '2026-03-01T00:00:00Z',
    authors: ['Safety Studio'],
    tags: ['SIF', 'LTIF', 'Risk Management', 'HSE'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding SIF: Serious Injury and Fatality',
    description:
      'Why traditional frequency metrics like LTIF miss the most dangerous events.',
  },
}

function Fn({ n }: { n: number }) {
  return (
    <sup>
      <a
        href={`#fn-${n}`}
        id={`fnref-${n}`}
        className="text-gold hover:text-gold-light transition-colors text-[0.7em] font-medium ml-0.5"
        aria-label={`Footnote ${n}`}
      >
        [{n}]
      </a>
    </sup>
  )
}

const header = (
  <header className="pt-36 pb-12 px-16 max-md:px-6 border-b border-gold/10">
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <a href="/blog/" className="text-muted/70 text-xs tracking-widest uppercase hover:text-gold transition-colors">
          &larr; Blog
        </a>
        <span className="text-muted/40 text-xs">&middot;</span>
        <span className="text-[0.62rem] tracking-[0.15em] uppercase text-gold font-medium border border-gold/30 px-2.5 py-0.5 rounded-sm">
          Risk Management
        </span>
      </div>

      <h1 className="font-display font-light text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.15] text-cream mb-5">
        When LTIF Doesn&apos;t Tell the Whole Story: Understanding Serious Injury and Fatality (SIF)
      </h1>

      <div className="flex items-center gap-4 text-muted/70 text-xs tracking-wide">
        <span>Safety Studio</span>
        <span className="text-muted/40">&middot;</span>
        <span>March 2026</span>
        <span className="text-muted/40">&middot;</span>
        <span>7 min read</span>
      </div>
    </div>
  </header>
)

const cta = (
  <div className="px-16 max-md:px-6 pb-24 max-w-2xl">
    <div className="border border-gold/15 rounded-sm px-8 py-6 flex flex-wrap items-center justify-between gap-6 bg-navy-mid/40">
      <div>
        <div className="text-cream font-medium text-sm mb-1">Assess your site&apos;s SIF exposure</div>
        <div className="text-muted text-xs font-light">
          Use our free Incident Rate Calculator to benchmark your LTIF &amp; TRCF against industry averages.
        </div>
      </div>
      <a
        href="/#tools"
        className="text-gold text-[0.75rem] tracking-widest uppercase border border-gold/50 px-5 py-2.5 rounded-sm hover:bg-gold hover:text-navy transition-colors duration-300 whitespace-nowrap"
      >
        Open Calculator
      </a>
    </div>
  </div>
)

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "When LTIF Doesn't Tell the Whole Story: Understanding Serious Injury and Fatality (SIF)",
  datePublished: '2026-03-01',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'Safety Studio', url: 'https://safetystudio.net' },
  publisher: { '@type': 'Organization', name: 'Safety Studio', url: 'https://safetystudio.net' },
  description:
    'Why traditional frequency metrics like LTIF miss the most dangerous events — and how SIF thinking helps organizations identify and manage what could kill someone.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://safetystudio.net/blog/sif-serious-injury-fatality/',
  },
})

export default function SIFArticle() {
  return (
    <BlogArticleLayout header={header} cta={cta} jsonLd={jsonLd}>

      <p>
        Most safety professionals know the numbers: LTIF, TRCF, near-miss rates. These metrics
        have shaped HSE management for decades, and for good reason — they measure something
        real. But there is a category of workplace event that traditional frequency metrics are
        surprisingly bad at predicting: the ones that kill people.
      </p>

      <p>
        That is where SIF comes in.
      </p>

      <h2 id="what-is-sif" className="font-display font-light text-[1.7rem] text-cream mt-12 mb-2 leading-[1.2]">
        What Is SIF?
      </h2>

      <p>
        SIF stands for Serious Injury and Fatality. It describes workplace events that either
        resulted in — or had the genuine potential to result in — a fatality or a permanently
        disabling injury. The key word is <em className="text-cream not-italic font-normal">potential</em>.
        SIF is not only about outcomes; it is about energy and exposure.
      </p>

      <p>
        Not all incidents carry the same risk of becoming a fatality. Someone spraining a wrist
        while opening a door is an LTIF. Someone falling three metres without fall arrest is also
        an LTIF. The outcomes might look identical on a spreadsheet, but the second one was a
        fatality with a lucky ending. SIF thinking forces us to ask a different question: not
        &ldquo;how many people were hurt?&rdquo; but &ldquo;how close did we come to killing
        someone?&rdquo;
      </p>

      <h2 id="the-triangle-has-a-problem" className="font-display font-light text-[1.7rem] text-cream mt-12 mb-2 leading-[1.2]">
        The Triangle Has a Problem
      </h2>

      <p>
        For decades, safety management leaned on the concept of the safety pyramid — the idea
        that reducing minor incidents reduces serious ones, because they all sit on the same
        hierarchy. Fix the base and the apex takes care of itself.
      </p>

      <p>
        It is an elegant model. It is also, for SIF events, largely wrong.
      </p>

      <p>
        The Campbell Institute (part of the National Safety Council) published research showing
        that reductions in total recordable injury rates do not consistently predict reductions
        in fatalities.<Fn n={1} /> Organizations with declining TRCFs were still killing people.
        The minor incidents at the base of the pyramid often have very different causes and
        precursors than the fatalities at the top — different tasks, different hazard types,
        different control failures.
      </p>

      <p>
        This finding reshuffled how many large organizations think about safety performance. It
        also gave HSE professionals a language to challenge the assumption that good frequency
        numbers mean the organisation is safe from catastrophic events.
      </p>

      <h2 id="sif-precursors" className="font-display font-light text-[1.7rem] text-cream mt-12 mb-2 leading-[1.2]">
        SIF Precursors: Where the Real Work Happens
      </h2>

      <p>
        If SIF events do not follow the same logic as minor incidents, how do you identify
        them before they happen? The answer is the <strong className="text-cream font-medium">SIF
        precursor</strong> — an event, condition, or combination of circumstances that, with a
        slightly different outcome, would have resulted in a fatality or permanent disability.
      </p>

      <p>Common SIF precursors include:</p>

      <ul className="list-none space-y-2 pl-0">
        {[
          'Working at height without adequate fall protection in place',
          'Energy isolation failures — lockout/tagout not completed or bypassed',
          'Line-of-fire exposures — workers in the path of moving plant, vehicles, or released pressure',
          'Confined space entry without continuous atmospheric monitoring',
          'Safety-critical controls that have been overridden or bypassed to maintain production',
        ].map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="w-1 h-1 rounded-full bg-gold mt-[0.7em] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p>
        Research consistently shows that SIF events almost always involve three elements: a
        significant energy source, an exposed worker, and an inadequate or failed control.<Fn n={2} />{' '}
        The presence of all three simultaneously is the warning sign. Managing SIF potential
        means auditing these combinations — not counting recordable incidents.
      </p>

      <h2 id="where-sif-happens-most" className="font-display font-light text-[1.7rem] text-cream mt-12 mb-2 leading-[1.2]">
        Where SIF Happens Most
      </h2>

      <p>
        Global data from the International Association of Oil &amp; Gas Producers consistently
        places road transport, falls from height, and struck-by incidents as the leading causes
        of fatalities across the sector.<Fn n={3} /> These are not exotic failure modes — they
        are the same hazards that appear on most sites, every day.
      </p>

      <p>
        What makes SIF analysis valuable is the recognition that these hazard categories are
        present in routine work. Fatal events rarely come from unusual circumstances. They come
        from routine tasks where controls eroded, shortcuts accumulated, or nobody paused to
        ask whether the barriers were actually functioning. The investigation after a fatality
        almost always reveals that the conditions were in place long before the event — the only
        thing that changed was the outcome.
      </p>

      <h2 id="why-good-ltif-can-mislead" className="font-display font-light text-[1.7rem] text-cream mt-12 mb-2 leading-[1.2]">
        Why Good LTIF Numbers Can Mislead You
      </h2>

      <p>
        Here is the uncomfortable reality: a falling LTIF can create a dangerous kind of
        confidence.
      </p>

      <p>
        If your frequency rate has dropped for three consecutive years, the natural response is
        to feel good about performance. But if your SIF-potential events — near-misses involving
        falls from height, vehicle close calls, energy isolation failures — have not been tracked
        or investigated with the same rigour, you may be flying blind on the category of event
        that ends someone&apos;s life.
      </p>

      <p>
        U.S. Bureau of Labor Statistics data consistently shows that fatality rates in many
        industries do not follow the same trend lines as overall injury rates.<Fn n={4} />{' '}
        Industries with improving frequency metrics can still see significant year-on-year
        variation in fatal events. Treating a falling LTIF as proof of safety from catastrophic
        outcomes is one of the more subtle — and dangerous — misreadings of safety data.
      </p>

      <h2 id="practical-steps" className="font-display font-light text-[1.7rem] text-cream mt-12 mb-2 leading-[1.2]">
        Practical Steps for SIF Management
      </h2>

      <p>
        Implementing SIF thinking does not require a complete system overhaul. It starts with
        classification and visibility:
      </p>

      <div className="space-y-5 my-6">
        {[
          {
            n: '01',
            title: 'Classify by SIF potential, not just by outcome',
            body: 'An event should be labelled SIF-potential if it involved a significant energy source and either a failed control or an exposed worker in the line of fire — regardless of whether anyone was hurt. Outcome-based classification hides the most important information.',
          },
          {
            n: '02',
            title: 'Investigate near-misses with SIF potential as vigorously as actual fatalities',
            body: 'Most organisations reserve thorough root cause investigations for events that result in harm. But a near-miss with SIF potential is a free lesson — the same conditions exist, the same controls failed, but this time nobody died. Treat it accordingly.',
          },
          {
            n: '03',
            title: 'Focus leading indicators on SIF precursors',
            body: 'Track how often safety-critical controls are bypassed, how frequently fall protection is inspected versus correctly used, how many times vehicle safety procedures are observed in the field. These tell you far more about catastrophic risk than a recordable count.',
          },
          {
            n: '04',
            title: 'Keep SIF conversations separate from general injury performance reviews',
            body: 'A SIF event at a site with a low LTIF deserves the same attention as one at a site with a poor record. Mixing the two conversations allows good frequency numbers to dilute the urgency of individual high-potential events.',
          },
          {
            n: '05',
            title: 'Engage frontline workers in identifying precursors',
            body: 'The people closest to the work know which shortcuts have become normalised and which tasks feel genuinely dangerous. A regular conversation about what could cause a fatality today is more valuable than any spreadsheet metric.',
          },
        ].map((item) => (
          <div key={item.n} className="flex gap-5 border-l-2 border-gold/25 pl-5 py-1">
            <span className="font-display text-gold/50 text-lg font-light leading-none mt-0.5 flex-shrink-0 w-6">
              {item.n}
            </span>
            <div>
              <div className="text-cream font-medium text-sm mb-1">{item.title}</div>
              <div className="text-muted text-sm font-light leading-[1.75]">{item.body}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 id="the-bottom-line" className="font-display font-light text-[1.7rem] text-cream mt-12 mb-2 leading-[1.2]">
        The Bottom Line
      </h2>

      <p>
        SIF is a shift in lens, not a new set of paperwork. It asks safety professionals to look
        past frequency numbers to the underlying energy hazards and control failures that precede
        fatal events. Organisations that have adopted SIF frameworks — including major energy
        companies and construction contractors — consistently report that it changes how field
        supervisors talk about risk.<Fn n={5} />
      </p>

      <p>
        When the question shifts from &ldquo;did anyone get hurt?&rdquo; to &ldquo;what could
        have killed someone today?&rdquo;, the conversations tend to get more honest.
      </p>

      <p>
        Your LTIF tells you how often people are getting hurt. SIF tells you how close you are
        to the next fatality. Both matter — but they are answering very different questions.
      </p>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent my-14" />

      <section aria-label="Footnotes">
        <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-gold font-medium mb-5">
          References
        </h3>
        <ol className="space-y-3 list-none pl-0">
          {[
            {
              n: 1,
              text: 'Campbell Institute / National Safety Council,',
              title: 'Bridging the Gap: Rethinking Metrics, Serious Injury and Fatality Prevention',
              detail: '2014.',
              url: 'https://www.nsc.org/campbell',
              urlLabel: 'nsc.org/campbell',
            },
            {
              n: 2,
              text: 'Campbell Institute / National Safety Council,',
              title: 'Preventing Serious Injuries and Fatalities: Moving Beyond the Injury Rate',
              detail: '2015.',
              url: 'https://www.nsc.org/campbell',
              urlLabel: 'nsc.org/campbell',
            },
            {
              n: 3,
              text: 'IOGP,',
              title: 'Safety Performance Indicators — 2022 Data',
              detail: 'Report 2023s.',
              url: 'https://www.iogp.org/bookstore/product/safety-performance-indicators-2022-data/',
              urlLabel: 'iogp.org',
            },
            {
              n: 4,
              text: 'U.S. Bureau of Labor Statistics,',
              title: 'National Census of Fatal Occupational Injuries',
              detail: 'Published annually.',
              url: 'https://www.bls.gov/iif/oshcfoi1.htm',
              urlLabel: 'bls.gov/iif',
            },
            {
              n: 5,
              text: 'Conklin, T.,',
              title: 'Pre-Accident Investigations: An Introduction to Organizational Safety',
              detail: 'CRC Press, 2012.',
              url: null,
              urlLabel: null,
            },
          ].map((fn) => (
            <li key={fn.n} id={`fn-${fn.n}`} className="flex gap-3 text-xs text-muted font-light leading-relaxed">
              <a href={`#fnref-${fn.n}`} className="text-gold/70 hover:text-gold transition-colors flex-shrink-0 font-medium">
                [{fn.n}]
              </a>
              <span>
                {fn.text} <em className="not-italic text-muted">{fn.title}</em>. {fn.detail}
                {fn.url && (
                  <>
                    {' '}
                    <a
                      href={fn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold/70 hover:text-gold transition-colors underline underline-offset-2"
                    >
                      {fn.urlLabel}
                    </a>
                  </>
                )}
              </span>
            </li>
          ))}
        </ol>
      </section>

    </BlogArticleLayout>
  )
}
