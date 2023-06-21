import styled from "styled-components";

export const TabSection = styled.div`
    text-align: center;
    justify-content: center;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  background-color: ${props => (props.isActive ? '#349CFE' : 'transparent')};
  color: ${props => (props.isActive ? '#333333' : '#999999')};
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-bottom: 2px solid ${props => (props.isActive ? '#349CFE' : 'transparent')};
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.isActive ? '#349CFE' : '#EEEEEE')};
  }
`;