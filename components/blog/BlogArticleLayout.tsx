import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Container from '@/components/ui/Container'
import ReadingProgress from '@/components/blog/ReadingProgress'
import TableOfContents from '@/components/blog/TableOfContents'

interface BlogArticleLayoutProps {
  /** Article <header> block (tag, title, meta) */
  header: React.ReactNode
  /** CTA strip rendered below the article body */
  cta?: React.ReactNode
  /** JSON-LD structured data string (pass JSON.stringify result) */
  jsonLd?: string
  /** Article body content — rendered inside <article> */
  children: React.ReactNode
}

/**
 * Shared layout for all blog article pages.
 * Provides: ReadingProgress bar, Nav, sticky TableOfContents sidebar (xl+),
 * Footer, BackToTop, and optional JSON-LD injection.
 *
 * Usage in a blog page:
 *   <BlogArticleLayout header={<YourHeader />} cta={<YourCTA />} jsonLd={JSON.stringify(schema)}>
 *     <p>Article body…</p>
 *   </BlogArticleLayout>
 */
export default function BlogArticleLayout({
  header,
  cta,
  jsonLd,
  children,
}: BlogArticleLayoutProps) {
  return (
    <>
      <ReadingProgress />
      <Nav />
      <main id="main-content" className="min-h-screen bg-paper">

        {header}

        {/* Article body + sticky ToC sidebar
            Shares the site column (Container) so the article's left edge lines up with
            the nav logo and footer; the body keeps a ~672px reading measure and the ToC
            sits to its right on xl screens. */}
        <Container className="flex gap-12">

          <article className="py-14 w-full max-w-2xl min-w-0 prose-custom">
            <div className="space-y-6 text-ink/90 font-body font-normal leading-[1.85] text-[1.0625rem]">
              {children}
            </div>
          </article>

          {/* ToC sidebar — desktop only (xl: 1280px+) */}
          <aside className="hidden xl:block w-56 flex-shrink-0 pt-14">
            <div className="sticky top-28">
              <TableOfContents />
            </div>
          </aside>

        </Container>

        {cta}

      </main>
      <Footer />
      <BackToTop />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
    </>
  )
}
