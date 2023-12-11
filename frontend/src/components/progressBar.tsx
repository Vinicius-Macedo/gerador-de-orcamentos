import { useState } from "react";

interface ProgressBarProps {
  className?: string;
  progress: number;
}
export function ProgressBar(props: ProgressBarProps) {
  return (
    <>
      <div
        className={
          "w-full rounded-full bg-[#fafafa] h-2" +
          (props.className ? " " + props.className : "")
        }
      >
        <div
          style={{ width: props.progress + "%", transition: "width 1s" }}
          className="bg-success h-2 rounded-full " 
        ></div>
      </div>
    </>
  );
}
