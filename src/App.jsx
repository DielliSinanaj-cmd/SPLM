import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard"; 
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import TestOrder from "./pages/TestOrder";
import TestTypes from "./pages/TestTypes";

function App(){
  const [testTypes, setTestTypes] = useState([]);

  return(
      <div className="flex bg-green-50 min-h-screen bg-green-50">
        <Sidebar />
        <main className="flex-1 p-8 text-left">
                <div className="flex-1 p-6">
                        <Header />
                </div>



          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={ <Doctors />} />
            <Route
              path="/test-types"
              element={
                <TestTypes
                  testTypes={testTypes}
                  setTestTypes={setTestTypes}
                />
              }
            />
            <Route
              path="/test-orders"
              element={<TestOrder testTypes={testTypes} />}
            />
          </Routes>
        </main>
      </div>
  );
}

export default App;
