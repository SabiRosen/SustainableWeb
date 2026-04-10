import { lazy } from "react"

const Player = lazy(() =>
  import("@lottiefiles/react-lottie-player").then(m => ({
    default: m.Player
  }))
)
import logoAnimation from './assets/animations/bi-ani-2.json' 
import CTA from "./assets/components/CTA"
import PackageSection from "./assets/components/PackageSection"
import H1 from "./assets/components/typography/H1"
import VisionCasesSection from "./assets/components/VisionCasesSection"
import Focus from "./assets/components/Focus"
import BeeTrail from "./assets/components/BeeTrail"
import { Link } from "react-router-dom"
import arrowIcon from './assets/icons/arrow.svg'

export default function DefaultPage() {
    return (
        <main>
            <div className="w-full min-h-screen px-8 pt-20 pb-16 flex flex-col justify-center md:justify-start items-center gap-12 md:gap-6">
    
                {/* Animated logo */}
                <Player
                    autoplay
                    loop
                    src={logoAnimation}
                  style={{ 
                        width: 'clamp(250px, 100vw, 1200px)', 
                        height: 'auto',
                        marginTop: 'clamp(-80px, -8vw, -20px)',
                        marginBottom: 'clamp(-80px, -8vw, -20px)',
                    }}
                />

                <H1 className="text-center">Få din virksomhed til at blomstre online</H1>
                
                <Link to="/kontakt">
                    <CTA />
                </Link>

                <div className="flex w-full justify-end items-center gap-3 mt-auto md:mt-0 pb-10 md:py-0"
                    style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <p className="text-lg font-medium text-text">Se hvad vi kan tilbyde</p>
                    <img src={arrowIcon} alt="pilned" className="w-5" loading="lazy" />
                </div>

            </div>

            <PackageSection />
            <Focus />
            <BeeTrail />
            <VisionCasesSection />
        </main>
    )
}