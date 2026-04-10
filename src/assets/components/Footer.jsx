import { Link } from "react-router-dom";
import H3 from "./typography/H3";
import P from "./typography/P";
import H1 from "./typography/H1";
import H2 from "./typography/H2";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full min-h-100 px-15 py-20 pb-3 bg-secondary items-center md:items-start ">
            
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 items-center">
                
                <img src="/logo.svg" alt="Logo" className=" w-full max-w-[clamp(12rem,50vw,57rem)] items-center" loading="lazy"/>

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

            <P className="mt-10 text-center md:text-left self-center md:self-start">
                © Webloom 2026</P>

        </footer>
    );
}