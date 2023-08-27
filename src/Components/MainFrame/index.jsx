import Board from "../Board"
import Char from "../Char"
import Erase from "../Erase"
import Talk from "../Talk"
import Space from "../Space"

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const boards = []

for( var i = 6; i < 26; i = i+6 ){
    boards.push(alphabet.slice(i-6, i))
}

const MainFrame = () => {
    return(
        <div className="bg-black w-screen h-screen">
            <div className="grid grid-cols-3 grid-rows-3 p-5 gap-10 h-full w-full items-center">
                <Board letras={boards[0]}/>
                <Board letras={boards[1]}/>
                <Board letras={boards[2]}/>
                <Erase/>
                <input type="text" className="h-full rounded-2xl text-center text-6xl"></input>
                <Talk/>
                <Board letras={boards[3]}/>
                <Space letra="Espaço"/>
                

            </div>
        </div>
    )
}
export default MainFrame