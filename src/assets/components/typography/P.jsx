export default function P({ children, className }) {
  return (
    <p className={className} style={{ fontFamily: "Arial, sans-serif", fontSize: "24px", fontWeight: "400", color: "var(--color-text)" }}>
      {children}
    </p>
  )
}