import styled from "styled-components";
import NumberSelecter from "./NumberSelecter";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../ButtonStyles/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(); // we brought both the use case from the numberSelect and Roledice.jsx so that both the case can be manages properly and can be used together
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState("false");
  const [error, setError] = useState("");
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min); // to select random number
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("Number not selected!");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7); //number till which random number is generated

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainSection>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelecter
          error={error}
          setError={setError}
          selectedNumber={selectedNumber} //we did it just to use the use case passes constraints
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button 
        onClick={() => setShowRules((prev => !prev))}>
          {showRules ? "Hide" : "Show"}
        </Button>
      </div>
      {showRules && <Rules />}
    </MainSection>
  );
};

export default GamePlay;

const MainSection = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
