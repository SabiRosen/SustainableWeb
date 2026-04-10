import Case from "./assets/components/Case"
import H1 from "./assets/components/typography/H1"
import cases from "./data/cases"

export default function Cases() {
    return (
        <div className="flex flex-col items-center gap-8 w-6/7 mx-auto my-16 md:flex-row md:flex-wrap md:justify-center">
            <H1>Vores cases</H1>
            {cases.map((caseData) => (
                <Case 
                    key={caseData.id}
                    caseData={caseData}
                    flipped={caseData.id % 2 === 0}
                />
            ))}
        </div>
    )
}