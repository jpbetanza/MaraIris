import { useEffect, useState } from "react"
import { clickAt } from "./script"

const PingBox = ({css})=>{
    const [clicks,SetClicks] = useState(0)
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            var rect = document.getElementById("target").getBoundingClientRect();
            clickAt((rect.right+rect.left)/2,(rect.bottom+rect.top)/2);
            SetClicks(clicks+1);
        },500);
        return () => clearInterval(intervalId);
    },[clicks])

    return(
        <div className={`${css} flex justify-center items-center w-full h-full rounded-lg select-none`}>
            <span id="target" className="animate-[ping_1s_ease-in-out_infinite] rounded-full w-16 h-16 bg-sky-200 opacity-75"/>
        </div>
    )
}
export default PingBox