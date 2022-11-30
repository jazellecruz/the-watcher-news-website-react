import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/customStyles.css"
import WatcherLogo from "../assets/the-watcher-logo.png"
import menuIcon from "../assets/menu-icon.png";
import closeIcon from "../assets/close-icon.png";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <nav className="navbar">
      <div className="brand-container">
        <Link to="/">
          <img src={WatcherLogo} className="logo" alt="watcher-logo" />
        </Link>
      </div>
      
      <button className={`nav-bar-btn ${isActive && "active"}`} onClick={handleClick}>
        <img src={menuIcon} className="nav-bar-icon open-icon" alt="menu-icon"></img>
        <img src={closeIcon} className="nav-bar-icon close-icon" alt="close-icon"></img>
      </button>
      
      <div className={`nav-link-container ${isActive && "active"}`} >
        <ul>
          <li>
            <span className="powered-by-text">powered by </span> 
              <a href="//newscatcherapi.com/" target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link">
                &lt;&#x2f;newscatcher&gt;</a>
          </li>
          <li><a href="//github.com/jazellecruz/the-watcher-news-website-react" target="_blank" 
                        rel="noopener noreferrer" className="nav-link">GitHub</a></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
        </ul>
      </div>
    </nav>
    );
}



