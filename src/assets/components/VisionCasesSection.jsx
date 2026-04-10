// src/assets/components/VisionCasesSection.jsx
import { useNavigate } from "react-router-dom"
import H1 from "./typography/H1"
import P from "./typography/P"
import CTA from "./CTA"
import { Link } from "react-router-dom"

export default function VisionCasesSection() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col md:flex-row w-11/12 mx-auto my-16 rounded-tr-[6.25rem] rounded-bl-[6.25rem] overflow-hidden bg-secondary">

            {/* Vision side */}
            <div className="flex flex-col items-center gap-7 bg-primary rounded-tr-[6.25rem] border-secondary border-20 rounded-bl-[6.25rem] p-[clamp(2rem,6vw,3.75rem)] w-full md:w-1/2">
                <H1>Vision</H1>
                <P>Vi er et webbureau, der brænder for at skabe professionelle hjemmesider, der er skræddersyet til hver enkelt kunde og deres niche.</P>
                <P>Vores mål er at levere løsninger, der ikke bare ser godt ud, men også reelt skaber værdi og vækst. Samtidig tænker vi langsigtet i alt, hvad vi laver.</P>
                <P>Fra effektive, lette løsninger til ansvarlige valg i vores digitale arbejde, så både vores kunder og omgivelserne får mest muligt ud af det.</P>
                <div className="place-self-center mt-auto">
                    <Link to="OmOS">
                        <CTA label="OM OS" />
                    </Link>
                    
                </div>
            </div>

            {/* Cases side */}
            <div className="flex flex-col items-center gap-7 p-[clamp(2rem,6vw,3.75rem)] w-full md:w-1/2">
                <H1>Cases</H1>
                <div className="grid grid-cols-2 gap-[clamp(1rem,3vw,1.75rem)]">
                    {[
                        { src: "/src/assets/images/havblink.svg", alt: "Havblink" },
                        { src: "/src/assets/images/kaffekanden.svg", alt: "Kaffekanden" },
                        { src: "/src/assets/images/steno.svg", alt: "Steno" },
                        { src: "/src/assets/images/sisters.svg", alt: "Søstrene Grene" },
                    ].map((img, index) => (
                        <div key={index} className="rounded-full border border-text overflow-hidden"
                            style={{ width: 'clamp(100px, 18vw, 175px)', height: 'clamp(100px, 18vw, 175px)' }}>
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy"/>
                        </div>
                    ))}
                </div>
        
                <div className="place-self-center mt-auto">
                    <Link to="/Cases">
                        <CTA label="SE FLERE"/>
                    </Link>
                    
                </div>
            </div>

        </div>
    )
}