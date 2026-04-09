import H3 from "./typography/H3"
import P from "./typography/P"
import CTA from "./CTA"

export default function Case({ caseData, flipped = false }) {
    return (
        <div className="p-2 rounded-tr-[4.375rem] rounded-bl-[4.375rem] w-full" 
            style={{ background: `linear-gradient(to ${flipped ? 'left' : 'right'}, #FFF2B1, transparent)` }}>
            
            <div className={`flex ${flipped ? 'flex-row-reverse' : 'flex-row'} items-center gap-8 bg-secondary rounded-tr-[4.375rem] rounded-bl-[4.375rem] py-8 px-16 w-full`}>
                
                <div className="flex items-center gap-4 shrink-0">
                    <h1 className="text-9xl color-text" style={{ fontFamily: "'Unbounded', sans-serif", color: "var(--color-text)" }}> {/* Stilen her er underlig */}
                        {caseData.id}.
                    </h1>
                    <div className="w-32 h-32 rounded-full border-2 border-text flex items-center justify-center overflow-hidden">
                        <img src={caseData.logo} alt={caseData.name} className="w-full h-full object-contain p-2" />
                    </div>
                </div>
                
                <div className="flex flex-col gap-4">
                    <H3>{caseData.name}</H3>
                    <P>{caseData.description}</P>
                    <P>Pakke: {caseData.pakke}</P>
                    <div className="self-start mt-6">
                        <CTA label="BESØG SIDEN" />
                    </div>
                </div>

            </div>
        </div>
    )
}