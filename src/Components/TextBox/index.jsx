const TextBox = ({css,text})=>{
    return(
        <div className={`${css} break-words flex justify-center w-full h-full items-center bg-white bg-opacity-90 rounded-lg select-none hover:cursor-pointer`}>
            <h1 className="break-all p-1 md:p-3">{text}</h1>
        </div>
    )
}
export default TextBox