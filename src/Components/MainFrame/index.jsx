import Display from "../Display"
import Char from "../Char"
import Func from "../Func"
import TextBox from "../TextBox"

import { useState } from "react"
import Void from "../Void"

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const boards = []

for( var i = 6; i < 26; i = i+6 ){
    boards.push(alphabet.slice(i-6, i))
}

const MainFrame = () => {
    const [exibit,setExibit] = useState(boards);
    const [text,setText] = useState('')

    if(exibit[0].length>1){
        return(
            <div className="bg-black w-screen h-screen">
                <div className="grid grid-cols-3 grid-rows-3 p-5 gap-10 h-full w-full items-center">
                    {exibit.map(x => <Display letras={x} onclick={()=>setExibit(x)}/>)}
                    <TextBox  type="text" css="col-start-2 row-start-2" text={text}></TextBox>
                    <Func onclick={()=>setText(text.slice(0,-1))} text={"Apagar"} css={"col-start-1 row-start-2"}/>
                    <Func onclick={()=>setText(text+" ")} text={'Espaço'} css={'col-start-2 row-start-3'}/>
                    <Func onclick={()=>{}} text={'Falar'} css={'col-start-3 row-start-2'} />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="bg-black w-screen h-screen">
                <div className="grid grid-cols-3 grid-rows-3 p-5 gap-10 h-full w-full items-center">
                    {exibit.map(x => <Char letra={x} onclick={()=>{setText(text+x);setExibit(boards)}}/>)}
                    <TextBox  type="text" css="col-start-2 row-start-2" text={text}></TextBox>
                    <Func onclick={()=>setExibit(boards)} text={'Voltar'} css={'col-start-1 row-start-2'} />
                    <Void css={'col-start-3 row-start-2'}/>
                </div>
            </div>

        )
    }

}
export default MainFrame