import MainFrame from "./Components/MainFrame"
import Calibration from "./Components/Calibration"
import { useState, useEffect } from "react"
import { clickAt } from "./Components/PingBox/script";

function App() {
  const [cal, SetCal] = useState(true)
  var pos
  var quadro = null
  var pickup = null
  var chronometer

  useEffect(()=>{

    webgazer.setRegression("ridge");
    webgazer.showVideoPreview(false);
    
    webgazer.setGazeListener(function(data, elapsedTime) {
      if (data == null) { return }
      pos = {x:data.x,y:data.y}

      pickup = document.elementsFromPoint(pos.x,pos.y).filter((div)=>div['className'].includes('quadro'))[0]

      if(quadro != pickup && pickup!=undefined){
        clearTimeout(chronometer)
        console.log('clicando...?')
        quadro = pickup
        chronometer = setTimeout(()=>{clickAt(pos.x,pos.y,pickup);quadro=null},1500)
      }
      if(quadro != pickup && pickup==undefined){
        quadro=null
        clearTimeout(chronometer)
      }

    }).begin();

  },[])

  return (
    <div>
      {cal && <Calibration switchFunc={()=>SetCal(!cal)} dep={cal}/>}
      {!cal && <MainFrame switchFunc={()=>SetCal(!cal)}/>}

    </div>
  )
}

export default App