import Year from './year';
import Step from './step';
import Divider from './divider';

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
      {divider ? <Divider /> : <></>}
    </div>
  );
}
