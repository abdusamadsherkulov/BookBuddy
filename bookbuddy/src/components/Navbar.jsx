import {Link} from 'react-router-dom';
import UniLinkLogo from '../assets/UniLink_light.svg';
import HomeIconLight from '../assets/HomeIcon_light.svg';
import SearchIconLight from '../assets/SearchIcon_light.svg';
import MesssageIconLight from '../assets/MessageIcon_light.svg';
import NotificationIconLight from '../assets/NotificationIcon_light.svg';
import NotificationIconNewLight from '../assets/NotificationIconNew_light.svg';
import CreateIconLight from '../assets/CreateIcon_light.svg';
import ProfileIconLight from '../assets/ProfileIcon_light.svg';
import MoreIconLight from '../assets/MoreIcon_light.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#">
        <img src={UniLinkLogo} alt="logo" id="logo" />
      </a>
      <div className="nav-menu">
        <ul className="nav-list">
          <a href="#">
            <li>
              <img className="icon_l" src={HomeIconLight} alt="Home" />
              &nbsp;&nbsp;&nbsp;Home
            </li>
          </a>
          <a href="#">
            <li>
              <img className="icon_l" src={SearchIconLight} alt="Search" />
              &nbsp;&nbsp;&nbsp;Search connection
            </li>
          </a>
          <a href="#">
            <li>
              <img className="icon_l" src={MesssageIconLight} alt="Message" />
              &nbsp;&nbsp;&nbsp;Messages
            </li>
          </a>
          <a href="#">
            <li>
              <img
                className="icon_m"
                src={NotificationIconLight}
                alt="notification"
              />
              &nbsp;&nbsp;&nbsp;Notification
            </li>
          </a>
          <a href="#">
            <li>
              <img
                className="icon_m"
                src={CreateIconLight}
                alt="notification"
              />
              &nbsp;&nbsp;&nbsp;Create
            </li>
          </a>
          <a href="#">
            <li>
              <img
                className="icon_s"
                src={ProfileIconLight}
                alt="notification"
              />
              &nbsp;&nbsp;&nbsp;Profile
            </li>
          </a>
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
