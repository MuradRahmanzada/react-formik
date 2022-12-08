import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="w-full min-h-screen bg-[#1a202c] px-5 md:px-0">
      <nav className="flex py-24 items-center justify-center gap-10">
        <button
          className={`text-2xl font-semibold ${
            view === "basic" ? "text-white" : "text-gray-200 opacity-50"
          }`}
          onClick={() => setView("basic")}
        >
          Basic
        </button>
        <button
          className={`text-2xl font-semibold ${
            view === "advanced" ? "text-white" : "text-white opacity-50"
          }`}
          onClick={() => setView("advanced")}
        >
          Advanced
        </button>
      </nav>
      <div className="flex justify-center">
        {view === "basic" ? <BasicForm /> : <AdvancedForm />}
      </div>
    </div>
  );
}

export default App;
