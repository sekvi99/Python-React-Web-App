import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/about" exact component={AboutPage}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;