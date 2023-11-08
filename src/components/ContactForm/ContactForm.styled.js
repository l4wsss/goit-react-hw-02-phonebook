import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactsForm = styled(Form)
`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  align-items: center;
  margin-bottom: 50px;
`;

export const ContactsLabel = styled.label `
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactsField = styled(Field)
`
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

export const ContactsError = styled(ErrorMessage)
`
  color: red;
  font-weight: 500;
  font-size: 15px;
  font-style: italic;
`;

export const ContactsBtn = styled.button `
  background-color: #00bfa6;
  padding: 10px 10px;
  color: #fff;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px dashed #00bfa6;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.4s;

  &span:last-child {
    display: none;
  }

  &:hover {
    transition: 0.4s;
    border: 2px dashed #00bfa6;
    background-color: #fff;
    color: #00bfa6;
  }

  &:active {
    background-color: #87dbd0;
  }
`;