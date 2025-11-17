import { useEffect, useRef } from 'react'

const items = [
  'MOTORCROSS', 'MOTORCYCLES', 'SNOWMOBILES', 'DRIFTING', 'COMMERCIAL', 'STORY', 'SPEED', 'PRECISION'
]

export default function Marquee() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    let raf
    const step = () => {
      start -= 0.5
      el.style.transform = `translateX(${start}px)`
      if (Math.abs(start) > el.scrollWidth / 2) start = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="border-y border-black/10 bg-white">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="py-4 will-change-transform" ref={ref}>
          {[...items, ...items, ...items].map((w, i) => (
            <span key={i} className="mx-4 text-xs tracking-[0.3em] font-semibold opacity-80">{w}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
