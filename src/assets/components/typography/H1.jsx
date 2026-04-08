export default function H1({ children }) {
  return (
    <h1 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "40px", fontWeight: "400", color: "var(--color-text)" }}>
      {children}
    </h1>
  )
}