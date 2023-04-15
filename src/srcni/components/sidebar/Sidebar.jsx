import "./sidebar.scss"

import FiberSmartRecord from '@mui/icons-material/FiberSmartRecord';
import Engineering from '@mui/icons-material/Engineering';
import LocalMovies from '@mui/icons-material/LocalMovies';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import {Link} from "react-router-dom";
import { useContext} from "react";
import { DarkModeContext} from "../../context/darkModeContext";
import logo from '../../../assets/images/main_logo.png';
const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar"> 
    <div className="top">
      <Link to="/dash" className="top" style={{textDecoration: "none"}}>
      <img className="logo"  src={logo} alt="" style={{display: "flex" ,width: 40}}/>
     <span className="logo" style={{display: "flex", paddingLeft:5}}>Cine Analyzer</span>
     </Link>
    </div>
    <hr />
    <div className="center">
        <ul>
           <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration: "none"}}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration: "none"}}>
            <li>
              <LocalMovies className="icon" />
            <span>Titles</span>
            </li>
            </Link>
            <li>
              <Engineering className="icon" />
            <span>Attempts</span>
            </li>
            <li>
              <FiberSmartRecord className="icon" />
            <span>Records</span>
            </li>
            <p className="title">USEFUL LINKS</p>
            <li>
              <AnalyticsIcon className="icon" />
            <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneOutlinedIcon className="icon" />
            <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
            </li>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
            <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <SettingsOutlinedIcon className="icon" />
            <span>Profile</span>
            </li>
            <li>
              <InputOutlinedIcon className="icon" />
            <span>Logout</span>
            </li>
        </ul>

    </div>
    <div className="bottom">
        <div className="colorOption" 
        onClick={() => dispatch({ type : "LIGHT"})}>
        </div>

          <div className="colorOption"
        onClick={() => dispatch({ type : "DARK"})}>
        </div>

    </div>
    </div>
  )
}

export default Sidebar
