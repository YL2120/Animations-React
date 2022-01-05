import Navbar from "./Components/Navbar/Navbar"
import Liste from "./Pages/Liste/Liste"
import StateAnim from "./Pages/StateAnim/StateAnim"
import Scroll from "./Pages/Scroll/Scroll"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
      
      
        <div className="global-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Liste />}/>
            <Route path="/stateAnim" element={<StateAnim />}/>
            <Route path="/scroll" element={<Scroll/>}/>
          </Routes>
        </div>
       

      

  );
}

export default App;
