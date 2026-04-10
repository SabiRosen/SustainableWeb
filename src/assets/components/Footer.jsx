import { Link } from "react-router-dom";
import H3 from "./typography/H3";
import P from "./typography/P";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full min-h-100 px-15 py-20 pb-3 bg-secondary items-center md:items-start ">
            
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 items-center">
                
                <img src="/src/assets/logo.svg" alt="Logo" className="w-[clamp(19rem, 100vw, 57rem)] items-center"/>

                <section className="flex flex-col space-y-10 mx-0 md:mx-20 text-left md:text-left">
                    <div>
                        <H3>Telefontider</H3>
                        <P>Hverdage: 8 - 16</P>
                        <P>Fredag: 8 - 14</P>
                    </div>

                    <div>
                        <H3>Telefon nummer</H3>
                        <P>
                            <Link to="tel:+4512345678" className="hover:underline">
                                +45 12 34 56 78
                            </Link>
                        </P>
                    </div>

                    <div>
                        <H3>Email</H3>
                        <P>
                            <Link to="mailto:Kontakt@webloom.dk" className="hover:underline">
                                Kontakt@webloom.dk
                            </Link>
                        </P>
                    </div>

                </section>
            </div>

            <P className="mt-10 text-center md:text-left self-center md:self-start">
                © Webloom 2026</P>

        </footer>
    );
}