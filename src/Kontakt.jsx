// src/Kontakt.jsx
import H2 from './assets/components/typography/H2'
import H3 from './assets/components/typography/H3'
import Form from './assets/components/Form'
import H4 from './assets/components/typography/H4'

export default function Kontakt() {
    return (
        <div className="flex flex-col gap-16 w-6/7 mx-auto my-16">

            {/* Top section - form + illustration */}
            <div className="p-1 rounded-tr-[4.375rem] rounded-bl-[4.375rem]" 
                style={{ background: 'linear-gradient(to bottom right, #FFF2B1, #670627)' }}>
                
                <div className="flex flex-col bg-secondary rounded-tr-[4.375rem] rounded-bl-[4.375rem] p-8 gap-8">
                    
                    {/* Centered heading */}
                    <div className="text-center">
                        <H2>Interesseret i en uforpligtende snak? Kontakt os!</H2>
                    </div>

                    {/* Form + illustration side by side */}
                    <div className="flex flex-row items-center gap-8">
                        <div className="w-[65%]">
                            <Form />
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <img src="/src/assets/logo-small.svg" alt="Webloom illustration" className="w-full max-w-70" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Middle section - contact info */}
            <div className="flex flex-row justify-around items-start gap-8 py-8">
                <div className="flex flex-col items-center gap-4">
                    <img src="/src/assets/icons/tlf.svg" alt="Telefon" className="w-35 h-35" />
                    <H3>Ring til os:</H3>
                    <H4>+45 12 34 56 78</H4>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src="/src/assets/icons/calender.svg" alt="Kalender" className="w-35 h-35" />
                    <H3>Hvornår arbejder vi?</H3>
                    <H4>Hverdage: 8-16</H4>
                    <H4>Fredag: 8-14</H4>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src="/src/assets/icons/mail.svg" alt="Email" className="w-35 h-35" />
                    <H3>Skriv til os:</H3>
                    <H4>kontakt@webloom.dk</H4>
                </div>
            </div>

        </div>
    )
}