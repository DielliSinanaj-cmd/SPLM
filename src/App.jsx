import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard"; 
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";

function App(){
       
  return(
      <div className="flex min-h-screen bg-green-50">
        <Sidebar />
        <main className="flex-1 p-8 text-left">
                <div className="flex-1 p-6">
                        <Header />
                </div>



          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={ <Doctors />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
