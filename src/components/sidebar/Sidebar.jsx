import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/customers" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
               Customers
              </li>
            </Link>
            <Link to="/cars" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
               Vehicles
              </li>
            </Link>
           
             <Link to="/bookings" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
               Bookings
              </li>
            </Link> 

            <Link to="/drivers" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Drivers
              </li>
            </Link>

          </ul>
        </div>

        
        
      </div>
    </div>
  );
}
