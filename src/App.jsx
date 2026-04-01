import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"



function App(){
       
  return(
      <Router>
          <div className="flex bg-green-50 min-h-screen">
            <Sidebar />
          </div>



      </Router>




  );
}

export default App;