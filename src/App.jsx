import MainFrame from "./Components/MainFrame"
import Calibration from "./Components/Calibration"
import { useState } from "react"
function App() {
  const [cal,SetCal] = useState(true)
  return (
    <div>
      {cal && <Calibration switchFunc={()=>SetCal(!cal)} dep={cal}/>}
      {!cal && <MainFrame switchFunc={()=>SetCal(!cal)}/>}
    </div>
  )
}

export default App