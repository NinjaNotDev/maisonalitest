'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const scrollProgress = -rect.top / window.innerHeight
        setOffset(Math.min(scrollProgress * 40, 40))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="beranda"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src="/cafe-images/hero.png"
          alt="Maison Ali Café interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <span className="hero-text-shadow mb-4 inline-block rounded-full border border-warm-300/40 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-warm-200 backdrop-blur-sm">
          Cafe &amp; Eatery
        </span>

        <h1 className="hero-text-shadow mt-4 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
          Maison Ali
        </h1>

        <p className="hero-text-shadow mt-3 text-xl font-light tracking-[0.25em] text-caramel sm:text-2xl">
          eat. drink. belong.
        </p>

        <p className="hero-text-shadow mx-auto mt-6 max-w-lg text-sm leading-relaxed text-warm-200 sm:text-base">
          Temukan ketenangan di tengah kesibukan kota Sidoarjo. Tempat nyaman
          untuk nongkrong, bekerja, meeting, atau sekadar menikmati kopi
          terbaik bersama keluarga tercinta.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-mocha text-warm-100 hover:bg-espresso px-8 text-sm"
          >
            <a href="#menu">Lihat Menu</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-warm-300/40 bg-white/10 text-warm-100 backdrop-blur-sm hover:bg-white/20 hover:text-white px-8 text-sm"
          >
            <a href="#lokasi">Lokasi Kami</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#tentang"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float text-warm-200/60 transition-colors hover:text-warm-200"
        aria-label="Scroll ke bawah"
      >
        <ChevronDown className="size-6" />
      </a>
    </section>
  )
}
