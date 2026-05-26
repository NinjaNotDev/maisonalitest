import { Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-auto bg-espresso text-warm-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold text-warm-100">Maison Ali</h3>
            <p className="mt-1 text-sm font-light tracking-[0.2em] text-caramel">
              eat. drink. belong.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-warm-300">
              Cafe &amp; Eatery estetik di Sidoarjo dengan suasana cozy, area
              outdoor pemandangan sawah, dan menu Western serta kopi terbaik.
              Tempat sempurna untuk nongkrong, bekerja, dan berkumpul bersama
              keluarga.
            </p>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-warm-200">
              Jam Operasional
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-warm-400">Senin</span>
                <span className="text-caramel font-medium">Tutup</span>
              </div>
              <div className="flex justify-between">
                <span className="text-warm-400">Selasa - Minggu</span>
                <span className="font-medium">08:00 - 23:00</span>
              </div>
            </div>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-warm-200">
              Ikuti Kami
            </h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/maisonali.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-warm-800 hover:text-warm-100"
              >
                <Instagram className="size-5 text-caramel" />
                <span>@maisonali.id</span>
              </a>
              <a
                href="https://wa.me/628133190434"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-warm-800 hover:text-warm-100"
              >
                <MessageCircle className="size-5 text-caramel" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-warm-800 pt-6 text-center text-xs text-warm-500">
          &copy; 2026 Maison Ali Caf&eacute;. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
