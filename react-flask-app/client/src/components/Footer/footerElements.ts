import styled, { StyledComponent } from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #349CFE;
  padding: 20px;
  text-align: center;
`;

export const FooterText = styled.p`
    margin: 5px 0;
    color: #333;
`;

export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  margin: 0 5px;

  &:hover{
    color: #fff;
    transform: scale(110%);
    transition: 0.2s all ease-in-out;
  }
`;