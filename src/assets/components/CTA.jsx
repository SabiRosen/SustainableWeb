export default function CTA({ label = "KONTAKT" }) {

    return (
        <button style={{ fontFamily: "'Unbounded', sans-serif" }} className="bg-cta border-4 text-secondary border-text rounded-tl-none rounded-tr-4xl rounded-bl-4xl rounded-br-none py-3 px-8 font-bold min-w-50">
            {label}
        </button>
    )
}