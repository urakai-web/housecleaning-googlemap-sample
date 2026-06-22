const works = [
  {
    id: '1',
    image: '/images/お風呂.png',
    title: 'お風呂クリーニング',
    description: '浴槽・壁・床のカビや水垢を徹底洗浄。エプロン内部まできれいにして、気持ちよくお使いいただけます。',
  },
  {
    id: '2',
    image: '/images/キッチン.png',
    title: 'キッチンクリーニング',
    description: '換気扇・コンロ周りの油汚れやシンクの水垢をしっかり除去。清潔なキッチンを取り戻します。',
  },
  {
    id: '3',
    image: '/images/洗面台A.png',
    title: '洗面台クリーニング',
    description: '蛇口周りのカルキ汚れや排水口の詰まりをしっかり除去。ピカピカの仕上がりでご満足いただけました。',
  },
]

export default function Works() {
  return (
    <section id="works" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-navy/50 uppercase mb-3">Works</span>
          <h2 className="text-2xl md:text-3xl font-black text-navy">
            これまでの施工実績
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-navy"></div>
          <p className="mt-5 text-navy/70 leading-relaxed">
            エアコン、水回り、退去清掃など、さまざまな現場に対応しています。<br className="hidden md:block" />
            作業の様子は
            <a
              href="https://www.instagram.com/cleanlab800"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>
            でも更新中です。
          </p>
        </div>

        <div
          className="flex gap-4 overflow-x-auto snap-x snap-proximity pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
        >
          {works.map(work => (
            <article
              key={work.id}
              className="shrink-0 w-64 md:w-72 snap-start bg-white border border-sky-lighter rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1 h-5 rounded-full bg-navy inline-block"></span>
                  <h3 className="font-black text-navy text-base">{work.title}</h3>
                </div>
                <p className="text-sm text-navy/70 leading-relaxed">{work.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-navy/40 md:hidden">← スワイプで見る →</p>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/cleanlab800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-bold px-8 py-3.5 rounded-full hover:bg-navy hover:text-white transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagramで実績をもっと見る
          </a>
        </div>

      </div>
    </section>
  )
}
