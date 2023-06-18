import React, {useState} from 'react';
import AccordionComponent from '../components/Accordion/accordion';
import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Sidebar/sidebar';
import Footer from '../components/Footer/footer';
const AboutPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = (): void => {
      // false -> true or true -> false
      setIsOpen(!isOpen);
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <AccordionComponent/>
    <Footer/>
    </>
  );
};

export default AboutPage
