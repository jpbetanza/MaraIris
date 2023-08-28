const Char = ({letra,onclick})=>{
    return(
        <div onClick={onclick} className="rounded-lg flex bg-white bg-opacity-20 justify-center w-full h-full items-center select-none hover:cursor-pointer">
            <h1 className="text-white">{letra}</h1>
        </div>
    )
}
export default Char