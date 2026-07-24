const steps = [
  {
    number: "01",
    title: "Kontakt aufnehmen",
    description: "Rufen Sie an oder kommen Sie einfach vorbei und schildern Sie uns das Problem.",
  },
  {
    number: "02",
    title: "Kostenlose Diagnose",
    description: "Wir prüfen Ihr Gerät und erstellen eine unverbindliche Kostenschätzung.",
  },
  {
    number: "03",
    title: "Schnelle Reparatur",
    description: "Viele Reparaturen erledigen wir direkt vor Ort – oft in unter 60 Minuten.",
  },
  {
    number: "04",
    title: "Fertig mit Garantie",
    description: "Sie erhalten Ihr Gerät zurück – geprüft, sauber und mit Garantie auf die Reparatur.",
  },
]

export function ProcessSection() {
  return (
    <section id="ablauf" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">So einfach geht&apos;s</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            In vier Schritten zum reparierten Gerät
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-3xl font-extrabold text-primary/30">{step.number}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-card-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
