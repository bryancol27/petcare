export function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      className={`ui-button ui-button--${variant} ${size !== "medium" ? `ui-button--${size}` : ""} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
