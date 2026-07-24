import { BadgeCheck, Clock, Lock, ShieldCheck, Tag, Handshake } from "lucide-react"
import { BENEFITS } from "@/lib/site-data"

const ICONS = [Tag, BadgeCheck, Clock, ShieldCheck, Lock, Handshake]

export function BenefitsSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid overflow-hidden rounded-sm border border-border bg-card sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={benefit.title}
                className="border-b border-r border-border p-6 last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+1)]:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">/0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
