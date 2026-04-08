
import H2 from "./typography/H2"
import H3 from "./typography/H3"
import P from "./typography/P"
import CTA from "./CTA"

export default function PackageInfo({ package: pkg }) {
    if (!pkg) return (
        <div className="flex items-center justify-center h-full">
            <H3>Vælg en pakke for at se mere</H3>
        </div>
    )

    return (
        <div className="flex flex-col gap-6 bg-secondary rounded-tr-[4.375rem] rounded-bl-[4.375rem] p-10 h-full">
            <H2>{pkg.name}</H2>
            <P>{pkg.description}</P>
            <P>{pkg.details}</P>
            <H3>Pris fra {pkg.price}</H3>

            <div className="self-start mt-auto">
                <CTA />
            </div>
        </div>
    )
}