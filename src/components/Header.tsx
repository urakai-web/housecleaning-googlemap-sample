import { useState, useEffect } from 'react'

const LINE_URL = 'https://page.line.me/245ksvcv?openQrModal=true'
const TEL = '090-6692-9256'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <img src="/images/ロゴ.png" alt="金沢クリーン" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy">
          <a href="#service-area" className="hover:text-navy-dark transition-colors">対応エリア</a>
          <a href="#works" className="hover:text-navy-dark transition-colors">施工実績</a>
          <a href="#before-after" className="hover:text-navy-dark transition-colors">ビフォーアフター</a>
          <a href="#contact" className="hover:text-navy-dark transition-colors">お問い合わせ</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${TEL}`}
            className="flex items-center gap-1.5 text-navy text-sm font-bold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {TEL}
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-line-green text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .629.285.629.63v4.141h1.757c.348 0 .63.283.63.63 0 .344-.282.629-.63.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEで相談
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <a href="#service-area" onClick={() => setMenuOpen(false)} className="text-navy font-medium py-2 border-b border-gray-100">対応エリア</a>
          <a href="#works" onClick={() => setMenuOpen(false)} className="text-navy font-medium py-2 border-b border-gray-100">施工実績</a>
          <a href="#before-after" onClick={() => setMenuOpen(false)} className="text-navy font-medium py-2 border-b border-gray-100">ビフォーアフター</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-navy font-medium py-2 border-b border-gray-100">お問い合わせ</a>
          <a href={`tel:${TEL}`} className="text-navy font-bold py-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {TEL}
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-line-green text-white font-bold py-3 rounded-full flex items-center justify-center gap-2"
          >
            LINEで相談する
          </a>
        </div>
      )}
    </header>
  )
}
