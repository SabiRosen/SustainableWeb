// src/assets/components/Milestones.jsx
import H1 from './typography/H1'
import H4 from './typography/H4'
import P from './typography/P'

const milestones = [
    {
        title: 'Optimeret 10 websites til lavere energi forbrug',
        bullets: ['Op til 50% kortere loadtid', 'Reduceret dataforbrug pr. sidevisning']
    },
    {
        title: 'Aktive projekter om en mere grøn digital omstilling',
        bullets: ['Designs med fokus på energieffektivitet', 'Målt løbene performance og vedligeholdelse']
    },
    {
        title: 'Vores vision',
        description: 'Vores mål og vision er at levere løsninger, der ikke bare ser godt ud, men også reelt skaber værdi og vækst. Samtidig tænker vi langsigtet i alt, hvad vi laver.'
    }
]

export default function Milestones() {
    return (
        <div className="flex flex-col items-center gap-16 w-6/7 mx-auto my-16">
            
            <H1>Milepæle</H1>

            <div className="flex flex-row gap-8 w-full">
                {milestones.map((milestone, index) => (
                    <div key={index} className="flex flex-col gap-6 bg-primary border-4 border-secondary rounded-tr-[4.375rem] rounded-bl-[4.375rem] p-10 flex-1">
                        <H4>{milestone.title}</H4>
                        {milestone.bullets && (
                            <ul className="flex flex-col gap-3">
                                {milestone.bullets.map((bullet, i) => (
                                    <li key={i} className="flex flex-row gap-2">
                                        <P>• {bullet}</P>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {milestone.description && (
                            <P>{milestone.description}</P>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}