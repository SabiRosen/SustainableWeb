import CTA from "./CTA"
import H3 from "./typography/H3"

export default function Form() {
    return (
        <div className="flex flex-col gap-6 bg-secondary rounded-4xl p-10 w-6/7 mx-auto my-16">
            
            {/* Row 1 - Navn & Email */}
            <div className="flex flex-row gap-6 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <H3>Navn</H3>
                    <input
                        type="text"
                        placeholder="Dit fulde navn"
                        className="rounded-full px-6 py-3 bg-text text-secondary placeholder-secondary/50 w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <H3>Email</H3>
                    <input
                        type="email"
                        placeholder="navn@eksempel.dk"
                        className="rounded-full px-6 py-3 bg-text text-secondary placeholder-secondary/50 w-full"
                    />
                </div>
            </div>

            {/* Row 2 - Telefon & Pakke */}
            <div className="flex flex-row gap-6 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <H3>Telefon nummer</H3>
                    <input
                        type="tel"
                        placeholder="00 00 00 00"
                        className="rounded-full px-6 py-3 bg-text text-secondary placeholder-secondary/50 w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <H3>Pakke</H3>
                    <div className="relative w-full">
                        <select className="rounded-full px-6 py-3 bg-text text-secondary w-full appearance-none cursor-pointer">
                            <option value="">Vælg pakke</option>
                            <option value="spiren">Spiren</option>
                            <option value="eviggroen">Eviggrøn</option>
                        </select>
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">▼</span>
                    </div>
                </div>
            </div>

            {/* Row 3 - Anden information */}
            <div className="flex flex-col gap-2 w-full">
                <H3>Anden information</H3>
                <textarea
                    placeholder="Noget vi skal vide?"
                    className="rounded-2xl px-6 py-4 bg-text text-secondary placeholder-secondary/50 w-full h-40 resize-none"
                />
            </div>

            {/* Send button */}
            <div className="self-start">
                <CTA label="SEND" />
            </div>

        </div>
    )
}