import styled from "styled-components";

//as we shifted the use case to the Gameplay.jsx but we are still usinf the operent selectNumber and setSelectNumber thats why as a constraints we passed it in the function so that it wont create prob in code
function NumberSelecter({setError, error, selectedNumber, setSelectedNumber}) {
  //insted of writinf <box>1</box> 6 times to make 6 boxes we use array function
  const arrNumber = [1, 2, 3, 4, 5, 6];
//to remove the eror display message after thr error is solved 
  const numberSelecterHandler = (value) =>{
    setSelectedNumber(value)
    setError("")
  }

  return (
    <NumberSelecterContainer>
    <p className="error">{error}</p>
    <div className="flex">
      {/*line14 if the value is equal to the selected number that that will save into isselectd variable */}
      {arrNumber.map((value, i) => (
        <Box
          isSelected={value == selectedNumber}
          key={i}
          onClick={() =>numberSelecterHandler(value) }
        >
          {value}
        </Box>
      ))}
      </div>
      <p>Select Number</p>
    </NumberSelecterContainer>
  );
}

export default NumberSelecter;

const NumberSelecterContainer= styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
    display: flex;
    gap: 24px;
}

p{
    font-size: 24px;
    font-weight: 700px;
}

.error{
  color: red;
}
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};/*this isselect is called here to change the styles*/
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
