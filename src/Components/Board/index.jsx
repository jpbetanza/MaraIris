import Char from "../Char"
const Board = ({letras})=>{
    return(
        <div className="rounded-lg grid grid-cols-3 grid-rows-2 bg-white bg-opacity-20 justify-center w-full h-full items-center select-none hover:cursor-pointer">
            {letras.map((letra)=>(
                <Char letra={letra}/>
            ))}
        </div>
    )
}
export default Board