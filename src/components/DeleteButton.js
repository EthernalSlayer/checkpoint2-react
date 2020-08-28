import styled from "styled-components";

const DeleteButton = styled.button`
  width: 50%;
  font-weight: bold;
  margin-bottom: 5%;
  background-color: yellow;
  border-radius: 10px;
  :hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;

export default DeleteButton;
