import CTA from "./assets/components/CTA"
import H1 from "./assets/components/typography/H1"

export default function DefaultPage() {

    return (
        <main>
            <div className="w-full h-screen px-8 py-16 justify-center items-center gap-10 flex flex-col">
                <img src="src/assets/logo.svg" alt="Logo" className="w-280 h-auto object-cover rounded-lg" />
                <H1>Få din virksomhed til at blomstre online</H1>
                <div>
                    <CTA />
                </div>
            </div>
            
        </main>
    )
}