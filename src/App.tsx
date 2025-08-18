import "./index.css";
import {Route,Routes } from "react-router";
import Navbar from "./Pages/Navbar";


export function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      {/* <Route path="/" element={Homepage}/> */}
    </Routes>
    </>
  );
}

export default App;
