// src/assets/components/AboutInfo.jsx
import H1 from './typography/H1'
import P from './typography/P'
import patriciaPhoto from '../images/patricia.webp'
import sabiPhoto from '../images/sabi.webp'
import caroPhoto from '../images/caro.webp'

const teamMembers = [
    { name: 'Patricia', role: 'UX/UI designer', photo: patriciaPhoto },
    { name: 'Sabina', role: 'Webudvikler', photo: sabiPhoto },
    { name: 'Caroline', role: 'Projektleder', photo: caroPhoto },
]

const bubbles = [
    { text: '0,8 g co2 pr side visning' },
    { text: 'Tværfagligt team' },
    { text: 'Værdier: Design med omtanke' },
    { text: 'Mission: Langsigtede løsninger' },
]
export default function AboutInfo() {
    return (
        <div className="p-2 rounded-tr-[4.375rem] rounded-bl-[4.375rem] w-11/12 md:w-6/7 mx-auto my-16"
            style={{ background: 'linear-gradient(to bottom right, #670627, #FFF2B1)' }}>

            <div className="flex flex-col gap-0 bg-secondary rounded-tr-[4.375rem] rounded-bl-[4.375rem] overflow-hidden">
                
                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between p-8 md:py-16 md:px-25 gap-8">
                    
                    {/* Left - text */}
                    <div className="flex flex-col gap-4 flex-1 max-w-full md:max-w-140">
                        <H1>Hvem er webloom?</H1>
                        <P>Hos Webloom skaber vi digitale løsninger, der kombinere æstetik, funktionalitet og omtanke for fremtiden. Vi tror på, at fremtidens digitale univers ikke kun skal imponere visuelt, men også tage ansvar overfor miljøet, brugerne og vores kunder. Derfor udvikler vi løsninger, der sparer ressourcer, reducere energiforbruget og holder i mange år, samtidig med at vi leverer stærke digitale oplevelser.</P>
                        <P>Vi samarbejder tæt med vores kunder for at omsætte deres idéer til grønne og langsigtede løsninger. For os er det klart: digitale produkter, der tænker fremad og tager hensyn til planeten, er fremtiden.</P>
                        <P>Med Webloom får du løsninger, der styrker din tilstedeværelse i dag og passer på verden i morgen!</P>
                    </div>

                    {/* Right - team photos */}
                    <div className="flex flex-col gap-8 md:ml-auto">
                        {/* Top row - Patricia and Sabina */}
                        <div className="flex flex-row justify-center gap-8 md:gap-20">
                            {teamMembers.slice(0, 2).map((member, index) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <div className="rounded-full overflow-visible"
                                        style={{ width: 'clamp(90px, 17vw, 175px)', height: 'clamp(90px, 17vw, 175px)' }}>
                                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale" loading="lazy" />
                                    </div>
                                    <P>{member.name}</P>
                                    <P>{member.role}</P>
                                </div>
                            ))}
                        </div>
                        {/* Bottom row - Caroline centered */}
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="rounded-full overflow-visible"
                                    style={{ width: 'clamp(90px, 17vw, 175px)', height: 'clamp(90px, 17vw, 175px)' }}>
                                    <img src={teamMembers[2].photo} alt={teamMembers[2].name} className="w-full h-full object-cover grayscale" />
                                </div>
                                <P>{teamMembers[2].name}</P>
                                <P>{teamMembers[2].role}</P>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-3 border-text-secondary mx-8 md:mx-16" />

                {/* Bottom bubbles */}
                <div className="flex flex-row flex-wrap items-center justify-around p-8 md:p-16 gap-8">
                    {bubbles.map((bubble, index) => (
                        <div key={index} className="rounded-full bg-text-secondary flex items-center justify-center p-6"
                            style={{ width: 'clamp(120px, 18vw, 175px)', height: 'clamp(120px, 18vw, 175px)' }}>
                            <p className="text-center text-secondary" style={{ fontFamily: 'Arial, sans-serif', fontSize: 'clamp(12px, 1.5vw, 16px)' }}>
                                {bubble.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}