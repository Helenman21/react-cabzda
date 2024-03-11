import { number } from "prop-types"
import { useEffect, useState } from "react"

export default {
	title: 'UseEffectDemoclock'
}

export  const UseEffectDemoclock = () => {
	const [time, setTime] = useState(new Date().toISOString());
	const [isDone, setIsDone] = useState (false)
  useEffect(() => {
    // При монтировании/обновлении запускаем интервал
	 if(isDone){
		    const intervalId = setInterval(() => {
      setTime(new Date().toISOString())
    }, 1000);
    
    return () => {
      // При размонтировании/до обновления interval останавливаем
      // существующий интервал
		setTimeout(() => { clearInterval(intervalId); console.log('stop'); }, 5000);
      //clearInterval(intervalId);
    };
	 }

  }, [isDone]);

  return (
    <div>
    	{time}
		<button onClick={() => setIsDone(true)} >ON</button>
		<button onClick={() => setIsDone(false)}>Off</button>
    </div>
	 
  );
}