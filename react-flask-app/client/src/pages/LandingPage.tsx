import React, {useState, useEffect} from "react";
import { User } from "../types";
import httpClient from "../httpClient";
import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Sidebar/sidebar';
import { SidebarProps } from "../interfaces/sidebar.interface";
import LandingSection from "../components/LandingSection/landingSection";



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
            <LandingSection />
          )}
        </div>
      );
    };

export default LandingPage;