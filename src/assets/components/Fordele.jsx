// src/assets/components/Fordele.jsx
import H2 from "./typography/H2"
import P from "./typography/P"

export default function Fordele({ fordele }) {
    if (!fordele) return null

    return (
        <div className="flex flex-col items-center gap-10 w-full mt-12 mb-18 ">
            <H2>Fordele</H2>
            <div 
                className="flex flex-row justify-center w-full"
                style={{ gap: 'clamp(1.5rem, 8vw, 7.5rem)' }}
            >
                {fordele.map((fordel, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <div style={{ 
                            width: 'clamp(80px, 20vw, 175px)', 
                            height: 'clamp(80px, 20vw, 175px)',
                            flexShrink: 0
                        }}>
                            <img 
                                src={fordel.icon} 
                                alt={fordel.label} 
                                className="w-full h-full"
                                style={{ objectFit: 'contain' }}
                                loading="lazy"
                            />
                        </div>
                        <P className="text-center">{fordel.label}</P>
                    </div>
                ))}
            </div>
        </div>
    )
}