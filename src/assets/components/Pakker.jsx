import H2 from "./typography/H2";
import P from "./typography/P";

function Frame({ badge }) {
  return (
    <div className="absolute h-9 left-0.5 overflow-clip top-0.5 w-full" style={{ backgroundImage: "linear-gradient(93.4451deg, rgba(103, 6, 39, 0.7) 40.12%, rgba(113, 18, 36, 0.7) 100%)", color: "var(--color-text)" }}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-1.25 not-italic text-[24px] top-1 whitespace-nowrap">{badge}</p>
    </div>
  );
}

function Spiren({ onClick, isSelected }) {
  return (
    <div 
      onClick={onClick}
      className="bg-linear-to-b from-primary relative rounded-bl-[100px] rounded-tr-[100px] shrink-0 size-87.5 to-[#ffb300] cursor-pointer transition-transform hover:scale-105 active:scale-95" 
      data-name="Spiren">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <H2><p className="absolute leading-[normal] left-[106.5px] top-34.75 whitespace-nowrap">Spiren</p></H2>
        <P className="absolute leading-[normal] w-full text-center not-italic top-48.5 whitespace-nowrap">Hjemmeside fra bunden</P>
        <Frame badge="Populært"/>
      </div>
      <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none rounded-bl-[100px] rounded-tr-[100px] ${isSelected ? "border-4 border-text" : "border-none"}`} />
    </div>
  );
}

function Opblomstring({ onClick, isSelected }) {
  return (
    <div 
      onClick={onClick}
      className="bg-linear-to-b from-primary overflow-clip relative rounded-bl-[100px] rounded-tr-[100px] size-87.5 to-[#ffb300] cursor-pointer transition-transform hover:scale-105 active:scale-95" 
      data-name="Opblomstring">
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-43.75 top-34.75">
        <div className="-scale-y-100 flex-none rotate-180">
          <H2><p className="leading-[normal] relative text-center whitespace-nowrap">Opblomstring</p></H2>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[40.5px] top-48.5">
        <div className="-scale-y-100 flex-none rotate-180">
          <P className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative whitespace-nowrap">Opdateret design - nyt liv</P>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none rounded-bl-[100px] rounded-tr-[100px] ${isSelected ? "border-4 border-text" : "border-none"}`} />
    </div>
  );
}

function Eviggron({ onClick, isSelected }) {
  return (
    <div 
      onClick={onClick}
      className="bg-linear-to-b from-primary overflow-clip relative rounded-bl-[100px] rounded-tr-[100px] shrink-0 size-87.5 to-[#ffb300] cursor-pointer transition-transform hover:scale-105 active:scale-95" 
      data-name="Eviggrøn">
      <H2><p className="absolute leading-[normal] left-[80.5px] top-32.5 whitespace-nowrap">Eviggrøn</p></H2>
      <Frame badge="Anbefalet" />
      <div className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-0 left-43.75 not-italic text-center top-46.25 whitespace-nowrap">
        <P className="leading-[normal] mb-0 whitespace-pre">{`Optimering med `}</P>
        <P className="leading-[normal] whitespace-pre">bæredygtigt fokus</P>
      </div>
    <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none rounded-bl-[100px] rounded-tr-[100px] ${isSelected ? "border-4 border-text" : "border-none"}`} />
    </div>
  );
}

function FormOgFlor({ onClick, isSelected }) {
  return (
    <div 
      onClick={onClick}
      className="bg-linear-to-b from-primary overflow-clip relative rounded-bl-[100px] rounded-tr-[100px] size-87.5 to-[#ffb300] cursor-pointer transition-transform hover:scale-105 active:scale-95" 
      data-name="Form og flor">
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[174.5px] top-32.5">
        <div className="-scale-y-100 flex-none rotate-180">
          <H2><p className="leading-[normal] relative text-center whitespace-nowrap">Form og flor</p></H2>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[28.5px] top-48.5">
        <div className="-scale-y-100 flex-none rotate-180">
          <P className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative whitespace-nowrap">Opstrammet visuel identitet</P>
        </div>
      </div>
    <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none rounded-bl-[100px] rounded-tr-[100px] ${isSelected ? "border-4 border-text" : "border-none"}`} />
    </div>
  );
}

export default function Pakker({ onItemClick, selectedId, maxHeight = "400px" }) {
  const packages = [
    {
      id: 'spiren',
      name: 'Spiren',
      title: 'Spiren',
      description: 'Ny hjemmeside fra bunden',
      badge: 'Populært'
    },
    {
      id: 'opblomstring',
      name: 'Opblomstring',
      title: 'Opblomstring',
      description: 'Opdateret design - nyt liv',
      inverted: true
    },
    {
      id: 'eviggron',
      name: 'Eviggrøn',
      title: 'Eviggrøn',
      description: 'Optimering med bæredygtigt fokus',
      badge: 'Anbefalet'
    },
    {
      id: 'form-og-flor',
      name: 'Form og flor',
      title: 'Form og flor',
      description: 'Opstrammet visuel identitet',
      inverted: true
    }
  ];

  const handleClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <div className="relative rounded-bl-[100px] rounded-tr-[100px] size-full" data-name="pakker">
      <div 
        className="content-stretch flex items-start justify-center overflow-y-auto overflow-x-hidden px-2 py-10 relative rounded-[inherit] size-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ maxHeight }}
      >
        <div className="content-stretch flex flex-col gap-11 items-center justify-center relative shrink-0 w-full max-w-95">
          <Spiren onClick={() => handleClick(packages[0])} isSelected={selectedId === 'spiren'} />
        <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
                <Opblomstring onClick={() => handleClick(packages[1])} isSelected={selectedId === 'opblomstring'} />
            </div>
        </div>
        <Eviggron onClick={() => handleClick(packages[2])} isSelected={selectedId === 'eviggron'} />
        <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
                <FormOgFlor onClick={() => handleClick(packages[3])} isSelected={selectedId === 'form-og-flor'} />
            </div>
        </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-5 border-text border-solid inset-0 pointer-events-none rounded-bl-[100px] rounded-tr-[100px]" />
    </div>
  );
}