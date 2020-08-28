import styled from "styled-components";

const FilterButton = styled.button`
  width: 20%;
  font-weight: bold;
  margin-bottom: 5%;
  background-color: black;
  color: white;
  border-radius: 10px;
  :hover {
    background-color: red;
    color: black;
    cursor: pointer;
  }
`;

export default FilterButton;
