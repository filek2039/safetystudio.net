'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/** Maps hash fragments from the old hash-tab router to their new static routes. */
const LEGACY_HASH_ROUTES: Record<string, string> = {
  '#services': '/services/',
  '#tools': '/tools/',
  '#library': '/library/',
  '#safety-moment-library': '/library/#safety-moment-library',
  '#about': '/about/',
  '#contact': '/about/#contact',
}

/**
 * Redirects visitors arriving at old hash-tab bookmarks/links (e.g. `/#services`)
 * to their new dedicated route. Renders nothing.
 */
export default function LegacyHashRedirect() {
  const router = useRouter()

  useEffect(() => {
    const target = LEGACY_HASH_ROUTES[window.location.hash]
    if (target) router.replace(target)
  }, [router])

  return null
}
