import { useState, useEffect} from "react"
import { shuffle } from "./script"
import CalibrationEnd from "../CalibrationEnd"
import CalibrationStart from "../CalibrationStart"
import PingBox from "../PingBox"

const positions = shuffle(['row-start-1 col-start-1','row-start-1 col-start-2','row-start-1 col-start-3',
                           'row-start-2 col-start-1','row-start-2 col-start-2','row-start-2 col-start-3',
                           'row-start-3 col-start-1','row-start-3 col-start-2','row-start-3 col-start-3'])

const Calibration = ({switchFunc, dep}) => {
    const [pos,SetPos] = useState(-2)

    useEffect(() => {
        const intervalId = setInterval(() => {
            SetPos(pos+1);
        }, 2950); //Delay 3 segundos
        return () => clearInterval(intervalId);
        }, [pos]); 
        
    return(
        <div className="bg-black w-screen h-screen">
            <div className="grid grid-cols-3 grid-rows-3 p-5 gap-10 h-full w-full items-center">
                { pos<0 && <CalibrationStart/>}
                { pos<positions.length && pos>=0 && <PingBox css={positions[pos]}/> }
                { pos>=positions.length && <CalibrationEnd end={switchFunc} dep={dep}/> }
            </div>
        </div>
    )

}
export default Calibration