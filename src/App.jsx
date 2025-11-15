import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Employees from "./pages/Employees.jsx";
import Shifts from "./pages/Shifts.jsx";
import "./styles/main.scss";

function App() {
  const [sidebarClosed, setSidebarClosed] = useState(false);

  return (
    <Router>
      <div className="app">
        <Sidebar closeMenu={sidebarClosed} setCloseMenu={setSidebarClosed} />
        <main className={`mainContent ${sidebarClosed ? "collapsed" : ""}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/shifts" element={<Shifts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
