import { useState, useRef, useCallback, useEffect } from 'react'

const cases = [
  {
    id: '1',
    before: '/images/トイレA.png',
    after: '/images/トイレB.png',
    title: 'トイレクリーニング',
    description: '便器の黄ばみ・水垢・タンク内部まで丁寧に洗浄',
  },
  {
    id: '2',
    before: '/images/エアコンA.png',
    after: '/images/エアコンB.png',
    title: 'エアコンクリーニング',
    description: '内部のホコリやカビを徹底洗浄し、ニオイや効きを改善',
  },
  {
    id: '3',
    before: '/images/洗面台A.png',
    after: '/images/洗面台B.png',
    title: '洗面台クリーニング',
    description: '蛇口周りのカルキ汚れ・排水口の詰まりを除去',
  },
]

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(5, Math.min(95, pct)))
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }
  const onMouseUp = () => { dragging.current = false }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onTouchStart = () => { dragging.current = true }
    const onTouchEnd = () => { dragging.current = false }
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current) return
      e.preventDefault()
      updatePosition(e.touches[0].clientX)
    }
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('touchmove', onTouchMove)
    }
  }, [updatePosition])

  return (
    <div
      ref={containerRef}
      className="before-after-slider select-none aspect-[4/3] rounded-xl overflow-hidden"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <img src={after} alt="After" className="w-full h-full object-cover" draggable={false} />
      <div className="before-image" style={{ width: `${position}%` }}>
        <img
          src={before}
          alt="Before"
          className="h-full object-cover"
          style={{ width: `${(100 / position) * 100}%` }}
          draggable={false}
        />
      </div>
      <div className="divider" style={{ left: `${position}%` }}>
        <div className="divider-handle">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 5L2 10L7 15M13 5L18 10L13 15" stroke="#17365D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="absolute top-3 left-3 z-20 pointer-events-none">
        <span className="bg-navy text-white text-xs font-bold px-2.5 py-1 rounded-md">Before</span>
      </div>
      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <span className="bg-line-green text-white text-xs font-bold px-2.5 py-1 rounded-md">After</span>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="bg-sky-light py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-navy/50 uppercase mb-3">Before / After</span>
          <h2 className="text-2xl md:text-3xl font-black text-navy">ビフォーアフター</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-navy"></div>
          <p className="mt-5 text-navy/70 leading-relaxed">
            汚れの状態や仕上がりを写真でご確認いただけます。<br className="hidden md:block" />
            気になる箇所があれば、同じように写真を送ってご相談ください。
          </p>
          <p className="mt-2 text-sm text-navy/50">← スライダーを動かして比較できます →</p>
        </div>

        <div
          className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
        >
          {cases.map(c => (
            <div key={c.id} className="shrink-0 w-72 md:w-auto bg-white rounded-2xl overflow-hidden shadow-sm">
              <BeforeAfterSlider before={c.before} after={c.after} />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1 h-5 rounded-full bg-navy inline-block"></span>
                  <h3 className="font-black text-navy text-base">{c.title}</h3>
                </div>
                <p className="text-sm text-navy/70">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-navy/40 md:hidden">← スワイプで見る →</p>

      </div>
    </section>
  )
}
