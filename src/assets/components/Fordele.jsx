// src/assets/components/Fordele.jsx
import H2 from "./typography/H2"
import P from "./typography/P"

export default function Fordele({ fordele }) {
    if (!fordele) return null

    return (
        <div className="flex flex-col items-center gap-10 w-full mt-8">
            <H2>Fordele</H2>
            <div className="flex flex-row justify-center gap-30 w-full">
                {fordele.map((fordel, index) => (
                    <div key={index} className="flex flex-col items-center gap-5">
                        <img 
                            src={fordel.icon} 
                            alt={fordel.label} 
                            className="w-43.75 h-43.75"
                        />
                        <P className="w-60 text-center">{fordel.label}</P>
                    </div>
                ))}
            </div>
        </div>
    )
}