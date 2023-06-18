import React from 'react'
import { FooterWrapper, FooterText, FooterLink } from './footerElements';
import { HiCodeBracket, HiAcademicCap } from "react-icons/hi2";

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
          <div>
          <FooterText>
                © 2023 sekvi. | 
                <FooterLink href="https://github.com/sekvi99/Python-React-Web-App/tree/main"><HiCodeBracket/></FooterLink> |
                <FooterLink href="/about"><HiAcademicCap/></FooterLink>
          </FooterText>
          </div>
        </FooterWrapper>
      );
  };

export default Footer;
