import Year from "@/components/timeline/year";
import Step from "@/components/timeline/step";
import Divider from "@/components/timeline/divider";

export default function Entry({ year, steps, divider }) {
    return (
        <div>
            <Year>{year}</Year>
            <ul>
                {steps.map((step, index) => (
                    <Step title={step.title} key={index}>
                        {step.description}
                    </Step>
                ))}

            </ul>
            {divider ? <Divider/> : <></>}
        </div>
    )
}