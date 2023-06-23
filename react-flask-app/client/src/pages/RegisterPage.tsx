import React, { useState } from "react";
import httpClient from "../httpClient";
import { FormContainer, Heading, Form, FormParagraph, Input, Button } from './pagesElements/authenticationFormElements';
import Layout from "../components/Layout/layout";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
        
      } else if (error.response.status == 409) {
        alert("User already exist");
      }
    }
  };

  return (
        <Layout>
          <div>
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
          </div>
        </Layout>
  );
};

export default RegisterPage;