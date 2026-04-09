import { useState } from 'react';
import Pakker from "./assets/components/Pakker";
import Fordele from "./assets/components/Fordele";
import H1 from './assets/components/typography/H1';
import packages from './data/packages';
import PackageInfo from './assets/components/PakkerInfo';

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  function handleItemClick(item) {
    const pkg = packages.find(p => p.id === item.id)
    setSelectedPackage(pkg);
  }

  return (
    <div className="flex flex-col p-8 gap-8 w-6/7 mx-auto">
    
      <H1>PAKKER</H1>

      <div className="flex flex-row items-start gap-10 w-full h-150">
          
        <div className="w-1/3 h-full">
          <Pakker onItemClick={handleItemClick} selectedId={selectedPackage?.id} maxHeight="100%" />
        </div>

        <div className="w-2/3 h-full">
          <PackageInfo package={selectedPackage} />
        </div>

      </div>

      {/* Fordele section - only shows when a package is selected */}
      {selectedPackage && (
        <Fordele fordele={selectedPackage.fordele} />
      )}

    </div>
  );
}