import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const stressLines = [
  'Stress accumulates.',
  'Heat builds.',
  'Microcracks grow.',
  'Materials fatigue.',
  'Performance drifts.',
  'We engineer against it.',
]

const technologies = [
  ['Thermal Stability', 'Controlled heat behavior under sustained load.'],
  ['Mechanical Endurance', 'Frame and cell architecture built to resist fatigue.'],
  ['Long-Term Performance', 'Output character designed for years, not just day one.'],
  ['Low-Stress Architecture', 'Balanced electrical and material design for calmer operation.'],
]

function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const productRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: productRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, -8])

  return (
    <main className="bg-obsidian text-soft">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 backdrop-blur-sm">
        <div className="text-xl font-semibold tracking-wide">alb enerji</div>
        <nav className="hidden gap-8 text-sm text-soft/70 md:flex">
          <a href="#technology">Technology</a>
          <a href="#factory">Factory</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
        <div className="hero-glow" />
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.19, 1, 0.22, 1] }}
          className="absolute right-[-18vw] top-[12vh] hidden h-[70vh] w-[40vw] rounded-xl border border-white/15 bg-panel-texture shadow-panel lg:block"
        />
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-soft/60">Premium Engineering Solar Technology</p>
          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">Engineered Against Stress.</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-soft/70 md:text-2xl">Long-term stability driven by precision engineering.</p>
          <a href="#story" className="mt-12 inline-block rounded-full border border-white/30 px-8 py-3 text-sm uppercase tracking-[0.2em] transition hover:border-white/70 hover:bg-white/10">Discover the Technology</a>
        </motion.div>
      </section>

      <section id="story" className="space-y-24 bg-[#0a0d13] px-6 py-32 md:space-y-28 md:py-44">
        {stressLines.map((line, i) => (
          <ScrollReveal key={line} delay={i * 0.04}>
            <p className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-soft/90 md:text-6xl">{line}</p>
          </ScrollReveal>
        ))}
      </section>

      <section ref={productRef} className="relative overflow-hidden px-6 py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-soft/50">Engineering Object Visualization</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">Not just higher wattage. Lower stress over time.</h2>
          </ScrollReveal>
          <motion.div style={{ y, rotateX }} className="relative mx-auto h-[520px] w-full max-w-md rounded-2xl border border-white/20 bg-panel-3d shadow-panel">
            <div className="absolute inset-[1px] rounded-2xl border border-white/10" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section id="technology" className="bg-[#07090d] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-14 text-4xl font-semibold md:text-6xl">Technology</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {technologies.map(([title, desc], i) => (
              <ScrollReveal key={title} delay={i * 0.06}>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                  <h4 className="text-2xl font-medium">{title}</h4>
                  <p className="mt-4 max-w-sm text-soft/65">{desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="factory" className="relative overflow-hidden px-6 py-28">
        <div className="absolute inset-0 bg-factory opacity-40" />
        <div className="relative mx-auto max-w-5xl text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-soft/50">Precision Manufacturing Environment</p>
            <h3 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">Controlled production. Stable output. Disciplined engineering.</h3>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact" className="px-6 py-28 text-center">
        <ScrollReveal>
          <h3 className="text-4xl font-semibold md:text-6xl">Performance needs discipline.</h3>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-soft px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-obsidian">Explore Products</button>
            <button className="rounded-full border border-white/35 px-8 py-3 text-sm font-medium uppercase tracking-[0.15em]">Contact Alb Enerji</button>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
