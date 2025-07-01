import {Link} from 'react-router-dom';
import UniLinkLogo from '../assets/UniLink_light.svg';
import HomeIconLight from '../assets/HomeIcon_light.svg';
import SearchIconLight from '../assets/SearchIcon_light.svg';
import MesssageIconLight from '../assets/MessageIcon_light.svg';
import NotificationIconLight from '../assets/NotificationIcon_light.svg';
import NotificationIconNewLight from '../assets/NotificationIconNew_light.svg';
import CreateIconLight from '../assets/CreateIcon_light.svg';
import ProfileIconLight from '../assets/ProfileIcon_light.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#">
        <img src={UniLinkLogo} alt="logo" id="logo" />
      </a>
      <div className="nav-menu">
        <ul>
          <a href="#">
            <li>
              <img className="icon_l" src={HomeIconLight} alt="Home" />
              &nbsp;&nbsp;Home
            </li>
          </a>
          <a href="#">
            <li>
              <img className="icon_l" src={SearchIconLight} alt="Search" />
              &nbsp;&nbsp;Search connection
            </li>
          </a>
          <a href="#">
            <li>
              <img className="icon_l" src={MesssageIconLight} alt="Message" />
              &nbsp;&nbsp;Messages
            </li>
          </a>
          <a href="#">
            <li>
              <img
                className="icon_m"
                src={NotificationIconLight}
                alt="notification"
              />
              &nbsp;&nbsp;Notification
            </li>
          </a>
          <a href="#">
            <li>
              <img
                className="icon_m"
                src={CreateIconLight}
                alt="notification"
              />
              &nbsp;&nbsp;Create
            </li>
          </a>
          <a href="#">
            <li>
              <img
                className="icon_s"
                src={ProfileIconLight}
                alt="notification"
              />
              &nbsp;&nbsp;Profile
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
