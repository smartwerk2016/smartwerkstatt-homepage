import { MapPin, Phone, Mail, Clock } from "lucide-react"

const hours = [
  { day: "Montag – Freitag", time: "10:00 – 18:30 Uhr" },
  { day: "Samstag", time: "10:00 – 14:00 Uhr" },
  { day: "Sonntag", time: "Geschlossen" },
]

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Kontakt</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Einfach kontaktieren
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Kommen Sie vorbei oder rufen Sie an und erhalten Sie unkompliziert und unverbindlich
            eine Kostenschätzung.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-card-foreground">Anschrift</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Marktgasse 7, 71332 Waiblingen
                    <br />
                    (im Baumhof) neben Cafe Bar Sachsenheimer
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+4971511671113"
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display font-bold text-card-foreground">Telefon</h3>
                <p className="mt-1 text-sm text-muted-foreground group-hover:text-primary">
                  +49 7151 1671113
                </p>
              </a>

              <a
                href="mailto:mail@smartwerkstatt.net"
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display font-bold text-card-foreground">E-Mail</h3>
                <p className="mt-1 break-all text-sm text-muted-foreground group-hover:text-primary">
                  mail@smartwerkstatt.net
                </p>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-card-foreground">Öffnungszeiten</h3>
            </div>
            <ul className="mt-6 divide-y divide-border">
              {hours.map((row) => (
                <li key={row.day} className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-medium text-foreground">{row.day}</span>
                  <span className="text-sm text-muted-foreground">{row.time}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:+4971511671113"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
