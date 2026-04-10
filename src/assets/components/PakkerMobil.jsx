// src/assets/components/PakkerMobil.jsx
import H2 from "./typography/H2"
import P from "./typography/P"

export default function PakkerMobil({ packages, selectedPackage, onItemClick }) {
    return (
        <div className="relative rounded-bl-[100px] rounded-tr-[100px] border-5 border-text border-solid p-2 overflow-clip">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex flex-row gap-6 px-2 py-4 w-max">
                    {packages.map(pkg => (
                        <div
                            key={pkg.id}
                            onClick={() => onItemClick(pkg)}
                            style={{ width: 'clamp(200px, 60vw, 280px)', height: 'clamp(200px, 60vw, 280px)' }}
                            className={`bg-linear-to-b from-primary to-[#ffb300] rounded-bl-[100px] rounded-tr-[100px] cursor-pointer transition-transform hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2 shrink-0 relative overflow-hidden border-solid ${selectedPackage?.id === pkg.id ? 'border-4 border-text' : 'border-none'}`}>
                            
                            {/* Badge */}
                            {pkg.badge && (
                                <div className="absolute top-0 left-0 right-0 h-9"
                                    style={{ background: 'linear-gradient(93.4451deg, rgba(103, 6, 39, 0.7) 40.12%, rgba(113, 18, 36, 0.7) 100%)' }}>
                                    <p className="absolute left-3 top-1 text-text whitespace-nowrap" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
                                        {pkg.badge}
                                    </p>
                                </div>
                            )}

                            {/* Name and description */}
                            <H2 className="text-center px-4">{pkg.name}</H2>
                            <P className="text-center px-4">{pkg.description}</P>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}