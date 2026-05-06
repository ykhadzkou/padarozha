export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1F1A' }} className="mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left — brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-white font-semibold tracking-widest uppercase text-sm"
                style={{ fontFamily: 'Playfair Display, serif' }}>
            Padarozha
          </span>
          <span className="text-white/40 text-xs" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Come as a stranger, leave as a guest.
          </span>
        </div>

        {/* Centre — stork silhouette */}
        <div className="opacity-20">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C24 4 20 8 20 12C20 14 21 15.5 22 16.5L18 22L14 20L12 24L17 26L15 32H19L21 28L24 30L27 28L29 32H33L31 26L36 24L34 20L30 22L26 16.5C27 15.5 28 14 28 12C28 8 24 4 24 4Z" fill="white"/>
            <path d="M22 16.5L20 30L18 44H22L24 34L26 44H30L28 30L26 16.5" fill="white" opacity="0.7"/>
          </svg>
        </div>

        {/* Right — links */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="/diligence-statement.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white/90 text-xs transition-colors duration-200 underline underline-offset-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}>
            AI Collaboration Statement
          </a>
          <span className="text-white/25 text-xs" style={{ fontFamily: 'Manrope, sans-serif' }}>
            © 2026 Yauhen Khadzkou
          </span>
        </div>

      </div>
    </footer>
  )
}
