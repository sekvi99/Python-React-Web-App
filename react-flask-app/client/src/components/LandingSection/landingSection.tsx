import React from 'react'
import {
    LandingSectionContainer,
    LandingHeaderSection,
    LandingTextSection,
    LandingGraphSection,
    TypeWriterTextSection,
} from "./landingSectionElements";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import DemoChart from '../DemoChart/demoChart';
const LandingSection: React.FC = () => {

  const [text] = useTypewriter({
    words: ['Filip Kozlik'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <>
    <LandingSectionContainer>
      <LandingTextSection>
      <LandingHeaderSection>
        Project Created By: 
      </LandingHeaderSection>
      <TypeWriterTextSection>
        {text}
      </TypeWriterTextSection>
        <span>
        <Cursor cursorColor='red' cursorStyle='|' />
        </span>
      </LandingTextSection>
      <LandingHeaderSection>
        Application Demo
      </LandingHeaderSection>
      <LandingGraphSection>
        <DemoChart />
      </LandingGraphSection>
    </LandingSectionContainer>
    </>
  )
}

export default LandingSection;
