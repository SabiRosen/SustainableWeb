export default function H2({ children }) {
  return (
    <h2 style={{ fontFamily: "'Unbounded', sans-serif", 
    fontSize: "clamp(20px, 3vw, 36px)", 
    fontWeight: "400", 
    color: "var(--color-text)" }}>
      {children}
    </h2>
  )
}
