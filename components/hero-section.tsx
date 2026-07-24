"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Laptop, Monitor, Phone, Smartphone, Tablet, Zap } from "lucide-react"
import { CONTACT } from "@/lib/site-data"

const DEVICES = [
  {
    key: "Smartphone",
    icon: Smartphone,
    defects: ["Display-Bruch", "Akku schwach", "Ladebuchse", "Kamera / Glas", "Wasserschaden", "Software & Viren"],
    overlay: ["Display", "Akku", "Ladebuchse"],
  },
  {
    key: "Tablet",
    icon: Tablet,
    defects: ["Display & Glas", "Akku", "Ladebuchse", "Lautsprecher", "Wasserschaden", "Reinigung"],
    overlay: ["Display", "Akku", "Glas"],
  },
  {
    key: "MacBook",
    icon: Laptop,
    defects: ["Akku-Tausch", "Display", "Tastatur", "Flüssigkeitsschaden", "SSD-Upgrade", "Innenreinigung"],
    overlay: ["Akku", "Display", "Tastatur"],
  },
  {
    key: "PC",
    icon: Monitor,
    defects: ["Startet nicht", "Zu langsam", "Viren / Phishing", "SSD / RAM", "Datenrettung", "Windows neu"],
    overlay: ["Diagnose", "SSD", "Viren"],
  },
]

export function HeroSection() {
  const [active, setActive] = useState(0)
  const device = DEVICES[active]

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="sw-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-20">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-2.5 w-2.5 bg-accent" aria-hidden="true" />
            Smartwerk · Waiblingen &amp; Rems-Murr-Kreis
          </p>

          <h1 className="mt-5 text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Display gerissen? <span className="text-accent">Schnell repariert</span>.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Handy, Tablet oder MacBook —{" "}
            <strong className="font-semibold text-foreground">ein vertrauter Ansprechpartner</strong> in Waiblingen. Klarer
            Festpreis vorab, ausschließlich Originalteile, und ist das Teil auf Lager, oft schon in rund zwei Stunden wieder
            einsatzbereit.
          </p>

          <div className="mt-7 inline-flex w-fit items-center gap-3 rounded-sm border border-border bg-card px-4 py-3">
            <span className="font-semibold text-accent">{CONTACT.rating} ★</span>
            <span className="text-sm text-muted-foreground">
              · <span className="font-semibold text-foreground">{CONTACT.reviewCount}+</span> Google-Bewertungen
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {CONTACT.phone}
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/25 px-6 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              Kostenschätzung
            </a>
          </div>
        </div>

        {/* Right — Diagnose board */}
        <div className="flex items-center">
          <div className="w-full rounded-sm border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground">
                <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
                Diagnose-Board
              </span>
              <span className="font-mono text-xs text-muted-foreground">/0{active + 1}</span>
            </div>

            <div role="tablist" aria-label="Gerät wählen" className="grid grid-cols-4 border-b border-border">
              {DEVICES.map((d, i) => {
                const Icon = d.icon
                const selected = i === active
                return (
                  <button
                    key={d.key}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(i)}
                    className={`flex flex-col items-center gap-1.5 border-r border-border py-4 text-xs font-semibold transition-colors last:border-r-0 ${
                      selected ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    {d.key}
                  </button>
                )
              })}
            </div>

            <div className="grid gap-0 sm:grid-cols-[1.15fr_1fr]">
              <div className="relative aspect-[4/3] border-b border-border sm:border-b-0 sm:border-r">
                <Image
                  src="/hero-repair.png"
                  alt="Smartphone wird mit Präzisionswerkzeug geöffnet und repariert"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover"
                />
                {device.overlay.map((label, i) => (
                  <span
                    key={label}
                    className="absolute flex items-center gap-1.5 bg-card/95 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground shadow-sm"
                    style={{
                      top: `${18 + i * 30}%`,
                      left: i % 2 === 0 ? "8%" : "auto",
                      right: i % 2 === 1 ? "8%" : "auto",
                    }}
                  >
                    <span className="h-2 w-2 bg-accent" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Typische Defekte</p>
                <ul className="mt-3 grid flex-1 gap-2">
                  {device.defects.map((def) => (
                    <li key={def} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                      {def}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="mt-4 inline-flex items-center justify-between gap-2 rounded-sm bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {device.key}-Kostenschätzung
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>Festpreis</span>
              <span>6 Monate Garantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
