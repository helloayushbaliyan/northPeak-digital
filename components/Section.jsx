/**
 * Section — Semantic section wrapper with consistent vertical spacing
 * and optional dark background variant.
 *
 * @param {"light" | "dark"} variant
 */
export default function Section({
  children,
  id,
  variant = "light",
  className = "",
}) {
  const backgrounds = {
    light: "bg-white",
    dark: "bg-dark text-white",
  };

  return (
    <section
      id={id}
      className={`py-(--spacing-section-sm) lg:py-(--spacing-section) ${backgrounds[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
