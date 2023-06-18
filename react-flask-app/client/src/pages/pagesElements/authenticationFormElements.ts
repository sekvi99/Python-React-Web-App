import styled, { StyledComponent } from "styled-components";

export const FormContainer: StyledComponent<"div", any, {}, never> = styled.div`
  max-width: 400px;
  margin: 200px auto;
  border: 2px solid #333;
  padding: 50px;
`;

export const Heading: StyledComponent<"h1", any, {}, never> = styled.h1`
  color: #333;
  text-align: center;
  justify-content: center;
`;

export const FormParagraph: StyledComponent<"h4", any, {}, never> = styled.h4`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  justify-content: center;
`;

export const Form: StyledComponent<"form", any, {}, never> = styled.form`
  text-align: center;
  justify-content: center;
`;


export const Input: StyledComponent<"input", any, {}, never> = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  border-bottom: 2px solid #333;
`;

export const Button: StyledComponent<"button", any, {}, never> = styled.button`
  font-size: 1.2rem;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #349CFE;
  color: #fff;
  border: none;
  cursor: pointer;
  border: 2px solid #333;

  &:hover{
    transform: scale(115%);
    transition: 0.2s all ease-in-out;
  }
`;