import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);// if the use state is true it makes it false and vic versa
  };

  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>} {/* to open another page after play game is clicked we created a toggle */}
    </>
  );
}

export default App;
