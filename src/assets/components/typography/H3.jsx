export default function H3({ children }) {
  return (
    <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(16px, 2.5vw, 24px)", fontWeight: "400", color: "var(--color-text)" }}>
      {children}
    </h3>
  )
}