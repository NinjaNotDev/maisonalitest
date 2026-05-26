'use client'

import { MapPin, Clock, Phone, Instagram } from 'lucide-react'

const infoItems = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Jl. Raya Ponti No.8, Wismasarinadi, Magersari, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61212',
  },
  {
    icon: Clock,
    label: 'Jam Buka',
    value: 'Senin: Tutup\nSelasa - Minggu: 08:00 - 23:00',
    multiline: true,
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+628133190434',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@maisonali.id',
  },
]

export default function LocationSection() {
  return (
    <section id="lokasi" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-espresso sm:text-4xl">
            Kunjungi Kami
          </h2>
          <div className="cafe-divider mx-auto mt-4 max-w-xs">
          </div>
        </div>

        {/* Info + Map Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info Cards */}
          <div className="space-y-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-latte bg-cream p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-mocha text-warm-100">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-warm-500">
                    {item.label}
                  </p>
                  {item.multiline ? (
                    item.value.split('\n').map((line, i) => (
                      <p
                        key={i}
                        className="text-sm font-medium text-espresso"
                      >
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm font-medium text-espresso">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-xl border border-latte h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8!2d112.72!3d-7.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMaison+Ali+Cafe!5e0!3m2!1sid!2sid!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Maison Ali Cafe"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
