import { Player } from '@lottiefiles/react-lottie-player'
import greenhostingAnimation from '../animations/greenhosting.json'
import performanceAnimation from '../animations/performance.json'
import seoAnimation from '../animations/seo.json'
import H2 from './typography/H2'
import H1 from './typography/H1'
import P from './typography/P'

export default function Focus() {
  return (
    <div className="flex flex-col items-center w-10/12 md:w-11/12 mx-auto my-16">
      
      <H1>Fokuspunkter</H1>

      {/* Greenhosting */}
      <div className="flex flex-col md:flex-row items-center w-full gap-[clamp(1rem, 4vw, 2.5rem)] py-[clamp(1rem, 4vw, 2.5rem)]">
        <Player autoplay loop src={greenhostingAnimation} style={{ width: 'clamp(150px, 25vw, 300px)', height: 'clamp(150px, 25vw, 300px)', flexShrink: 0 }} />
        <div className="flex flex-col gap-4 flex-1">
          <H2>Greenhosting</H2>
          <P>Vi hoster din hjemmeside på servere drevet af vedvarende energi. Det reducerer CO₂-aftrykket uden at gå på kompromis med stabilitet og drift.</P>
        </div>
      </div>

      {/* Performance */}
      <div className="flex flex-col md:flex-row-reverse items-center w-full gap-[clamp(1rem, 4vw, 2.5rem)] py-[clamp(1rem, 4vw, 2.5rem)]">
        <Player autoplay loop src={performanceAnimation} style={{ width: 'clamp(150px, 25vw, 300px)', height: 'clamp(150px, 25vw, 300px)', flexShrink: 0 }} />
        <div className="flex flex-col gap-4 flex-1">
          <H2>Performance</H2>
          <P>Vi optimerer din hjemmeside, så den loader hurtigt og kører effektivt. Det giver en bedre brugeroplevelse og et lavere energiforbrug.</P>
        </div>
      </div>

      {/* SEO */}
      <div className="flex flex-col md:flex-row items-center w-full gap-[clamp(1rem, 4vw, 2.5rem)] py-[clamp(1rem, 4vw, 2.5rem)]">
        <Player autoplay loop src={seoAnimation} style={{ width: 'clamp(150px, 25vw, 300px)', height: 'clamp(150px, 25vw, 300px)', flexShrink: 0 }} />
        <div className="flex flex-col gap-4 flex-1">
          <H2>SEO</H2>
          <P>Vi sikrer, at din hjemmeside er bygget til at blive fundet. God struktur og optimeret indhold hjælper dig med at nå dine kunder.</P>
        </div>
      </div>

    </div>
  )
}