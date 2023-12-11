interface StepNumberProps {
  className?: string;
  step: number;
  wasPassed: boolean;
}
export function StepNumber(props: StepNumberProps) {
  return (
    <>
      <div className={"w-10 h-10 rounded-full flex justify-center items-center" + ( props.wasPassed ? " bg-success text-white" : " bg-[#fafafa]")}>
        <p className="text-[16px] font-bold">{props.step}</p>
      </div>
    </>
  );
}
