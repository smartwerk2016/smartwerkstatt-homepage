import { cn } from "@/lib/utils"

export function SectionLabel({
  children,
  index,
  onDark = false,
}: {
  children: React.ReactNode
  index: string
  onDark?: boolean
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-xs uppercase tracking-widest",
        onDark ? "text-background/70" : "text-muted-foreground",
      )}
    >
      <span className="h-2.5 w-2.5 bg-accent" aria-hidden="true" />
      {children} <span className={onDark ? "text-background/50" : "text-muted-foreground/70"}>/{index}</span>
    </p>
  )
}
