export default function CTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-black p-8 md:p-12 bg-white">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Let’s build your next spot</h3>
              <p className="mt-2 text-sm opacity-80 max-w-xl">Send a brief and timing. I’ll reply within 24 hours with ideas, scope, and a clean estimate.</p>
            </div>
            <a href="mailto:hello@framedrive.studio" className="inline-block border border-black px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
