import { useData } from "@/context/dataContext";
import LandingCard from "@/app/components/layout/LandingCard";
import styles from './styles.module.css';

export default function Landing() {
    const { state } = useData();

    if (state.checklistPercent) {
        return (
            <div className={styles.landingdiv}>
                <div>
                    <LandingCard header="Calls on Record" number={state.totalCalls} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <LandingCard header="C. Are they reviewing the value props: job or money back guarantee, flexibility, beginner friendly, try before you buy (Risk Free Trial)?" number={state.checklistPercent["C"]} />
                    <LandingCard header="H. Do we provide a good overview of the program, tuition options, and expectations?" number={state.checklistPercent["H"]} />
                    <LandingCard header="I. Are the coaches attempting to overcome objections?" number={state.checklistPercent["I"]} />
                    <LandingCard header="A. Are we asking learners what motivated them to look into BloomTech?" number={state.checklistPercent["A"]} />
                    <LandingCard header="E. Are they scheduling another call with the learner?" number={state.checklistPercent["E"]} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <LandingCard header="G. Are we tasking the learner to complete enrollment and engage with the product?" number={state.checklistPercent["G"]} />
                    <LandingCard header="B. Are we informing learners of the weekly time commitment and the length of the program?" number={state.checklistPercent["B"]} />
                    <LandingCard header="D. Are we asking learners if they are looking into competitors?" number={state.checklistPercent["D"]} />
                    <LandingCard header="F. Are we offering to demo the product?" number={state.checklistPercent["F"]} />
                </div>
            </div>
        )
    }

}