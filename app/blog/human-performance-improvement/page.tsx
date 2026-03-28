import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'Stop Blaming the Worker: What Human Performance Improvement Actually Means for Your Site — Safety Studio',
  description:
    'Most incident investigations conclude with "human error" — and stop there. HPI asks the more useful question: what made error the predictable outcome? Here is what that shift looks like in practice.',
  openGraph: {
    title: 'Stop Blaming the Worker: What Human Performance Improvement Actually Means for Your Site',
    description:
      'Most incident investigations conclude with "human error" — and stop there. HPI asks the more useful question: what made error the predictable outcome?',
    type: 'article',
    publishedTime: '2026-04-01T00:00:00Z',
    authors: ['Safety Studio'],
    tags: ['HPI', 'Human Factors', 'Safety Culture', 'Error Prevention', 'HSE'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Blaming the Worker: What Human Performance Improvement Actually Means for Your Site',
    description:
      'Most incident investigations stop at "human error." HPI asks what made error the predictable outcome.',
  },
}

// ---------------------------------------------------------------------------
// Article data — extracted so the JSX stays readable
// ---------------------------------------------------------------------------

const HPI_PRINCIPLES = [
  {
    n: '01',
    title: 'People are fallible, and even the best people make mistakes',
    body: 'Error is a normal feature of human cognition, not a character defect. Expecting zero errors from any person working in a complex, high-pressure environment is not a safety strategy — it is a wish. The system must be designed for the humans who actually work in it, not an idealised version of them.',
  },
  {
    n: '02',
    title: 'Error-likely situations are predictable, manageable, and preventable',
    body: 'Certain task and environmental conditions reliably produce errors: time pressure, fatigue, novel tasks, unclear procedures, simultaneous demands. These are not random. They can be identified before a task begins and managed before they produce an event. This is the entire point of pre-task planning.',
  },
  {
    n: '03',
    title: 'Individual behaviour is shaped by organisational processes and values',
    body: 'How people behave at work is less a product of their personal values than of what their organisation actually reinforces. If shortcuts are tolerated without comment, shortcuts become normal. If pre-task pauses are valued on paper but never observed by leaders in the field, they stop happening. Organisations get the behaviour they normalise.',
  },
  {
    n: '04',
    title: 'Leaders directly shape performance through their responses',
    body: 'When a supervisor walks past a procedure deviation without comment, they have just approved it. When a leader stops a job and asks "is everyone clear on the critical steps?", they have changed what feels normal on that site. The most powerful human performance tool available is consistent, visible leader behaviour in the field — not more paperwork.',
  },
  {
    n: '05',
    title: 'Learning from past events is the most reliable form of prevention',
    body: 'Every incident sends a signal. HPI insists that signal be received, analysed, and acted upon before the next similar event. This requires treating near-misses involving human error with the same investigative rigour as events that caused harm — because the conditions were identical, and only the outcome differed.',
  },
]

const PIF_CATEGORIES = [
  'Task factors — first-time performance of a task, no written procedure available, procedural steps that look similar to each other, time pressure, working from memory on a step that demands precision',
  'Environment factors — high noise, extreme heat or cold, poor lighting, simultaneous nearby activities, frequent interruptions, unfamiliar work location',
  'Individual factors — fatigue, unfamiliarity with the specific equipment, residual stress from earlier in the shift, illness or discomfort, uncertainty about the correct outcome of a step',
]

const GETTING_STARTED_STEPS = [
  {
    n: '01',
    title: 'Add error precursor identification to your pre-task briefing',
    body: 'Ask the crew: "What conditions today make this task more error-prone than usual?" You will hear about fatigue, task novelty, concurrent activities, and pressure to finish — exactly the signals HPI needs to function. If nobody can name a single precursor for a complex task, the briefing hasn\'t gone deep enough.',
  },
  {
    n: '02',
    title: 'Change one investigation question',
    body: 'After any near-miss or incident, ask "What conditions made this error likely?" before asking "Who made the error?" The sequence matters. Leading with conditions keeps the investigation open long enough to find something actionable. Leading with blame closes it at the point of minimum learning.',
  },
  {
    n: '03',
    title: 'Practise STAR on the next critical task',
    body: 'Identify one high-consequence step in tomorrow\'s work — an energy isolation, a lift, a confined space entry — and stop before executing it. Think through the expected outcome. Confirm the step. Review the result. Do it visibly, so the crew sees that a pause before a critical step is a sign of good practice, not hesitation.',
  },
]

