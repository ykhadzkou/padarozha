const HERO_IMAGE = 'https://images.unsplash.com/photo-1562579056-c16507d5173b?w=1920&q=85&auto=format&fit=crop'

export default function Hero({ onExplore }) {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        <div className="mb-6 opacity-90">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C24 4 20 8 20 12C20 14 21 15.5 22 16.5L18 22L14 20L12 24L17 26L15 32H19L21 28L24 30L27 28L29 32H33L31 26L36 24L34 20L30 22L26 16.5C27 15.5 28 14 28 12C28 8 24 4 24 4Z" fill="white" opacity="0.9"/>
            <path d="M22 16.5L20 30L18 44H22L24 34L26 44H30L28 30L26 16.5" fill="white" opacity="0.7"/>
          </svg>
        </div>

        <p className="text-white/70 text-sm font-light tracking-[0.3em] uppercase mb-4"
           style={{ fontFamily: 'Manrope, sans-serif' }}>
          Padarozha
        </p>

        <h1 className="text-white font-bold leading-tight mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)'
            }}>
          Come as a stranger,<br />leave as a guest.
        </h1>

        <p className="text-white/80 text-base md:text-lg font-light mb-10 max-w-lg leading-relaxed"
           style={{ fontFamily: 'Manrope, sans-serif' }}>
          Belarus has more to offer than most Belarusians know.
          Let us show you what you might be missing.
        </p>

        <button
          onClick={onExplore}
          className="group flex items-center gap-3 bg-white text-green-900 font-semibold px-8 py-4 rounded-full
                     hover:bg-green-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl
                     text-sm tracking-wide uppercase"
          style={{ fontFamily: 'Manrope, sans-serif' }}>
          Start exploring
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs tracking-widest uppercase"
              style={{ fontFamily: 'Manrope, sans-serif' }}>Scroll</span>
        <div className="w-px h-8 bg-white animate-pulse" />
      </div>
    </section>
  )
}
