import Display from "../Display"
import Char from "../Char"
import Func from "../Func"
import TextBox from "../TextBox"
import Void from "../Void"
import { useState } from "react"
import { talk } from "./script"

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234'.split('')
const boards = []

for( var i = 6; i < 31; i = i+6 ){boards.push(alphabet.slice(i-6, i))} //Spliting the alphabet into separate "Boxes"


const MainFrame = () => {
    const [exibit,setExibit] = useState(boards); //Variable to define what options the user has at their disposal (Pick a leter || Pick a bunch of leters)
    const [text,setText] = useState('') //Text to be writen and displayed 
    console.log(exibit)

    if(exibit[0].length>1){
        return(
            //First Screen
            <div className="bg-black w-screen h-screen">
                <div className="grid grid-cols-3 grid-rows-3 p-5 gap-10 h-full w-full items-center">
                    {exibit.map(x => <Display letras={x} onclick={()=>setExibit(x)}/>)}
                    <TextBox css="col-start-2 row-start-2" text={text}></TextBox>
                    <Func onclick={()=>setText(text.slice(0,-1))} text={"Apagar"} css={"col-start-1 row-start-2"}/>
                    <Func onclick={()=>setText(text+" ")} text={'Espaço'} css={'col-start-2 row-start-3'}/>
                    <Func onclick={()=>talk(text)} text={'Falar'} css={'col-start-3 row-start-2'} /> {/*Still not functional*/}
                </div>
            </div>
        )
    }
    else{
        return(
            //Leter Choosing Screen
            <div className="bg-black w-screen h-screen">
                <div className="grid grid-cols-3 grid-rows-3 p-5 gap-10 h-full w-full items-center">
                    {exibit.map(x => <Char letra={x} onclick={()=>{setText(text+x);setExibit(boards)}}/>)}
                    <TextBox type="text" css="col-start-2 row-start-2" text={text}></TextBox>
                    <Func onclick={()=>setExibit(boards)} text={'Voltar'} css={'col-start-1 row-start-2'} />
                    <Void css={'col-start-3 row-start-2'}/> {/*Purpose is to fill a desired space in the grid to be empty*/}
                </div>
            </div>

        )
    }

}
export default MainFrame