import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

const Layout = ({ children }) => {
  const linkList = [
    { name: "video games", back: "video", link: "/" },
    { name: "contact", back: "contact", link: "/contact" },
  ];
  const [active, setActive] = React.useState(0);

  return (
    <div className="App">
      <header>
        <nav className="App-header">
          {linkList.map((link, index) => (
            <div className="app-link" key={index}>
              <p className={`link-back ${active === index ? "visible" : ""}`}>
                {link.back.toUpperCase()}
              </p>
              <Link className="link" to={link.link} onClick={() => setActive(index)}>
                {link.name.toUpperCase()}
              </Link>
            </div>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
