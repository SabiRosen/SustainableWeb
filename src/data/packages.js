// src/data/packages.js
const packages = [
    {
        id: 'spiren',
        name: 'Spiren',
        description: 'Ny hjemmeside bygget fra bunden',
        badge: 'Populært',
        price: '5.000 kr.',
        details: 'Spiren er vores pakkeløsning til dig, der vil starte fra bunden og gøre det rigtigt fra begyndelsen. Sammen omsætter vi dine idéer og visioner til en professionel hjemmeside fra struktur og design til lancering, der passer perfekt til din niche og forretning.',
        fordele: [
            { icon: '/src/assets/icons/puzzle.svg', label: 'Skrædersyet løsning' },
            { icon: '/src/assets/icons/wrench.svg', label: 'Vedligeholdelse 2 år' },
            { icon: '/src/assets/icons/rocket.svg', label: 'Stærk performance' },
        ]
    },
    {
        id: 'opblomstring',
        name: 'Opblomstring',
        description: 'Opdateret design - nyt liv',
        price: '3.000 kr.',
        details: 'Med Opblomstring opdaterer vi din hjemmeside med nyt design, hurtigere hastighed og bedre synlighed. Vi optimerer struktur og funktionalitet, så den bliver mere brugervenlig og tiltrækker de rigtige kunder.',
        fordele: [
            { icon: '/src/assets/icons/design.svg', label: 'Nyt design' },
            { icon: '/src/assets/icons/tandem.svg', label: 'Forbedret funktionalitet' },
            { icon: '/src/assets/icons/wrench.svg', label: 'Vedligeholdelse 1 år' },
        ]
    },
    {
        id: 'eviggron',
        name: 'Eviggrøn',
        description: 'Optimering med bæredygtigt fokus',
        badge: 'Anbefalet',
        price: '4.000 kr.',
        details: 'Vi gennemgår og optimerer din hjemmeside med fokus på effektivitet, SEO, hastighed og ansvarligt design, så den arbejder bedre, bruger færre ressourcer og bliver mere synlig og performant.',
        fordele: [
            { icon: '/src/assets/icons/lightning.svg', label: 'Høj hastighed' },
            { icon: '/src/assets/icons/wrench.svg', label: 'Vedligeholdelse 1 år' },
            { icon: '/src/assets/icons/magnify.svg', label: 'God synlighed' },
        ]
    },
    {
        id: 'form-og-flor',
        name: 'Form og flor',
        description: 'Opstrammet visuel identitet',
        price: '2.500 kr.',
        details: 'Vi forfiner din visuelle identitet, fra logo og farver til typografi og det samlede udtryk. Målet er at skabe en rød tråd, der afspejler din virksomhed og styrker synligheden. Så resultatet bliver en klar og professionel identitet, der kan vokse med din forretning.',
        fordele: [
            { icon: '/src/assets/icons/paint.svg', label: 'Visuel identitet' },
            { icon: '/src/assets/icons/yarn.svg', label: 'Stærk rødtråd' },
            { icon: '/src/assets/icons/magnify.svg', label: 'God synlighed' },
        ]
    }
]

export default packages