import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'
import ClauseTag from '@/components/ui/ClauseTag'

export const metadata: Metadata = {
  title: 'Privacy Policy — Safety Studio',
  description: 'Privacy policy for safetystudio.net — how we collect and use data.',
  alternates: {
    canonical: 'https://safetystudio.net/privacy/',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-screen bg-paper">
        <header className="pt-36 pb-12 px-16 max-md:px-6 border-b border-line">
          <ClauseTag label="Legal" className="mb-6" />
          <h1 className="font-head font-extrabold uppercase text-[2.8rem] max-md:text-[2rem] text-ink leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="font-data text-ink-soft text-sm mt-3">Last updated: April 2026</p>
        </header>

        <article className="px-16 max-md:px-6 py-14 max-w-2xl space-y-10 text-ink/85 font-body font-normal leading-[1.85] text-[0.975rem]">

          <section>
            <h2 className="font-display font-light text-[1.4rem] text-ink mb-3">Overview</h2>
            <p>
              Safety Studio (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates safetystudio.net. This page explains
              what information we collect when you visit our website, how we use it, and your rights
              regarding that data.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-[1.4rem] text-ink mb-3">Information We Collect</h2>
            <p>
              We do not collect any personally identifiable information directly. We use{' '}
              <strong className="text-ink font-medium">Google Analytics 4 (GA4)</strong> to
              understand how visitors use this site. GA4 collects the following anonymised data via
              cookies and browser storage:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-ink/75">
              <li>Pages visited and time spent on each page</li>
              <li>Approximate geographic location (country/city level)</li>
              <li>Browser type, operating system, and device category</li>
              <li>Referral source (e.g. search engine, direct)</li>
              <li>Interactions with our free tools (e.g. using the Incident Rate Calculator or Safety Moment Library)</li>
            </ul>
            <p className="mt-3">
              This data is aggregated and anonymous. We cannot identify individual visitors from it.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-[1.4rem] text-ink mb-3">Cookies</h2>
            <p>
              Google Analytics sets cookies in your browser to distinguish unique visitors and sessions.
              These cookies do not store any personally identifiable information. The primary cookies
              used are <code className="text-signal text-sm">_ga</code> (expires after 2 years) and{' '}
              <code className="text-signal text-sm">_ga_*</code> (expires after 2 years).
            </p>
            <p className="mt-3">
              You can opt out of Google Analytics tracking at any time by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal hover:text-signal transition-colors"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              , or by disabling cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-[1.4rem] text-ink mb-3">How We Use This Data</h2>
            <p>We use analytics data solely to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-ink/75">
              <li>Understand which content and tools are most useful to visitors</li>
              <li>Improve the performance and structure of the website</li>
              <li>Measure the reach of our free HSE resources</li>
            </ul>
            <p className="mt-3">
              We do not sell, share, or transfer this data to any third party beyond Google Analytics
              for the purposes described above.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-[1.4rem] text-ink mb-3">Third-Party Services</h2>
            <p>
              This website uses Google Analytics, operated by Google LLC. Google&apos;s use of data is
              governed by the{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal hover:text-signal transition-colors"
              >
                Google Privacy Policy
              </a>
              . The website is hosted on{' '}
              <strong className="text-ink font-medium">Cloudflare Pages</strong>. Cloudflare may
              process request metadata (IP addresses, headers) for security and DDoS protection
              purposes in accordance with the{' '}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal hover:text-signal transition-colors"
              >
                Cloudflare Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-[1.4rem] text-ink mb-3">Your Rights (GDPR)</h2>
            <p>
              If you are located in the European Economic Area (EEA), you have the right to access,
              rectify, or request deletion of any personal data we hold about you. As we only collect
              anonymised analytics data, we hold no identifiable personal data. If you have any
              concerns, please contact us.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-[1.4rem] text-ink mb-3">Contact</h2>
            <p>
              For any questions about this privacy policy, contact us at{' '}
              <a
                href="mailto:safety@safetystudio.net"
                className="text-signal hover:text-signal transition-colors"
              >
                safety@safetystudio.net
              </a>
              .
            </p>
          </section>

        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
