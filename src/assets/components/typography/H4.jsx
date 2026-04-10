export default function H4({ children }) {
  return (
    <h4 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(14px, 2vw, 20px)", fontWeight: "400", color: "var(--color-text)" }}>
      {children}
    </h4>
  )
}