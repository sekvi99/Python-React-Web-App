import React, {useState, useEffect} from "react";
import { User } from "../types";
import httpClient from "../httpClient";
import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Sidebar/sidebar';
import { SidebarProps } from "../interfaces/sidebar.interface";


const LandingPage: React.FC<SidebarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const toggle = (): void => {
      // false -> true or true -> false
      setIsOpen(!isOpen);
    }
    
    const logoutUser = async () => {
      await httpClient.post("//localhost:5000/logout");
      window.location.href = "/";
    };
  
    useEffect(() => {
      (async () => {
        try {
          const resp = await httpClient.get("//localhost:5000/@me");
          setUser(resp.data);
        } catch (error) {
          console.log("Not authenticated");
        }
      })();
    }, []);

    return (
        <div>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          {user != null ? (
            <div>
              <h2>Logged in</h2>
              <h3>ID: {user.id}</h3>
              <h3>Email: {user.email}</h3>
    
              <button onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <div>
              <p>You are not logged in</p>
              <div>
                <a href="/login">
                  <button>Login</button>
                </a>
                <a href="/register">
                  <button>Register</button>
                </a>
              </div>
            </div>
          )}
        </div>
      );
    };

export default LandingPage;