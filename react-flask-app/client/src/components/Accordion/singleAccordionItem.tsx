import React, { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import { AccordionItem, AccordionItemHeader, AccordionItemParagraph, AccordionSectionHeader, AccordionItemBtn } from './accordionElements';
import { SingleAccordionItem } from '../../interfaces/accordion.interface';

const SingleItem = ({title, content}: SingleAccordionItem) => {
    const [showContent, setShowContent] = useState(false);
  return (
    <AccordionItem>
        <AccordionSectionHeader>
         <AccordionItemHeader>{title}</AccordionItemHeader>
         <AccordionItemBtn onClick={() => setShowContent(!showContent)}>
            {showContent ? <AiOutlineMinus/> : <AiOutlinePlus/>}
         </AccordionItemBtn>
        </AccordionSectionHeader>
        {showContent && <p>{content}</p>}
    </AccordionItem>
  );
};

export default SingleItem;
