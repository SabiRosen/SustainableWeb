export default function CTA({ label = "KONTAKT" }) {
    return (
        <div 
            className="rounded-tl-none rounded-tr-4xl rounded-bl-4xl rounded-br-none"
            style={{ 
                animation: 'glowPulse 3s ease-in-out infinite'
            }}>
            <button 
                style={{ 
                    fontFamily: "'Unbounded', sans-serif",
                    fontSize: 'clamp(14px, 2.5vw, 17px)',
                    padding: 'clamp(0.8rem, 2.5vw, 1rem) clamp(1.2rem, 6vw, 3rem)',
                    minWidth: 'clamp(9rem, 20.5vw, 13rem)'
                }} 
                className="bg-cta border-3 text-secondary border-text rounded-tl-none rounded-tr-4xl rounded-bl-4xl rounded-br-none font-bold transition-transform duration-300 ease-out hover:scale-110 cursor-pointer">
                {label}
            </button>
        </div>
    )
}