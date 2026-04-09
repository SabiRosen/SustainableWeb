// src/assets/components/AboutInfo.jsx
import H1 from './typography/H1'
import P from './typography/P'

const teamMembers = [
    { name: 'Patricia', role: 'UX/UI designer', photo: '/src/assets/images/patricia.webp' },
    { name: 'Sabina', role: 'Webudvikler', photo: '/src/assets/images/sabi.webp' },
    { name: 'Caroline', role: 'Projektleder', photo: '/src/assets/images/caro.webp' },
]

const bubbles = [
    { text: '0,8 g co2 pr side visning' },
    { text: 'Tværfagligt team' },
    { text: 'Værdier: design med omtanke for både brugeren og klimaet' },
    { text: 'Mission: Langsigtede løsninger' },
]
export default function AboutInfo() {
    return (
        <div className="p-2 rounded-tr-[4.375rem] rounded-bl-[4.375rem] w-6/7 mx-auto my-16"
            style={{ background: 'linear-gradient(to bottom right, #670627, #FFF2B1)' }}>

            <div className="flex flex-col gap-0 bg-secondary rounded-tr-[4.375rem] rounded-bl-[4.375rem] overflow-hidden">
                
                {/* Top section */}
                <div className="flex flex-row justify-between p-16">
                    
                    {/* Left - text */}
                    <div className="flex flex-col gap-4 flex-1 max-w-140">
                        <H1>Hvem er webloom?</H1>
                        <P>Hos Webloom skaber vi digitale løsninger, der kombinere æstetik, funktionalitet og omtanke for fremtiden. Vi tror på, at fremtidens digitale univers ikke kun skal imponere visuelt, men også tage ansvar overfor miljøet, brugerne og vores kunder. Derfor udvikler vi løsninger, der sparer ressourcer, reducere energiforbruget og holder i mange år, samtidig med at vi leverer stærke digitale oplevelser.</P>
                        <P>Vi samarbejder tæt med vores kunder for at omsætte deres idéer til grønne og langsigtede løsninger. For os er det klart: digitale produkter, der tænker fremad og tager hensyn til planeten, er fremtiden.</P>
                        <P>Med Webloom får du løsninger, der styrker din tilstedeværelse i dag og passer på verden i morgen!</P>
                    </div>

                    {/* Right - team photos */}
                    <div className="flex flex-col gap-8 shrink-0 ml-auto">
                        {/* Top row - Patricia and Sabina */}
                        <div className="flex flex-row gap-8">
                            {teamMembers.slice(0, 2).map((member, index) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <div className="w-43.75 h-43.75 rounded-full ">
                                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <P>{member.name}</P>
                                    <P>{member.role}</P>
                                </div>
                            ))}
                        </div>
                        {/* Bottom row - Caroline centered */}
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-43.75 h-43.75 rounded-full ">
                                    <img src={teamMembers[2].photo} alt={teamMembers[2].name} className="w-full h-full object-cover grayscale" />
                                </div>
                                <P>{teamMembers[2].name}</P>
                                <P>{teamMembers[2].role}</P>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-3 border-text mx-16" />

                {/* Bottom bubbles */}
                <div className="flex flex-row items-center justify-around p-16 gap-8">
                    {bubbles.map((bubble, index) => (
                        <div key={index} className="w-43.75 h-43.75 rounded-full bg-text flex items-center justify-center p-6">
                            <p className="text-center text-secondary text-[16px]" style={{ fontFamily: 'Arial, sans-serif' }}>
                                {bubble.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}