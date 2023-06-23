import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/sidebar';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import { ILayout } from '../../interfaces/layout.interface';
import { User } from '../../types';
import httpClient from '../../httpClient';
import { environment } from '../../ environments/environment';

const Layout: React.FC<ILayout> = ( { children }) => {
   
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const toggle = (): void => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        (async () => {
          try {
            const resp = await httpClient.get(`${environment.url}/@me`);
            setUser(resp.data);
          } catch (error) {
            console.log("Not authenticated");
          }
        })();
      }, []);

    return (
      <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} user={user}/>
        {children}
        <Footer />
      </div>
    )
}

export default Layout;
