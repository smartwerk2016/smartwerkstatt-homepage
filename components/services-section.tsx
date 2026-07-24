import { ArrowRight, Laptop, Monitor, Smartphone, Tablet } from "lucide-react"
import { SERVICES } from "@/lib/site-data"
import { SectionLabel } from "@/components/section-label"

const ICONS = [Smartphone, Tablet, Laptop, Monitor]

export function ServicesSection() {
  return (
    <section id="leistungen" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <SectionLabel index="01">Leistungen</SectionLabel>
        <div className="mt-6 max-w-3xl">
          <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Vier Gerätewelten. Ein Spezialist.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ob das Smartphone vom Tisch gefallen ist, das iPad-Glas gesprungen, das MacBook streikt oder der PC nicht mehr
            hochfährt — Sie haben einen Ansprechpartner. Diagnose und Festpreis vor jeder Reparatur, nur Originalteile.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i]
            return (
              <article
                key={service.title}
                className="flex flex-col rounded-sm border border-border bg-card p-6 transition-colors hover:border-accent sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-secondary text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">/0{i + 1}</span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{service.text}</p>

                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
                  {service.defects.map((def) => (
                    <li key={def} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-foreground/80">
                      <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                      {def}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-sm border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {brand}
                    </span>
                  ))}
                </div>

                <a
                  href="#kontakt"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Kostenschätzung
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
