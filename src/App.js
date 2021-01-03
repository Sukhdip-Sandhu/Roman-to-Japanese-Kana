import { useState } from "react";
import "./App.css";
import RomajiInput from "./Components/RomajiInput";
import HiraganaOutput from "./Components/HiraganaOutput";
import KatakanaOutput from "./Components/KatakanaOutput";
import Header from "./Components/Header";

function App() {
  const [romaji, setRomaji] = useState("");

  function handleOnChange(event) {
    let romanji = event.target.value;
    setRomaji(romanji);
  }

  return (
    <div className="">
      <Header />
      <div className="flex flex-wrap lg:px-24">
        <div className="w-full p-4">
          <RomajiInput handleOnChange={handleOnChange} />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <HiraganaOutput romaji={romaji} />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <KatakanaOutput romaji={romaji} />
        </div>
      </div>
    </div>
  );
}

export default App;
