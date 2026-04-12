import CTA from "./CTA"
import H3 from "./typography/H3"

export default function Form() {
    return (
        <div className="flex flex-col gap-4 bg-primary rounded-4xl p-5 m-1 w-full">
            
            {/* Row 1 - Navn & Email */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <H3>Navn</H3>
                    <input
                        id="navn"
                        name="navn"
                        type="text"
                        placeholder="Dit fulde navn"
                        autoComplete="name"
                        className="rounded-full px-6 py-1 bg-text text-secondary placeholder-secondary/50 w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <H3>Email</H3>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="navn@eksempel.dk"
                        autoComplete="email"
                        className="rounded-full px-6 py-1 bg-text text-secondary placeholder-secondary/50 w-full"
                    />
                </div>
            </div>

            {/* Row 2 - Telefon & Pakke */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <H3>Telefon nummer</H3>
                    <input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        placeholder="00 00 00 00"
                        autoComplete="tel"
                        className="rounded-full px-6 py-1 bg-text text-secondary placeholder-secondary/50 w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="pakke">
                        <H3>Pakke</H3>
                    </label>
                    <div className="relative w-full">
                        <select id="pakke" name="pakke" autoComplete="off" className="rounded-full px-6 py-1 bg-text text-secondary w-full appearance-none cursor-pointer">
                            <option value="">Vælg pakke</option>
                            <option value="spiren">Spiren</option>
                            <option value="opblomstring">Opblomstring</option>
                            <option value="eviggroen">Eviggrøn</option>
                            <option value="form og flor">Form og Flor</option>
                            <option value="ikke besluttet">Ikke besluttet</option>
                        </select>
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">▼</span>
                    </div>
                </div>
            </div>

            {/* Row 3 - Anden information */}
            <div className="flex flex-col gap-2 w-full">
                <H3>Anden information</H3>
                <textarea
                    id="information"
                    name="information"
                    autoComplete="off"
                    placeholder="Noget vi skal vide?"
                    className="rounded-2xl px-6 py-2 bg-text text-secondary placeholder-secondary/50 w-full h-40 resize-none"/>
            </div>

            {/* Send button */}
            <div className="self-start">
                <CTA label="SEND" />
            </div>


        </div>

        

        
    )
}