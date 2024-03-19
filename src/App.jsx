import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="px-2 py-4 flex justify-center w-full h-svh">
        <p className="text-4xl font-medium">E-PDS</p>
      </div>
    </>
  );
}

export default App;
