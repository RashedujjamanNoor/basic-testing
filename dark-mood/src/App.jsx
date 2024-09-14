import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [mood, setMood] = useState(true);
  return (
    <div
      className={`flex flex-col  items-center gap-7 w-full h-[100vh] ${
        mood ? "bg-slate-100" : "bg-gray-950 text-white"
      }`}
    >
      <Navbar setMood={setMood} mood={mood} />
      <Home />
    </div>
  );
}

export default App;
