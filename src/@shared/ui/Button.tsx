import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text" | "accent" | "danger";
  size?: "large" | "medium" | "small";
  title: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  skewed?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = "contained",
      size = "medium",
      title,
      startIcon,
      endIcon,
      fullWidth = false,
      skewed = false,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    // Base styles - brutalist foundation
    const baseStyles =
      "font-black uppercase tracking-wider transition-all inline-flex items-center justify-center gap-3 border-slate-900";

    // Size variants
    const sizeStyles = {
      small: "px-4 py-2 text-sm border-4",
      medium: "px-6 py-3 text-base border-6",
      large: "px-10 py-5 text-2xl border-8",
    };

    // Variant styles with brutalist shadows and colors
    const variantStyles = {
      contained: `
        bg-slate-900 text-slate-50 
        shadow-[6px_6px_0_0_rgba(15,23,42,1)]
        hover:shadow-[8px_8px_0_0_rgba(79,70,229,0.6)]
        hover:bg-indigo-600
        active:shadow-[4px_4px_0_0_rgba(15,23,42,1)]
        active:translate-x-1 active:translate-y-1
      `,
      outlined: `
        bg-slate-50 text-slate-900 
        shadow-[6px_6px_0_0_rgba(15,23,42,1)]
        hover:bg-slate-900 hover:text-slate-50
        hover:shadow-[8px_8px_0_0_rgba(15,23,42,1)]
        active:shadow-[4px_4px_0_0_rgba(15,23,42,1)]
        active:translate-x-1 active:translate-y-1
      `,
      text: `
        bg-transparent text-slate-900 border-transparent
        hover:bg-slate-100 hover:border-slate-900
        active:bg-slate-200
      `,
      accent: `
        bg-indigo-600 text-slate-50
        shadow-[6px_6px_0_0_rgba(15,23,42,1)]
        hover:shadow-[8px_8px_0_0_rgba(79,70,229,0.8)]
        hover:bg-indigo-700
        active:shadow-[4px_4px_0_0_rgba(15,23,42,1)]
        active:translate-x-1 active:translate-y-1
      `,
      danger: `
        bg-rose-400 text-slate-900
        shadow-[6px_6px_0_0_rgba(15,23,42,1)]
        hover:shadow-[8px_8px_0_0_rgba(244,63,94,0.6)]
        hover:bg-rose-500
        active:shadow-[4px_4px_0_0_rgba(15,23,42,1)]
        active:translate-x-1 active:translate-y-1
      `,
    };

    // Disabled styles
    const disabledStyles = disabled
      ? "opacity-50 cursor-not-allowed shadow-none hover:shadow-none pointer-events-none"
      : "cursor-pointer";

    // Skewed transform
    const skewStyles = skewed ? "-skew-x-3" : "";
    const skewContentStyles = skewed ? "skew-x-3" : "";

    // Width
    const widthStyles = fullWidth ? "w-full" : "";

    // Combine all styles
    const buttonClassName = `
      ${baseStyles}
      ${sizeStyles[size]}
      ${variantStyles[variant]}
      ${disabledStyles}
      ${skewStyles}
      ${widthStyles}
      ${className}
    `
      .trim()
      .replace(/\s+/g, " ");

    return (
      <button
        ref={ref}
        disabled={disabled}
        {...props}
        className={buttonClassName}
      >
        <span
          className={`flex items-center justify-center gap-3 ${skewContentStyles}`}
        >
          {startIcon && <span className="shrink-0">{startIcon}</span>}
          <span>{title}</span>
          {endIcon && <span className="shrink-0">{endIcon}</span>}
        </span>
      </button>
    );
  }
);

export default Button;
