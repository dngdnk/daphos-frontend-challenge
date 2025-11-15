import Dashboard from "./pages/Dashboard.jsx";
import Employees from "./pages/Employees.jsx";
import Shifts from "./pages/Shifts.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/main.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/shifts" element={<Shifts />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
