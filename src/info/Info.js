import './Info.css';
import usr from './logo_usr.svg';

function Login() {

  return (
    <div className="info">
      <header className="info_header">

          <img src={usr} className="info_usr"/>
          <h1>Mr.Bean</h1>
          <div className="info_text">
          <a>Admin</a>
          <input></input>
          <a>Phone number</a>
          <input></input>
          <a>Email Address</a>
          <input></input>
          <a>Permission</a>
          <input></input>
            </div>
        <button>Save</button>

      </header>
    </div>
  );
}

export default Login;
