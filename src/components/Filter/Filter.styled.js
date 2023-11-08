import styled from 'styled-components';

export const FilterContainer = styled.div `
  margin-top: 25px;
`;

export const FilterLabel = styled.label `
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilterInput = styled.input `
  width: 250px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #555;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;