const REFERENCES = [
  {
    n: 1,
    text: 'U.S. Department of Energy,',
    title: 'Human Performance Improvement Handbook, Vol. 1 — Concepts and Principles',
    detail: 'DOE-HDBK-1028-2009.',
    url: 'https://www.standards.doe.gov/standards-documents/1000/1028-BHdbk-2009-v1',
    urlLabel: 'standards.doe.gov',
  },
  {
    n: 2,
    text: 'International Atomic Energy Agency,',
    title: 'A Systematic Approach to Human Performance Improvement in Nuclear Power Plants',
    detail: 'IAEA-TECDOC-1204, 2001.',
    url: 'https://www-pub.iaea.org/MTCD/Publications/PDF/te_1204_prn.pdf',
    urlLabel: 'iaea.org',
  },
  {
    n: 3,
    text: 'U.S. Occupational Safety and Health Administration,',
    title: 'Commonly Used Statistics',
    detail: 'Updated annually.',
    url: 'https://www.osha.gov/data/commonstats',
    urlLabel: 'osha.gov/data/commonstats',
  },
  {
    n: 4,
    text: 'UK Health and Safety Executive,',
    title: 'Safety Culture: A Review of the Literature',
    detail: 'Research Report RR367, 2005.',
    url: 'https://www.hse.gov.uk/research/rrhtm/rr367.htm',
    urlLabel: 'hse.gov.uk',
  },
  {
    n: 5,
    text: 'U.S. Nuclear Regulatory Commission,',
    title: 'Human Performance Tools for Workers and Supervisors',
    detail: 'Document ML102120052.',
    url: 'https://www.nrc.gov/docs/ML1021/ML102120052.pdf',
    urlLabel: 'nrc.gov',
  },
]

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/** Inline superscript footnote link that pairs with a reference entry below. */
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

/** Numbered card used in list sections (principles, steps). */
function NumberedCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="flex gap-5 border-l-2 border-gold/25 pl-5 py-1">
      <span className="font-display text-gold/50 text-lg font-light leading-none mt-0.5 flex-shrink-0 w-6">
        {n}
      </span>
      <div>
        <div className="text-cream font-medium text-sm mb-1">{title}</div>
        <div className="text-muted text-sm font-light leading-[1.75]">{body}</div>
      </div>
    </div>
  )
}

/** Gold-dot bullet list item. */
function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="w-1 h-1 rounded-full bg-gold mt-[0.7em] flex-shrink-0" />
      <span>{text}</span>
    </li>
  )
}

