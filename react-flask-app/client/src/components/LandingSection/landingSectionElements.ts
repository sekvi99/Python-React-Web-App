import styled, { StyledComponent } from "styled-components";

export const LandingSectionContainer: StyledComponent<"div", any, {}, never> = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  background-color: #fff;
  padding: 20px;

`;

export const LandingHeaderSection: StyledComponent<"h2", any, {}, never> = styled.h2`
    font-weight: bold;
    font-size: 2.0rem;
    color: #349CFE;
`;

export const LandingTextSection: StyledComponent<"div", any, {}, never> = styled.div`
  flex: 1;
  padding-right: 20px;
  font-size: 1.2rem;
  color: #000;
`;

export const TypeWriterTextSection: StyledComponent<"span", any, {}, never> = styled.span`
    color: #000;
    font-size: 1.4rem;
`;

export const LandingGraphSection: StyledComponent<"div", any, {}, never> = styled.div`
  flex: 1;
  background-color: #fff;
  border: 1px solid #ccc;
`;