import styled, { StyledComponent } from "styled-components";

export const AccordionContainer: StyledComponent<"div", any, {}, never> = styled.div`
    width: 90vw;
    margin: 5 rem auto;
    background: #fff;
    border-radius: 0.25 rem;
    padding: 2.5rem 2rem;
    max-width: 920px;
    display: grid;
    gap: 1rem 2rem;
`;

export const AccordionHeader: StyledComponent<"h3", any, {}, never> = styled.h3`
    line-height: 1.2;
    font-weight: bold;
`;

export const AccordionSection: StyledComponent<"section", any, {}, never> = styled.section`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
`;

export const AccordionItem: StyledComponent<"article", any, {}, never> = styled.article`
    padding: 1rem 1.5rem;
    border: 2px solid #349CFE;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

`;

export const AccordionItemHeader: StyledComponent<"h4", any, {}, never> = styled.h4`
    text-transform: none;
    line-height: 1.5;
`;

export const AccordionItemParagraph: StyledComponent<"p", any, {}, never> = styled.p`
    color: #333;
    margin-bottom: 0;
    margin-top: 0.5rem;
`;

export const AccordionSectionHeader: StyledComponent<"header", any, {}, never> = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AccordionItemBtn: StyledComponent<"button", any, {}, never> = styled.button`
    background: transparent;
    border-color: transparent;
    background: #fff;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;