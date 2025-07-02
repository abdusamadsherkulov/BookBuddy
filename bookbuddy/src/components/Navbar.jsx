import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import UniLinkLogo from '../assets/UniLink_light.svg';
import HomeIconLight from '../assets/HomeIcon_light.svg';
import HomeIconDark from '../assets/HomeIcon_dark.svg';
import HomeIconSelectedLight from '../assets/HomeIconSelected_light.svg';
import HomeIconSelectedDark from '../assets/HomeIconSelected_dark.svg';
import SearchIconLight from '../assets/SearchIcon_light.svg';
import MesssageIconLight from '../assets/MessageIcon_light.svg';
import NotificationIconLight from '../assets/NotificationIcon_light.svg';
import NotificationIconNewLight from '../assets/NotificationIconNew_light.svg';
import CreateIconLight from '../assets/CreateIcon_light.svg';
import ProfileIconLight from '../assets/ProfileIcon_light.svg';
import MoreIconLight from '../assets/MoreIcon_light.svg';

export default function Navbar({darkMode, setDarkMode}) {
  return (
    <div className="navbar">
      <a href="#">
        <img src={UniLinkLogo} alt="logo" id="logo" />
      </a>
      <div className="nav-menu">
        <ul className="nav-list">
          <Link to="/">
            <li>
              <img className="icon_l" src={HomeIconLight} alt="Home" />
              &nbsp;&nbsp;&nbsp;Home
            </li>
          </Link>
          <Link to="/search">
            <li>
              <img className="icon_l" src={SearchIconLight} alt="Search" />
              &nbsp;&nbsp;&nbsp;Search connection
            </li>
          </Link>
          <Link to="/messages">
            <li>
              <img className="icon_l" src={MesssageIconLight} alt="Message" />
              &nbsp;&nbsp;&nbsp;Messages
            </li>
          </Link>
          <Link to="/notification">
            <li>
              <img
                className="icon_m"
                src={NotificationIconLight}
                alt="notification"
              />
              &nbsp;&nbsp;&nbsp;Notification
            </li>
          </Link>
          <Link to="/create">
            <li>
              <img
                className="icon_m"
                src={CreateIconLight}
                alt="notification"
              />
              &nbsp;&nbsp;&nbsp;Create
            </li>
          </Link>
          <Link to="/profile">
            <li>
              <img
                className="icon_s"
                src={ProfileIconLight}
                alt="notification"
              />
              &nbsp;&nbsp;&nbsp;Profile
            </li>
          </Link>
        </ul>

        <div className="nav-more">
          <a href="#">
            <li>
              <img className="icon_s" src={MoreIconLight} alt="more" />
              &nbsp;&nbsp;&nbsp;More
            </li>
          </a>
        </div>
      </div>
    </div>
  );
}
