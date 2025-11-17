export default function Work() {
  const projects = [
    { title: 'Drift Campaign', tag: 'Automotive', thumb: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Backcountry Lines', tag: 'Snowmobiles', thumb: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Night Moto', tag: 'Motorcross', thumb: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Urban Ride', tag: 'Motorcycles', thumb: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Selected Work</h2>
          <a href="#contact" className="text-sm underline underline-offset-4">Request Reel</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <a key={p.title} href="#" className="group block">
              <div className="aspect-[4/5] bg-black/5 overflow-hidden">
                <img src={p.thumb} alt="" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{p.title}</p>
                  <p className="text-xs opacity-70">{p.tag}</p>
                </div>
                <span className="text-xs uppercase tracking-widest">Play →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
