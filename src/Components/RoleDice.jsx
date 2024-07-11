import { useState } from "react";
import styled from "styled-components";

//as we shifted the use case to the Gameplay.jsx but we are still usinf the operent selectNumber and setSelectNumber thats why as a constraints we passed it in the function so that it wont create prob in code
function RoleDice({roleDice, currentDice}) {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
       <img src={`/public/images/dice_${currentDice}.png`} alt="dice 1" />{/*changing image according to the random number selection */}
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
