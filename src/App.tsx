import { APITester } from "./APITester";
import "./index.css";

import logo from "./SVG/anime.svg";

export function App() {
  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
      </div>

      <h1>Bun + React</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <APITester />
    </div>
  );
}

export default App;
