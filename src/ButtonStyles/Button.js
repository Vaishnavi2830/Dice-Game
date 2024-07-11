import styled from "styled-components";

 export const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  transform: 0.3s background ease-in;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transform: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
 background-color: white;
 border: 1px solid black;
 color: black;
 &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;