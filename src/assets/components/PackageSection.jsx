// src/assets/components/PackageSection.jsx
import H2 from "./typography/H2"
import P from "./typography/P"
import CTA from "./CTA"
import { Link } from "react-router-dom"
import spireIcon from '../icons/spiren.svg'
import evigronIcon from '../icons/eviggron.svg'
import H1 from "./typography/H1"

export default function PackageSection() {


  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-16 w-11/12 mx-auto my-3 md:my-10">
      
      <H1>Pakkeløsninger</H1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">

            {/* Spiren card */}
            <div className="p-1.25 rounded-tr-[6.25rem] rounded-bl-[6.25rem] w-full max-w-105"
                style={{ background: 'linear-gradient(to bottom right, #670627, #FFF2B1)' }}>
                <div className="flex flex-col items-center gap-[clamp(1rem,4vw,2.5rem)] p-[clamp(1.8rem,4vw,2.5rem)] rounded-tr-[6.25rem] rounded-bl-[6.25rem] bg-secondary w-full">
                <img 
                    src={spireIcon}
                    alt="Spiren ikon" 
                    style={{ width: 'clamp(3rem, 8vw, 5rem)', height: 'clamp(3rem, 8vw, 5rem)' }} 
                    loading="lazy"
                    />
                <H2>SPIREN</H2>
                <P>Få en professionel hjemmeside bygget fra bunden, skræddersyet til din virksomhed og dine mål. Vi tager dig hele vejen fra idé til færdigt website.</P>
                </div>
            </div>

            {/* Eviggrøn card */}
            <div className="p-1.25 rounded-tr-[6.25rem] rounded-bl-[6.25rem] w-full max-w-105"
                style={{ background: 'linear-gradient(to bottom right, #670627, #FFF2B1)' }}>
                <div className="flex flex-col items-center gap-[clamp(1rem,4vw,2.5rem)] p-[clamp(1.8rem,4vw,2.5rem)] rounded-tr-[6.25rem] rounded-bl-[6.25rem] bg-secondary w-full">
                    <img 
                    src={evigronIcon}
                    alt="Eviggrøn ikon" 
                    style={{ width: 'clamp(3rem, 8vw, 5rem)', height: 'clamp(3rem, 8vw, 5rem)' }} 
                    loading="lazy"
                    />
                <H2>EVIGGRØN</H2>
                <P>Har du allerede en hjemmeside? Vi optimerer design, hastighed og synlighed, så du får en bedre performance og flere kunder ud af det, du allerede har.</P>
                </div>
            </div>

            <Link to="/Services">
                <CTA label="SE PAKKER" />
            </Link>

        </div>

    </div>
  )
}