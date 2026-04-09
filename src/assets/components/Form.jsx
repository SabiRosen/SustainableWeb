import CTA from "./CTA"
import H4 from "./typography/H4"

export default function Form() {
    return (
        <div className="flex flex-col gap-4 bg-primary rounded-4xl p-5 m-1 w-full">
            
            {/* Row 1 - Navn & Email */}
            <div className="flex flex-row gap-6 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <H4>Navn</H4>
                    <input
                        type="text"
                        placeholder="Dit fulde navn"
                        className="rounded-full px-6 py-1 bg-text text-secondary placeholder-secondary/50 w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <H4>Email</H4>
                    <input
                        type="email"
                        placeholder="navn@eksempel.dk"
                        className="rounded-full px-6 py-1 bg-text text-secondary placeholder-secondary/50 w-full"
                    />
                </div>
            </div>

            {/* Row 2 - Telefon & Pakke */}
            <div className="flex flex-row gap-6 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <H4>Telefon nummer</H4>
                    <input
                        type="tel"
                        placeholder="00 00 00 00"
                        className="rounded-full px-6 py-1 bg-text text-secondary placeholder-secondary/50 w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <H4>Pakke</H4>
                    <div className="relative w-full">
                        <select className="rounded-full px-6 py-1 bg-text text-secondary w-full appearance-none cursor-pointer">
                            <option value="">Vælg pakke</option>
                            <option value="spiren">Spiren</option>
                            <option value="opblomstring">Opblomstring</option>
                            <option value="eviggroen">Eviggrøn</option>
                            <option value="form og flor">Form og Flor</option>
                        </select>
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">▼</span>
                    </div>
                </div>
            </div>

            {/* Row 3 - Anden information */}
            <div className="flex flex-col gap-2 w-full">
                <H4>Anden information</H4>
                <textarea
                    placeholder="Noget vi skal vide?"
                    className="rounded-2xl px-6 py-2 bg-text text-secondary placeholder-secondary/50 w-full h-40 resize-none"
                />
            </div>

            {/* Send button */}
            <div className="self-start">
                <CTA label="SEND" />
            </div>


        </div>

        

        
    )
}