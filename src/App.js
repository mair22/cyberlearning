import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomeTemplate from "./templates/HomeTemplate";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <switch>
        <HomeTemplate exact path="/loginpage" component={LoginPage} />
        <HomeTemplate exact path="/registerpage" component={RegisterPage} />

        <HomeTemplate exact path="/" component={HomePage} />
      </switch>
    </Router>
  );
}

export default App;
