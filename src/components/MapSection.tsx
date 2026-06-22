export default function MapSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-black text-navy">アクセス</h2>
          <p className="mt-2 text-navy/60 text-sm">
            〒920-8577 石川県金沢市広坂1丁目1-1
          </p>
        </div>
      </div>
      <div className="w-full h-80 md:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.5!2d136.6565736!3d36.5610485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff83380f54c1b35%3A0xb2eb719ce9661f1a!2z6YeR5rKi5biC5b255omA!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="金沢クリーン 所在地"
        />
      </div>
    </section>
  )
}
