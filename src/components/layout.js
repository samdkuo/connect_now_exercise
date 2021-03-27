import * as React from "react";
import {Link} from "react-router-dom";

const Layout = ({children}) => {
  return (
    <div className="App">
      <header className="App-header">
          <nav>
          <Link to="/">VIDEO GAMES</Link>
          <Link to="/contact">CONTACT</Link>
          </nav>
      </header>
      {children}
    </div>
  )
};

export default Layout;