/** H2 section heading styled for article body. */
function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display font-light text-[1.7rem] text-cream mt-12 mb-2 leading-[1.2]"
    >
      {children}
    </h2>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HPIArticle() {
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-screen">

        {/* Article header */}
        <header className="pt-36 pb-12 px-16 max-md:px-6 border-b border-gold/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <a
                href="/blog/"
                className="text-muted/70 text-xs tracking-widest uppercase hover:text-gold transition-colors"
              >
                &larr; Blog
              </a>
              <span className="text-muted/40 text-xs">&middot;</span>
              <span className="text-[0.62rem] tracking-[0.15em] uppercase text-gold font-medium border border-gold/30 px-2.5 py-0.5 rounded-sm">
                Human Factors
              </span>
            </div>

            <h1 className="font-display font-light text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.15] text-cream mb-5">
              Stop Blaming the Worker: What Human Performance Improvement Actually Means for Your Site
            </h1>

            <div className="flex items-center gap-4 text-muted/70 text-xs tracking-wide">
              <span>Safety Studio</span>
              <span className="text-muted/40">&middot;</span>
              <span>April 2026</span>
              <span className="text-muted/40">&middot;</span>
              <span>8 min read</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="px-16 max-md:px-6 py-14 max-w-2xl prose-custom">
          <div className="space-y-6 text-cream/85 font-light leading-[1.85] text-[0.975rem]">

            <p>
              The investigation is complete. Root cause: worker failed to follow procedure. Corrective
              action: issue a reminder, schedule a toolbox talk. Most HSE professionals have either
              written this report or read fifty of them. It is technically accurate — someone did
              deviate from the procedure — and it is practically useless, because it explains nothing
              about why the deviation happened or how to stop the next one.
            </p>

            <p>
              That is the problem Human Performance Improvement was built to solve. HPI does not
              dismiss individual accountability — it insists on going one layer deeper, to the
              conditions and system factors that made the error predictable. It is the difference
              between asking &ldquo;who failed?&rdquo; and asking &ldquo;why was failure the likely
              outcome?&rdquo;
            </p>

            <SectionHeading id="not-a-blame-removal">
              HPI Is Not a Blame Removal Programme
            </SectionHeading>

            <p>
              This is the most common misreading of HPI, and it is worth correcting upfront.
              The framework did not emerge from a desire to protect workers from consequences — it
              emerged from the nuclear industry&apos;s hard examination of why intelligent, trained,
              well-intentioned people kept making the same categories of mistake. Following Three Mile
              Island, the U.S. Department of Energy and the International Atomic Energy Agency spent
              years developing systematic approaches to human performance that went well beyond
              traditional behaviour-based safety.<Fn n={1} /><Fn n={2} />
            </p>

            <p>
              The conclusion they reached was not that workers are blameless. It was that attributing
              every failure to individual failure is both factually incomplete and operationally
              counterproductive. When an organisation closes an investigation at &ldquo;human
              error,&rdquo; it stops at the symptom and never reaches the cause. The conditions
              that produced the error remain in place, and the next person to face those same
              conditions is just as likely to make the same mistake.
            </p>

            <p>
              HPI reframes human error as a signal — one that asks what task, environmental, or
              organisational factor made the error the most predictable outcome. That framing is more
              rigorous, not less. It demands more from an investigation, not less.
            </p>

            <SectionHeading id="five-principles">The Five Principles</SectionHeading>

            <p>
              The DOE&apos;s Human Performance Improvement Handbook — the foundational reference for
              the framework used across nuclear, oil &amp; gas, and industrial facilities — identifies
              five core principles.<Fn n={1} /> They are worth knowing precisely, because each one
              has direct operational implications.
            </p>

            <div className="space-y-5 my-6">
              {HPI_PRINCIPLES.map((item) => (
                <NumberedCard key={item.n} {...item} />
              ))}
            </div>

            <SectionHeading id="error-precursors">
              Error Precursors: Predicting Where Mistakes Are Most Likely
            </SectionHeading>

            <p>
              An <em className="text-cream not-italic font-normal">error precursor</em> is any
              condition — in the task, the environment, or the individual — that increases the
              probability of a mistake during a specific job. HPI calls these{' '}
              <em className="text-cream not-italic font-normal">Performance Influencing Factors</em>{' '}
              (PIFs). They are not excuses for errors; they are predictive signals that certain
              combinations of circumstances make a particular task more dangerous than it would
              otherwise be.<Fn n={2} />
            </p>

            <p>They fall into three categories:</p>

            <ul className="list-none space-y-2 pl-0">
              {PIF_CATEGORIES.map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>

            <p>
              The practical implication is direct: before a critical task begins, a supervisor or
              worker who asks &ldquo;what error precursors are present right now?&rdquo; is doing
              something more targeted than a generic hazard assessment. They are looking at this
              specific task, today, with this crew, under these conditions — and deciding whether the
              precursors are significant enough to change the approach before anything goes wrong.
            </p>

            <SectionHeading id="hpi-tools">The Tools That Make HPI Practical</SectionHeading>

            <p>
              HPI is not just a philosophy — it translates into specific field tools that most sites
              can adopt without a system overhaul.<Fn n={5} /> Four are worth knowing well:
            </p>

            <p>
              <strong className="text-cream font-medium">STAR (Stop-Think-Act-Review)</strong> is the
              simplest HPI tool and arguably the most effective for preventing critical-step errors.
              Before a high-consequence action: stop and focus, think through what you expect to happen
              and verify the step you are about to take, act, then review whether the outcome matched
              your expectation. It costs two minutes and interrupts the automatic execution pattern
              that causes most skill-based errors.
            </p>

            <p>
              <strong className="text-cream font-medium">HPI-informed pre-task briefings</strong> go
              beyond a standard JSA review. Rather than confirming that workers have read the hazard
              list, they ask: which steps in today&apos;s work carry the highest error potential?
              What error precursors are present for this crew right now? What will we do if something
              feels wrong mid-task? The answers surface latent risk that a standard toolbox talk
              rarely reaches.
            </p>

            <p>
              <strong className="text-cream font-medium">Field Level Hazard Assessments (FLHAs)</strong>{' '}
              as error precursor checks extend the standard FLHA to explicitly name human factors
              alongside physical hazards — fatigue, task complexity, distractions, unfamiliarity.
              Most sites already do FLHAs; adding a single question about the crew&apos;s human
              performance condition requires no new process.
            </p>

            <p>
              <strong className="text-cream font-medium">Coaching conversations</strong> differ from
              behavioural observations. An observation tells you what someone did; a coaching
              conversation asks what they were thinking, what felt uncertain, where they sensed
              pressure. The latter surfaces the error precursors that will produce the next event —
              information that observation alone will never deliver.
            </p>

            <SectionHeading id="just-culture">
              Just Culture: The Organisational Precondition
            </SectionHeading>

            <p>
              HPI tools do not work in a blame culture. If workers expect to be disciplined whenever
              they raise a concern or admit an error, they will not surface the precursors that HPI
              depends on detecting. The information that could prevent the next serious event will
              stay invisible — until the event itself makes it impossible to ignore.
            </p>

            <p>
              <em className="text-cream not-italic font-normal">Just culture</em> is not &ldquo;no
              consequences culture.&rdquo; It draws a deliberate distinction between three categories:
              an unintentional error in good-faith work (system response: fix the conditions that made
              error likely); at-risk behaviour where the person did not perceive the risk clearly
              (response: coach, clarify, remove the pressure); and reckless behaviour where risk was
              knowingly accepted (response: discipline). The distinction changes how events are
              investigated — and critically, how willing people are to report honestly before the
              next event happens.
            </p>

            <p>
              UK Health and Safety Executive research consistently demonstrates that safety culture —
              including the degree to which workers feel safe reporting errors — is a stronger
              predictor of safety outcomes than procedural compliance rates alone.<Fn n={4} /> You
              can have the best procedures on paper and the worst safety culture in practice. HPI
              requires both to function.
            </p>

            <SectionHeading id="what-data-says">
              What the Data Says About Human Error as a Cause
            </SectionHeading>

            <p>
              OSHA data consistently shows human error appearing in the causal chain of the majority
              of recorded workplace injuries and fatalities.<Fn n={3} /> That figure is cited
              frequently — and frequently misused. The problem is not its accuracy; it is what people
              do with it. &ldquo;Human error caused this incident&rdquo; is not an explanation. It is
              a label that stops investigation at exactly the wrong point.
            </p>

            <p>
              High-reliability research across aviation, nuclear, and process industries has
              consistently found that errors occur not because workers are careless, but because
              conditions — workload, time pressure, unclear procedures, inadequate preparation —
              made error the statistically likely outcome for any person in that situation. The
              worker in front of you is almost always the last link in a chain that the organisation
              built, one decision at a time. HPI&apos;s contribution is to make that chain visible
              before someone gets hurt.
            </p>

            <SectionHeading id="getting-started">
              Getting Started: Three Changes You Can Make This Week
            </SectionHeading>

            <p>
              Implementing HPI does not require a programme launch or a consultancy engagement. It
              starts with three specific changes:
            </p>

            <div className="space-y-5 my-6">
              {GETTING_STARTED_STEPS.map((item) => (
                <NumberedCard key={item.n} {...item} />
              ))}
            </div>

            <p>
              Over time, HPI becomes a language — a shared vocabulary for naming the conditions that
              make work feel risky, before anything goes wrong. That is when it starts changing the
              incident curve. The nuclear industry took decades to build that language into its
              culture. Oil &amp; gas and construction do not have decades to spare, but they also do
              not have to start from zero. The framework, the tools, and the evidence base are
              already built.
            </p>

            <SectionHeading id="the-shift">The Shift That Changes Everything</SectionHeading>

            <p>
              The most important thing HPI offers is not a checklist. It is a question: not
              &ldquo;who failed?&rdquo; but &ldquo;what made failure the most likely outcome?&rdquo;
              That question changes investigations. It changes briefings. It changes what supervisors
              notice in the field — and what workers feel safe saying out loud before the next event
              happens.
            </p>

            <p>
              A site where people can name what makes their work dangerous is a fundamentally safer
              place than one where everyone says everything is fine right up until it isn&apos;t.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent my-14" />

            {/* References */}
            <section aria-label="Footnotes">
              <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-gold font-medium mb-5">
                References
              </h3>
              <ol className="space-y-3 list-none pl-0">
                {REFERENCES.map((ref) => (
                  <li
                    key={ref.n}
                    id={`fn-${ref.n}`}
                    className="flex gap-3 text-xs text-muted font-light leading-relaxed"
                  >
                    <a
                      href={`#fnref-${ref.n}`}
                      className="text-gold/70 hover:text-gold transition-colors flex-shrink-0 font-medium"
                    >
                      [{ref.n}]
                    </a>
                    <span>
                      {ref.text}{' '}
                      <em className="not-italic text-muted">{ref.title}</em>. {ref.detail}
                      {ref.url && (
                        <>
                          {' '}
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold/70 hover:text-gold transition-colors underline underline-offset-2"
                          >
                            {ref.urlLabel}
                          </a>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

          </div>
        </article>

        {/* CTA strip */}
        <div className="px-16 max-md:px-6 pb-24 max-w-2xl">
          <div className="border border-gold/15 rounded-sm px-8 py-6 flex flex-wrap items-center justify-between gap-6 bg-navy-mid/40">
            <div>
              <div className="text-cream font-medium text-sm mb-1">
                Run an HPI-informed safety moment with your team
              </div>
              <div className="text-muted text-xs font-light">
                Use our free Safety Moment Library for ready-to-use pre-task topics covering human
                factors, critical step management, and error traps.
              </div>
            </div>
            <a
              href="/#safety-moment-library"
              className="text-gold text-[0.75rem] tracking-widest uppercase border border-gold/50 px-5 py-2.5 rounded-sm hover:bg-gold hover:text-navy transition-colors duration-300 whitespace-nowrap"
            >
              Open Library
            </a>
          </div>
        </div>

      </main>
      <Footer />
      <BackToTop />

      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'Stop Blaming the Worker: What Human Performance Improvement Actually Means for Your Site',
            datePublished: '2026-04-01',
            dateModified: '2026-04-01',
            author: {
              '@type': 'Organization',
              name: 'Safety Studio',
              url: 'https://safetystudio.net',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Safety Studio',
              url: 'https://safetystudio.net',
            },
            description:
              'Most incident investigations conclude with "human error" — and stop there. HPI asks the more useful question: what made error the predictable outcome? Here is what that shift looks like in practice.',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://safetystudio.net/blog/human-performance-improvement/',
            },
          }),
        }}
      />
    </>
  )
}
