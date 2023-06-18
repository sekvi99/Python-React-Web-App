import React, { useState } from "react";
import httpClient from "../httpClient";
import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Sidebar/sidebar';
import { FormContainer, Heading, Form, FormParagraph, Input, Button } from './pagesElements/authenticationFormElements';
import Footer from "../components/Footer/footer";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => {
    // false -> true or true -> false
    setIsOpen(!isOpen);
  }

  const registerUser = async () => {
    try {
      const resp = await httpClient.post("//localhost:5000/register", {
        email,
        password,
      });

      window.location.href = "/";
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  };

  return (
          <div>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <FormContainer>
            <Heading>Create An Account</Heading>
            <FormParagraph>Registration Required: </FormParagraph>
            <Form>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id=""
              />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                id=""
              />
              <Button type="button" onClick={() => registerUser()}>
                Submit
              </Button>
            </Form>
          </FormContainer>
          <Footer />
          </div>
  );
};

export default RegisterPage;