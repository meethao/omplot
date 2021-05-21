import './Login.css';
import usr from './logo_usr.svg';

function Login() {

  return (
    <div className="login">
      <header className="login_header">
        <img src={usr} className="login_usr"/>
        <a>Email or Username</a>
        <input></input>
        <a>Password</a>
        <input></input>
        <button>Login</button>
      </header>
    </div>
  );
}

export default Login;
