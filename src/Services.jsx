import { useState } from 'react';
import Pakker from "./assets/components/Pakker";
import Fordele from "./assets/components/Fordele";
import H1 from './assets/components/typography/H1';
import H2 from './assets/components/typography/H2';
import packages from './data/packages';
import PackageInfo from './assets/components/PakkerInfo';

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  function handleItemClick(item) {
    const pkg = packages.find(p => p.id === item.id)
    setSelectedPackage(pkg);
  }

  return (
    <div className="flex flex-col p-4 md:p-8 gap-8 w-11/12 md:w-6/7 mx-auto">
    
      <H1>PAKKER</H1>

      {/* Mobile layout - packages scroll horizontally, info below */}
        <div className="flex md:hidden flex-col gap-8">
        <div className="relative rounded-bl-[100px] rounded-tr-[100px] border-5 border-text border-solid p-2 overflow-clip">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-row gap-6 px-2 py-4 w-max">
                {packages.map(pkg => (
                    <div
                        key={pkg.id}
                        onClick={() => handleItemClick(pkg)}
                        style={{ width: 'clamp(200px, 60vw, 280px)', height: 'clamp(200px, 60vw, 280px)' }}
                        className={`bg-linear-to-b from-primary to-[#ffb300] rounded-bl-[100px] rounded-tr-[100px] cursor-pointer transition-transform hover:scale-105 active:scale-95 flex items-center justify-center shrink-0 relative overflow-hidden border-solid ${selectedPackage?.id === pkg.id ? 'border-4 border-text' : 'border-none'}`}>
                        
                        {pkg.badge && (
                        <div className="absolute top-0 left-0 right-0 h-9"
                            style={{ background: 'linear-gradient(93.4451deg, rgba(103, 6, 39, 0.7) 40.12%, rgba(113, 18, 36, 0.7) 100%)' }}>
                            <p className="absolute left-3 top-1 text-text whitespace-nowrap" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
                            {pkg.badge}
                            </p>
                        </div>
                        )}
                        <H2>{pkg.name}</H2>
                    </div>
                ))}
            </div>
            </div>
        </div>
        <PackageInfo package={selectedPackage} />
        </div>

      {/* Desktop layout - packages left, info right */}
      <div className="hidden md:flex flex-row items-start gap-10 w-full h-150">
        <div className="w-1/3 h-full">
          <Pakker onItemClick={handleItemClick} selectedId={selectedPackage?.id} maxHeight="100%" />
        </div>
        <div className="w-2/3 h-full">
          <PackageInfo package={selectedPackage} />
        </div>
      </div>

      {selectedPackage && (
        <Fordele fordele={selectedPackage.fordele} />
      )}

    </div>
  );
}