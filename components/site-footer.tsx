import { Wrench, MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
                smartwerk
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Ihr Spezialist für Handy-, Tablet- und MacBook-Reparatur – direkt vor Ort in Waiblingen.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Marktgasse 7, 71332 Waiblingen
              </li>
              <li>
                <a href="tel:+4971511671113" className="flex items-center gap-2 hover:text-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  +49 7151 1671113
                </a>
              </li>
              <li>
                <a href="mailto:mail@smartwerkstatt.net" className="flex items-center gap-2 break-all hover:text-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  mail@smartwerkstatt.net
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Öffnungszeiten
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4">
                <span>Mo</span>
                <span className="font-medium text-amber-500">Ruhetag</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Di – Fr</span>
                <span className="text-right">
                  10:00 – 13:30 Uhr<br />
                  14:30 – 18:00 Uhr
                </span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sa</span>
                <span>10:00 – 14:00 Uhr</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>So & Feiertage</span>
                <span>Geschlossen</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} smartwerk. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Impressum</a>
            <a href="#" className="hover:text-foreground">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}