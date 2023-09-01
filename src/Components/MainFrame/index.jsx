import Display from "../Display"
import TextBox from "../TextBox"
import Void from "../Void"
import { useState } from "react"
import { talk } from "./script"

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234'.split('')
const boards = []

for( var i = 6; i < 31; i = i+6 ){boards.push(alphabet.slice(i-6, i))} //Spliting the alphabet into separate "Boxes"

const MainFrame = ({switchFunc}) => {
    const [exibit,setExibit] = useState(boards); //Variable to define what options the user has at their disposal (Pick a leter || Pick a bunch of leters)
    const [text,setText] = useState('') //Text to be writen and displayed 

    if(exibit[0].length>1){
        return(
            //First Screen
            <div className="bg-black w-screen h-screen">
                <div className="grid grid-cols-3 grid-rows-3  gap-5 h-full w-full items-center">
                    {exibit.map(x => <Display letras={x} onclick={()=>setExibit(x)} css={''}/>)}
                    <TextBox css="col-start-2 row-start-2" text={text}></TextBox>
                    <Display onclick={()=>setText(text.slice(0,-1))} letras={["Apagar"]} css={"col-start-1 row-start-2"}/>
                    <Display onclick={()=>setText(text+" ")} letras={['Espaço']} css={'col-start-2 row-start-3'}/>
                    <Display onclick={()=>talk(text)} letras={['Falar']} css={'col-start-3 row-start-2'} /> 
                </div>
            </div>
        )
    }
    else{
        return(
            //Leter Choosing Screen
            <div className="bg-black w-screen h-screen">
                <div className="grid grid-cols-3 grid-rows-3 gap-5 h-full w-full items-center">
                    {exibit.map(x => <Display letras={x} onclick={()=>{setText(text+x);setExibit(boards)}} css={''}/>)}
                    <TextBox type="text" css="col-start-2 row-start-2" text={text}></TextBox>
                    <Display onclick={()=>setExibit(boards)} letras={['Voltar']} css={'col-start-1 row-start-2'} />
                    <Void css={'col-start-3 row-start-2'}/> {/*Purpose is to fill a desired space in the grid to be empty*/}
                </div>
            </div>

        )
    }

}
export default MainFrame