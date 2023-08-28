const Func = ({onclick,css,text})=>{
    return(
        <div onClick={onclick} className={`${css} flex justify-center w-full h-full items-center bg-white bg-opacity-20 rounded-lg select-none hover:cursor-pointer`}>
            <h1 className="text-white ">{text}</h1>
        </div>
    )
}
export default Func