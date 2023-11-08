import styled from 'styled-components';

export const ContactsListItems = styled.ul `
  display: grid;
  margin-top: 30px;
  gap: 15px;
`;

export const ContactsListItem = styled.li `
  display: flex;
  justify-content: space-between;
`;

export const ContactsListBtn = styled.button `
  position: relative;
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  text-decoration: none;
  color: red;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid red;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 red;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 red;
  }

  &:active {
    transform: scale(0.9);
  }
`;