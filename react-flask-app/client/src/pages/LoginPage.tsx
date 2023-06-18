import React, {useState} from "react";
import httpClient from "../httpClient";
import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Sidebar/sidebar';
import { FormContainer, Heading, Form, FormParagraph, Input, Button } from './pagesElements/authenticationFormElements';
const LoginPage: React.FC = () => {
    // Default state for both login and password is an empty string
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    const toggle = (): void => {
      // false -> true or true -> false
      setIsOpen(!isOpen);
    }

    const loginUser = async () => {
        try{
            const resp = await httpClient.post("//localhost:5000/login", {
                email,
                password,
            });
            window.location.href = "/";
        }catch(error: any){
            // Catching any error type
            if (error.response.status == 401){
                alert("Invalid credentials!")
            }
        }

    };

    return (
        <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <FormContainer>
          <Heading>Log Into Your Account</Heading>
          <FormParagraph>Authentication required: </FormParagraph>
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
            <Button type="button" onClick={() => loginUser()}>
              Submit
            </Button>
          </Form>
        </FormContainer>
        </div>
    );
};

export default LoginPage;