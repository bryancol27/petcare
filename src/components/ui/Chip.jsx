export function Chip({ children, active = false, className = "", ...props }) {
  return (
    <button
      className={`ui-chip ${className}`.trim()}
      type="button"
      aria-pressed={active}
      {...props}
    >
      {children}
    </button>
  );
}
