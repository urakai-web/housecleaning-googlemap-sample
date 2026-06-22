export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-sky-light py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">

        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-navy/50 uppercase mb-3">Service Area</span>
          <h2 className="text-2xl md:text-3xl font-black text-navy">
            札幌市を中心に対応しています
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-navy"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <p className="text-navy/80 leading-relaxed text-base md:text-lg text-center">
            白石区を拠点に、札幌市内・近郊エリアのご依頼に対応しています。<br className="hidden md:block" />
            対応可否は作業内容により異なりますので、まずはお気軽にご相談ください。
          </p>
        </div>

      </div>
    </section>
  )
}
