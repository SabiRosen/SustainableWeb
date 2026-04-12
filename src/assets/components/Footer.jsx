import { Link } from "react-router-dom";
import P from "./typography/P";
import H2 from "./typography/H2";
import bcorpIcon from '../icons/cer-b.svg'
import cleanCreativesIcon from '../icons/cer-cc.webp'
import ecologiIcon from '../icons/cer-eco.svg'

export default function Footer() {
    return (
        <footer className="flex flex-col w-full min-h-100 px-15 py-20 pb-3 bg-secondary items-center md:items-start ">
            
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 items-center">

                <div className="w-full flex flex-col justify-between gap-15 md:gap-20">
                
                    <img src="/logo.svg" alt="Logo" className=" w-full max-w-full items-center " loading="lazy"/>
                    
                    <div className="flex flex-row items-center mx-auto md:mx-0 gap-8 md:gap-15">
                        <img src={bcorpIcon} alt="B Corp Certified" className="h-16 md:h-24 w-auto" loading="lazy"/>
                        <img src={cleanCreativesIcon} alt="Clean Creatives Approved" className="h-16 md:h-24 w-auto" loading="lazy"/>
                        <img src={ecologiIcon} alt="Ecologi" className="h-16 md:h-24 w-auto" loading="lazy"/>
                    </div>
                </div>
                <section className="flex flex-col space-y-10 mx-0 md:mx-20 text-left md:text-left">
                    <div>
                        <H2>Telefontider</H2>
                        <P>Hverdage: 8 - 16</P>
                        <P>Fredag: 8 - 14</P>
                    </div>

                    <div>
                        <H2>Telefon nummer</H2>
                        <P>
                            <Link to="tel:+4512345678" className="hover:underline">
                                +45 12 34 56 78
                            </Link>
                        </P>
                    </div>

                    <div>
                        <H2>Email</H2>
                        <P>
                            <Link to="mailto:Kontakt@webloom.dk" className="hover:underline">
                                Kontakt@webloom.dk
                            </Link>
                        </P>
                    </div>

                </section>
            </div>

            <P className="mt-10 text-center md:text-left self-center">
                © Webloom 2026</P>

        </footer>
    );
}