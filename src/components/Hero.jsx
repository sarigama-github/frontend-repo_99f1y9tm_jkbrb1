import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[560px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto max-w-6xl w-full px-6 pb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[0.95]">
            Black & White
            <span className="block">Action Sports Cinematics</span>
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg text-black/70">
            Motorcross. Motorcycles. Snowmobiles. Drift. High-energy visuals crafted for brands and athletes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="inline-block border border-black px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">See Work</a>
            <a href="#contact" className="inline-block px-5 py-3 text-sm font-semibold uppercase tracking-wider underline underline-offset-4">Book a Shoot</a>
          </div>
        </div>
      </div>
    </section>
  )
}
