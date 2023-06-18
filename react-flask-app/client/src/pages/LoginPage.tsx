import React, {useState} from "react";
import httpClient from "../httpClient";
import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Sidebar/sidebar';
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
            <h1>Log Into Your Account</h1>
            <form>
                <label>Email: </label>
                <input type="text" value={email} onChange={(email) => setEmail(email.target.value)} id=""/>
                <label>Password: </label>
                <input type="password" value={password} onChange={(password) => setPassword(password.target.value)} id=""/>
            <button type="button" onClick={() => loginUser()}>Submit</button>
            </form>
        </div>
    )
};

export default LoginPage;