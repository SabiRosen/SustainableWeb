export default function CTA({ label = "KONTAKT" }) {
    return (
        <div 
            className="rounded-tl-none rounded-tr-4xl rounded-bl-4xl rounded-br-none"
            style={{ 
    boxShadow: `
        0 0 10px 2px rgba(255, 242, 177, 0.4),
        0 0 30px 8px rgba(255, 242, 177, 0.2),
        0 0 60px 15px rgba(255, 242, 177, 0.08),
        0 0 100px 25px rgba(255, 242, 177, 0.02)
    `
}}>
            <button 
                style={{ fontFamily: "'Unbounded', sans-serif" }} 
                className="bg-cta border-3 text-secondary border-text rounded-tl-none rounded-tr-4xl rounded-bl-4xl rounded-br-none py-3 px-8 font-bold min-w-50 transition-transform duration-300 ease-out hover:scale-110">
                {label}
            </button>
        </div>
    )
}