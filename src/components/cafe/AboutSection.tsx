'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Sofa, TreePine, Users } from 'lucide-react'

const features = [
  {
    icon: Sofa,
    title: 'Cozy Interior',
    description: 'Maison Ali Sidoarjo yang mengusung konsep modern, aesthetic glass house, mewah, dan sangat cozy.,
  },
  {
    icon: TreePine,
    title: 'Outdoor View',
    description: 'Suasana santai sore hari, area semi-outdoor yang sejuk.',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Adanya mini playground di area luar agar anak-anak tidak bosan.',
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="section-padding bg-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-espresso sm:text-4xl">
            Tentang Kami
          </h2>
          <div className="cafe-divider mx-auto mt-4 max-w-xs">
          </div>
        </div>

        {/* Two Column Layout */}
        <div
          className={`grid items-center gap-10 md:grid-cols-2 transition-all duration-700 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/cafe-images/outdoor.png"
              alt="Interior cozy Maison Ali Café"
              width={672}
              height={384}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-espresso">
              Cerita Kami : Maison Ali Sidoarjo
            </h3>
            <p className="leading-relaxed text-warm-700">
              Selamat datang di Maison Ali, rumah bagi para pencinta kuliner yang mendambakan kehangatan rasa dan kenyamanan suasana di jantung kota Sidoarjo.
            </p>
            <p className="leading-relaxed text-warm-700">
              Berawal dari sebuah mimpi untuk menghadirkan tempat berkumpul yang hangat layaknya di rumah sendiri (Maison berarti Rumah dalam bahasa Prancis), Maison Ali hadir sebagai perpaduan sempurna antara cita rasa autentik dan sentuhan modern. Kami percaya bahwa setiap hidangan memiliki cerita, dan setiap momen makan bersama adalah sebuah perayaan.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group rounded-xl border border-latte bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-latte/60 text-mocha transition-colors group-hover:bg-mocha group-hover:text-warm-100">
                <feature.icon className="size-6" />
              </div>
              <h4 className="mb-2 text-lg font-semibold text-espresso">
                {feature.title}
              </h4>
              <p className="text-sm leading-relaxed text-warm-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
