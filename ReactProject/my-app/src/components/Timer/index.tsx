import { useState } from "react";
import { Button } from "../Button";

export const Timer = () => {
  let [time, setTime] = useState(0);
  let newTime: number;
  let isStart = false;
  
  const startTimer = () => {
    if (!isStart) {
      console.log(isStart)
      newTime = window.setInterval(() => 
        setTime((time += 1)), 1000);
    }
    isStart = true;
  };
  const stopTimer = () => {
    clearInterval(newTime);
  };
  const reset = () => {
    clearInterval(newTime);
    setTime(0);
  };

   return (
     <div>
       <h1>{time}</h1>
       <div>
        <Button type={"primary"} text={"Start"} onClick={startTimer} />
        <Button type={"primary"} text={"Stop"} onClick={stopTimer} />
        <Button type={"primary"} text={"Reset"} onClick={reset} />
       </div>
     </div>
  );
};