import React, { useState } from "react";
import httpClient from "../httpClient";
import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Sidebar/sidebar';

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
      <h1>Create an account</h1>
      <form>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id=""
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id=""
          />
        </div>
        <button type="button" onClick={() => registerUser()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;