import { useEffect } from 'react';
import './Logout.css';

function Logout() {

  // useEffect(() => {
  //   Auth.signOut();
  //   trySignout();
  // }, []);

  // async function trySignout() {
  //   try {
  //     console.log("Signing out");
  //     await Auth.signOut();
  //   } catch (error) {
  //       console.log('error signing out: ', error);
  //   }
  // }

  return (
    <div className="logout">
      <header className="logout_header">
        <a>Thank you for using GFR Cloud Simulation Engine</a>
        <a>We wish you have a nice day</a>
        <a>See you next time</a>
      </header>
    </div>
  );
}

export default Logout;
