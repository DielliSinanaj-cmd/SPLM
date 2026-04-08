import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-green-900 text-white p-5 h-screen">
      <h2 className="text-2x1 font-bold mb-8">LabTrack</h2>
        
        <ul className="space-y-3">
          <li>
          <Link to="/" className="block hover:bg-green-700 p-2 rounded">
                Dashboard
          </Link>
          </li>
          <li>
            <Link to="/patients" className="block hover:bg-green-700 p-2 rounded">
                Patients
          </Link>
          </li>
          <li>
            <Link to="/doctors" className="block hover:bg-green-700 p-2 rounded">
                Doctors 
          </Link>
          </li>
          <li>
            <Link to="/test-types" className="block hover:bg-green-700 p-2 rounded">
                Test Types
          </Link>
          </li>
          <li>
            <Link to="/test-orders" className="block hover:bg-green-700 p-2 rounded">
                Test Orders
          </Link>
          </li>
        </ul>
    </div>
  );
}
export default Sidebar;
