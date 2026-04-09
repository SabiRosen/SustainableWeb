import CTA from "./assets/components/CTA"
import PackageSection from "./assets/components/PackageSection"
import H1 from "./assets/components/typography/H1"
import VisionCasesSection from "./assets/components/VisionCasesSection"
import Focus from "./assets/components/Focus"
import H4 from "./assets/components/typography/H4"

export default function DefaultPage() {

    return (
        <main>
            <div className="w-full h-screen px-8 py-16 justify-start items-center gap-10 flex flex-col">
                <img src="src/assets/logo.svg" alt="Logo" className="w-280 h-auto object-cover rounded-lg" />
                <H1>Få din virksomhed til at blomstre online</H1>
                <div className="mb-10">
                    <CTA />
                </div>
                <div className="flex w-full justify-end items-center gap-3">
                    <H4>Se hvad vi kan tilbyde</H4>
                    <img src="src/assets/icons/arrow.svg" alt="pilned" className="w-5"/>
                </div>
            </div>
            
            <PackageSection />

            <Focus />

            <VisionCasesSection />

        </main>
    )
}