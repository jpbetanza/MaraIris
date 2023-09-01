
const Display = ({letras, onclick, css})=>{
    return(
        <div onClick={onclick} className={`${css} quadro rounded-lg grid ${letras.length>1 ? 'grid-rows-2 grid-cols-3' : 'grid-rows-1'} bg-white bg-opacity-20 justify-center w-full h-full items-center select-none hover:cursor-pointer`}>
            
            {letras.length>1 && letras.map((letra)=>(
                <div className="flex justify-center w-full h-full items-center rounded-lg select-none hover:cursor-pointer">
                    <h1 className="text-white">{letra}</h1>
                </div>
            ))}
            {letras.length==1 && (
                <div className="flex justify-center w-full h-full items-center rounded-lg select-none hover:cursor-pointer">
                    <h1 className="text-white">{letras}</h1>
                </div>
            )}
        </div>
    )
}
export default Display