import H3 from "./typography/H3";
import P from "./typography/P";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-between items-center gap-7.5 w-full min-h-153.25 px-12.75 py-27.75 bg-secondary">
            <div className="flex flex-row justify-between items-start w-full">
                <img src="/src/assets/logo.svg" alt="Logo" />
                <section>
                    <H3>Telefontider</H3>
                    <P>Hverdage: 8 - 16</P>
                    <P>Fredag: 8 - 14 </P>

                    <H3>Telefon nummer</H3>
                    <P>+45 12 34 56 78</P>

                    <H3>Email</H3>
                    <P>Kontakt@webloom.dk</P>
                </section>
            </div>
            <P className="self-start">© Webloom 2026</P>
</footer>
    )
}