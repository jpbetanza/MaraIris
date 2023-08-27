const Char = ({letra})=>{
    return(
        <div className="flex justify-center w-full h-full items-center rounded-lg select-none hover:cursor-pointer">
            <h1 className="text-white text-6xl">{letra}</h1>
        </div>
    )
}
export default Char