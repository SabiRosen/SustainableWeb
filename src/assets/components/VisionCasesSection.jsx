// src/assets/components/VisionCasesSection.jsx
import { useNavigate } from "react-router-dom"
import H1 from "./typography/H1"
import P from "./typography/P"
import CTA from "./CTA"

export default function VisionCasesSection() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-row w-6/7 mx-auto my-16 rounded-tr-[6.25rem] rounded-bl-[6.25rem] overflow-hidden bg-secondary">

            {/* Vision side */}
            <div className="flex flex-col items-center gap-7 bg-primary rounded-tr-[6.25rem] border-secondary border-20 rounded-bl-[6.25rem] p-15 w-1/2">
                <H1>Vision</H1>
                <P>
                    Vi er et webbureau, der brænder for at skabe professionelle hjemmesider, 
                    der er skræddersyet til hver enkelt kunde og deres niche.
                </P>
                <P>
                    Vores mål er at levere løsninger, der ikke bare ser godt ud, men også 
                    reelt skaber værdi og vækst. Samtidig tænker vi langsigtet i alt, hvad vi laver.
                </P>
                <P>
                    Fra effektive, lette løsninger til ansvarlige valg i vores digitale arbejde, 
                    så både vores kunder og omgivelserne får mest muligt ud af det.
                </P>
                <div className="place-self-center mt-auto">
                    <CTA label="OM OS" onClick={() => navigate('/omos')} />
                </div>
            </div>

            {/* Cases side */}
            <div className="flex flex-col items-center gap-7 p-15 w-1/2">
                <H1>Cases</H1>
                <div className="grid grid-cols-2 gap-7">
                    <div className="w-43.75 h-43.75 rounded-full border border-text overflow-hidden">
                        <img src="/src/assets/cases/kaffekanden.png" alt="Kaffekanden" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-43.75 h-43.75 rounded-full border border-text overflow-hidden">
                        <img src="/src/assets/logo.svg" alt="Webloom" className="w-full h-full object-contain p-4" />
                    </div>
                    <div className="w-43.75 h-43.75 rounded-full border border-text overflow-hidden">
                        <img src="/src/assets/cases/havblink.png" alt="Havblink" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-43.75 h-43.75 rounded-full border border-text overflow-hidden">
                        <img src="/src/assets/cases/sostrene.png" alt="Søstrene Grene" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="place-self-center mt-auto">
                    <CTA label="SE FLERE" onClick={() => navigate('/cases')} />
                </div>
            </div>

        </div>
    )
}