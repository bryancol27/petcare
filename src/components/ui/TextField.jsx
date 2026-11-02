import { useId } from "react";

export function TextField({ label, hint, error, required = false, id, className = "", ...props }) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const descriptionId = `${fieldId}-description`;

  return (
    <div className={`ui-field ${className}`.trim()}>
      <label className="ui-field-label" htmlFor={fieldId}>
        {label}{required && <span className="ui-field-required" aria-hidden="true"> *</span>}
      </label>
      <input
        className="ui-input"
        id={fieldId}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error || hint ? descriptionId : undefined}
        {...props}
      />
      {(error || hint) && (
        <p className={error ? "ui-field-error" : "ui-field-hint"} id={descriptionId}>
          {error || hint}
        </p>
      )}
    </div>
  );
}

export function SelectField({ label, hint, error, required = false, id, children, className = "", ...props }) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const descriptionId = `${fieldId}-description`;

  return (
    <div className={`ui-field ${className}`.trim()}>
      <label className="ui-field-label" htmlFor={fieldId}>
        {label}{required && <span className="ui-field-required" aria-hidden="true"> *</span>}
      </label>
      <select
        className="ui-select"
        id={fieldId}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error || hint ? descriptionId : undefined}
        {...props}
      >
        {children}
      </select>
      {(error || hint) && (
        <p className={error ? "ui-field-error" : "ui-field-hint"} id={descriptionId}>
          {error || hint}
        </p>
      )}
    </div>
  );
}
