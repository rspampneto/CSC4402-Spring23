import "./App.css";
import Example from "./components/example.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/welcome_page/Welcome";
import { Select } from "./pages/concentration_page/Select";
import { AppBar } from "./components/application_bar/AppBar";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />

        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/select" element={<Select />}></Route>
          <Route></Route>
        </Routes>
      </Router>
      {/* <Example></Example> */}
    </div>
  );
}

export default App;
