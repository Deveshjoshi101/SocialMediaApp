import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Devesh Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptates, voluptas, voluptate, voluptatem voluptatum voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
