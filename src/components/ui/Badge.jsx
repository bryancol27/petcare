const statusTone = {
  confirmed: "success",
  pending: "warning",
  cancelled: "error",
  blocked: "neutral",
};

export function Badge({ children, tone = "neutral", dot = false, className = "" }) {
  return (
    <span className={`ui-badge ui-badge--${tone} ${className}`.trim()}>
      {dot && <span className="ui-badge-dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

export function StatusBadge({ status, children, className = "" }) {
  const label = children ?? {
    confirmed: "Confirmada",
    pending: "Pendiente",
    cancelled: "Cancelada",
    blocked: "Bloqueada",
  }[status] ?? status;

  return <Badge tone={statusTone[status] ?? "neutral"} dot className={className}>{label}</Badge>;
}
