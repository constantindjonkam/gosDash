import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  const [showSidebar, setShowSideBar] = useState(false);

  return (
    <div className="App">
      <Sidebar onHide={() => setShowSideBar(!showSidebar)} show={showSidebar} />
      <Dashboard onToggle={() => setShowSideBar(!showSidebar)} />
    </div>
  );
}

export default App;
