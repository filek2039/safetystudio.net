interface ContainerProps {
  children: React.ReactNode
  className?: string
}

/**
 * Max-width content wrapper for all page sections.
 * Fixes the review finding that sections stretch edge-to-edge at 1920px.
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  )
}
