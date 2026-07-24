import { cn } from "@/lib/utils"

export function Logo({
  className,
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-sm",
          onDark ? "bg-accent text-primary" : "bg-primary text-primary-foreground",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="2.5" width="12" height="19" rx="2.2" />
          <circle cx="12" cy="12" r="3.1" />
          <path d="M12 7.6v1.3M12 15.1v1.3M7.6 12h1.3M15.1 12h1.3" strokeLinecap="round" />
        </svg>
      </span>
      <span className={cn("font-display text-xl font-extrabold tracking-tight", onDark ? "text-background" : "text-foreground")}>
        smart<span className="text-accent">werk</span>
      </span>
    </span>
  )
}
