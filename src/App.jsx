import "./App.css";
import { useState } from "react";
import Login from "./component/Login.jsx";
import User from "./component/User.jsx";
import Newsfeed from "./component/Newsfeed.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const userLogout = () => {
    setIsLogin(false);
    setUser("")
  };
  const userLogin = () => {
    setIsLogin(true);
  };
  const [user, setUser] = useState("");
  const chooseUserName = (name) => {
    setUser(name);
    // setIsLogin(true);
  };
  return (
    <>
      {isLogin === true ? (
        user ? (
          <Newsfeed LogOut={userLogout} UserName = {user}/>
        ) : (
          <User UserName={chooseUserName} />
        )
      ) : (
        <Login LogIn={userLogin} />
      )}
    </>
  );
}

export default App;
