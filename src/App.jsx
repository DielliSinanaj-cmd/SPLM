import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
 

function App(){
       
  return(
      <div className="flex min-h-screen bg-green-50">
        <Sidebar />
        <main className="flex-1 p-8 text-left">
                <div className="flex-1 p-6">
                        <Header />
                </div>



          <Routes>
            <Route path="/" element={<h1 className="text-3xl font-bold text-green-950">Dashboard</h1>} />
            <Route path="/patients" element={<h1 className="text-3xl font-bold text-green-950">Patients</h1>} />
            <Route path="/doctors" element={<h1 className="text-3xl font-bold text-green-950">Doctors</h1>} />
          </Routes>
        </main>
      </div>

  );

}

export default App;
