// src/assets/components/PackageSection.jsx
import { useNavigate } from "react-router-dom"
import H2 from "./typography/H2"
import P from "./typography/P"
import CTA from "./CTA"

export default function PackageSection() {
  const navigate = useNavigate()
/* PAKKER PÅ FORSIDEN! */
  return (
    <div className="flex flex-row items-center justify-center gap-16 w-6/7 mx-auto my-16">
      
      {/* Spiren card */}
      <div className="p-1.25 rounded-tr-[6.25rem] rounded-bl-[6.25rem]"
        style={{ background: 'linear-gradient(to bottom right, #670627, #FFF2B1)' }}>
        <div className="flex flex-col items-center gap-6 p-10 rounded-tr-[6.25rem] rounded-bl-[6.25rem] bg-secondary w-105">
          <img src="/src/assets/icons/spiren.svg" alt="Spiren ikon" className="w-20 h-20" />
          <H2>SPIREN</H2>
          <P>Få en professionel hjemmeside bygget fra bunden, skræddersyet til din virksomhed og dine mål. Vi tager dig hele vejen fra idé til færdigt website.</P>
        </div>
      </div>

      {/* Eviggrøn card */}
      <div className="p-1.25 rounded-tr-[6.25rem] rounded-bl-[6.25rem]"
        style={{ background: 'linear-gradient(to bottom right, #670627, #FFF2B1)' }}>
        <div className="flex flex-col items-center gap-6 p-10 rounded-tr-[6.25rem] rounded-bl-[6.25rem] bg-secondary w-105">
          <img src="/src/assets/icons/eviggron.svg" alt="Eviggrøn ikon" className="w-20 h-20" />
          <H2>EVIGGRØN</H2>
          <P>Har du allerede en hjemmeside? Vi optimerer design, hastighed og synlighed, så du får en bedre performance og flere kunder ud af det, du allerede har.</P>
        </div>
      </div>

      {/* Button */}
      <CTA label="SE PAKKER" onClick={() => navigate('/services')} />

    </div>
  )
}