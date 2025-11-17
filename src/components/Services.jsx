export default function Services() {
  const services = [
    { title: 'Commercial Spots', desc: 'High-energy product and brand films built for performance media.' },
    { title: 'Athlete Features', desc: 'Cinematic profiles and documentary-style storytelling.' },
    { title: 'Event Coverage', desc: 'Races, drift days, and launches captured with multi-cam setups.' },
    { title: 'Post-Production', desc: 'Edit, color, mix, and delivery across channels.' },
  ]

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="border-t border-black/10 pt-4">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
