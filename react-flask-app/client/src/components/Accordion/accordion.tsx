import React, {useState} from 'react'
import { accordionContent } from './accordionData';
import { AccordionContainer, AccordionHeader, AccordionSection } from './accordionElements';
import SingleItem from './singleAccordionItem';

const AccordionComponent = () => {

  const [items, setItem] = useState(accordionContent);

  return (
    <main>
        <AccordionContainer>
            <AccordionHeader>Project Description</AccordionHeader>
            <AccordionSection>
                {items.map((item) => {
                    return <SingleItem key={item.id} title={item.title} content={item.content} />;
                })}
            </AccordionSection>
        </AccordionContainer>
    </main>
  );
};

export default AccordionComponent;
