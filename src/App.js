import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ListPage from "./pages/ListPage/ListPage";
import HomeTemplate from "./templates/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate";
import Info from "./pages/Info/Info";
<<<<<<< HEAD
import Demo from "./pages/Demo/Demo";
=======
import UserPage from "./pages/UserPage/UserPage";
import ClassPage from "./pages/ClassPage/ClassPage";
import UpdateClass from "./pages/ClassPage/UpdateClass";
import UpdateUser from "./pages/UserPage/UpdateUser";
>>>>>>> master

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <switch>
<<<<<<< HEAD
        <HomeTemplate exact path="/loginpage" component={LoginPage} />
        <HomeTemplate exact path="/registerpage" component={RegisterPage} />
        <HomeTemplate exact path="/listpage" component={ListPage} />
        <HomeTemplate exact path="/infopage" component={Info} />
        <HomeTemplate exact path="/demo" component={Demo} />
=======
        <HomeTemplate exact path="/dangnhap" component={LoginPage} />
        <HomeTemplate exact path="/dangky" component={RegisterPage} />
        <HomeTemplate exact path="/danhmuckhoahoc" component={ListPage} />
        <HomeTemplate exact path="/thongtinnguoidung" component={Info} />
        <AdminTemplate exact path="/quanlynguoidung" component={UserPage} />
        <HomeTemplate exact path="/quanlylophoc" component={ClassPage} />
        <HomeTemplate exact path="/themkhoahoc" component={UpdateClass} />
        <HomeTemplate exact path="/themnguoidung" component={UpdateUser} />
>>>>>>> master


        <HomeTemplate exact path="/" component={HomePage} />
      </switch>
    </Router>
  );
}

export default App;
