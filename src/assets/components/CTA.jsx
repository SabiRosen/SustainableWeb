export default function CTA({ label = "KONTAKT" }) {

    return (
        <button style={{ fontFamily: "'Unbounded', sans-serif" }} className="bg-cta border-[5px] text-secondary border-text rounded-tl-none rounded-tr-4xl rounded-bl-4xl rounded-br-none py-2 px-8 font-bold min-w-40">
            {label}
        </button>
    )
}