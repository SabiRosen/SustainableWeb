import { useState } from 'react';
import Pakker from "./assets/components/Pakker";
import PakkerMobil from "./assets/components/PakkerMobil";
import Fordele from "./assets/components/Fordele";
import H1 from './assets/components/typography/H1';
import packages from './data/packages';
import PakkerInfo from './assets/components/PakkerInfo';

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Services.jsx laver funktionen handleItemClick, 
  // som opdaterer selectedPackage baseret på det klikede item. 
  function handleItemClick(item) {
    const pkg = packages.find(p => p.id === item.id)
    setSelectedPackage(pkg);
  }

  return (
    <div className="flex flex-col p-4 md:p-8 gap-8 w-11/12 md:w-6/7 mx-auto">
    
      <H1>PAKKER</H1>

      {/* Mobil layout */}
      <div className="flex md:hidden flex-col gap-8">
        <PakkerMobil 
          packages={packages}
          selectedPackage={selectedPackage}
          onItemClick={handleItemClick}
        />
        <PakkerInfo package={selectedPackage} />
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-row items-start gap-10 w-full h-150">
        <div className="w-1/3 h-full">
        {/* Services sender funktionen ned til Pakker som en prop */}
            <Pakker onItemClick={handleItemClick} 
            selectedId={selectedPackage?.id} 
            maxHeight="100%" />
        </div>
        <div className="w-2/3 h-full">
          <PakkerInfo package={selectedPackage} />
        </div>
      </div>

      {selectedPackage && (
        <Fordele fordele={selectedPackage.fordele} />
      )}

    </div>
  );
}