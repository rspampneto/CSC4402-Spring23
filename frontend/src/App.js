import "./App.css";
import Example from "./components/example.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/welcome_page/Welcome";
import { Select } from "./pages/concentration_page/Select";
import { AppBar } from "./components/application_bar/AppBar";

import CloudComputing from "../src/pages/timeline_pages/CloudComputing.tsx";
import CyberSecurity from "../src/pages/timeline_pages/CyberSecurity.tsx";
import DataScience from "../src/pages/timeline_pages/DataScience.tsx";
import SoftwareDev from "../src/pages/timeline_pages/SoftwareDev.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />

        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/select" element={<Select />}></Route>
          <Route path="/cloud-computing" element={<CloudComputing />}></Route>
          <Route path="/data-science" element={<DataScience />}></Route>
          <Route path="/cyber-security" element={<CyberSecurity />}></Route>
          <Route path="/software-development" element={<SoftwareDev />}></Route>
        </Routes>
      </Router>
      {/* <Example></Example> */}
    </div>
  );
}

export default App;
