import { MARQUEE_ITEMS } from "@/lib/site-data"

export function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="overflow-hidden border-b border-border bg-primary py-3.5">
      <div className="sw-marquee flex w-max items-center gap-8" style={{ "--sw-duration": "45s" } as React.CSSProperties}>
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-primary-foreground/85">
            {item}
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
