import { useEffect } from "react";

const CalibrationEnd = ({end, dep})=>{

    useEffect(() => {
        const intervalId = setInterval(() => {
            end();
        }, 3000);
        return () => clearInterval(intervalId);
        }, [dep]);

    return(
        <div className={`flex text-white text-center row-span-5 col-span-5 justify-center w-full h-full items-center rounded-lg select-none`}>
            <h1 className="">Calibração concluída, abrindo o teclado...</h1>
        </div>
    )
}
export default CalibrationEnd