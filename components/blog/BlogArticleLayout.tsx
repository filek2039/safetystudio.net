import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'
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
      <main id="main-content" className="min-h-screen">

        {header}

        {/* Article body + sticky ToC sidebar */}
        <div className="flex">
          <article className="px-16 max-md:px-6 py-14 max-w-2xl prose-custom flex-shrink-0">
            <div className="space-y-6 text-cream/85 font-light leading-[1.85] text-[0.975rem]">
              {children}
            </div>
          </article>

          {/* ToC sidebar — desktop only (xl: 1280px+) */}
          <aside className="hidden xl:block w-56 flex-shrink-0 pt-14 pl-8 pr-4">
            <div className="sticky top-28">
              <TableOfContents />
            </div>
          </aside>
        </div>

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
