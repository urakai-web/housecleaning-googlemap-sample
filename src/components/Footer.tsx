const LINE_URL = 'https://lin.ee/YFypQIW'
const TEL = '090-1234-1234'

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">

          {/* Brand */}
          <div>
            <img src="/images/ロゴ.png" alt="金沢クリーン" className="h-12 w-auto object-contain mb-3 brightness-0 invert" />
            <p className="text-white/60 text-sm leading-relaxed">
              金沢市を中心に、ハウスクリーニング・<br />
              便利サービスを提供しています。
            </p>
          </div>

          {/* Company info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">会社情報</h3>
            <dl className="text-sm text-white/70 space-y-2">
              <div className="flex gap-3">
                <dt className="text-white/40 w-20 shrink-0">電話番号</dt>
                <dd>
                  <a href={`tel:${TEL}`} className="hover:text-white transition-colors">{TEL}</a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-white/40 w-20 shrink-0">所在地</dt>
                <dd>〒920-8577 石川県金沢市広坂1丁目1-1</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-white/40 w-20 shrink-0">営業時間</dt>
                <dd>9:00〜18:00</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-white/40 w-20 shrink-0">定休日</dt>
                <dd>なし</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-white/40 w-20 shrink-0">支払い</dt>
                <dd>現金・クレジットカード・銀行振込</dd>
              </div>
            </dl>
          </div>

          {/* Quick links + LINE */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">メニュー</h3>
            <nav className="flex flex-col gap-2 text-sm text-white/70 mb-6">
              <a href="#service-area" className="hover:text-white transition-colors">対応エリア</a>
              <a href="#works" className="hover:text-white transition-colors">施工実績</a>
              <a href="#before-after" className="hover:text-white transition-colors">ビフォーアフター</a>
              <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
            </nav>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-line-green text-white text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .629.285.629.63v4.141h1.757c.348 0 .63.283.63.63 0 .344-.282.629-.63.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              公式LINEを友だち追加
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} 金沢クリーン All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
