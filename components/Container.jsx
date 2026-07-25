/**
 * Container — Max-width wrapper with consistent horizontal padding.
 * Used throughout the site for content width constraints.
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
