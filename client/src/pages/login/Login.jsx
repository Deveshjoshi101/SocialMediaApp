import "./login.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptates, voluptas, voluptate, voluptatem voluptatum voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          </p>
          <span>Don't have an account yet?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
