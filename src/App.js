import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ListPage from "./pages/ListPage/ListPage";
import HomeTemplate from "./templates/HomeTemplate";
import Info from "./pages/Info/Info";
import Demo from "./pages/Demo/Demo";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <switch>
        <HomeTemplate exact path="/loginpage" component={LoginPage} />
        <HomeTemplate exact path="/registerpage" component={RegisterPage} />
        <HomeTemplate exact path="/listpage" component={ListPage} />
        <HomeTemplate exact path="/infopage" component={Info} />
        <HomeTemplate exact path="/demo" component={Demo} />


        <HomeTemplate exact path="/" component={HomePage} />
      </switch>
    </Router>
  );
}

export default App;
