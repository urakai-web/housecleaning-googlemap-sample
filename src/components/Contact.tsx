const LINE_URL = 'https://lin.ee/YFypQIW'
const TEL = '090-1234-1234'

export default function Contact() {
  return (
    <section id="contact" className="bg-navy py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 text-center">

        {/* Section heading */}
        <span className="inline-block text-xs font-bold tracking-widest text-white/40 uppercase mb-4">Contact</span>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
          まずは写真を送るだけでOKです
        </h2>

        {/* Body */}
        <p className="text-white/80 leading-relaxed text-base md:text-lg mb-10">
          汚れ具合や作業場所が分かる写真をお送りください。<br className="hidden md:block" />
          内容を確認し、料金目安や日程をご案内します。
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-line-green text-white font-black text-lg px-10 py-5 rounded-full shadow-xl hover:opacity-90 active:scale-95 transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .629.285.629.63v4.141h1.757c.348 0 .63.283.63.63 0 .344-.282.629-.63.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEで相談する
          </a>
          <a
            href={`tel:${TEL}`}
            className="flex items-center justify-center gap-3 border-2 border-white text-white font-black text-lg px-10 py-5 rounded-full hover:bg-white hover:text-navy active:scale-95 transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            電話で相談する
          </a>
        </div>

        {/* Supplement */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-3">
          <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <span className="text-white/80 text-sm font-medium">営業時間 9:00〜18:00 / 定休日なし</span>
        </div>

      </div>
    </section>
  )
}
