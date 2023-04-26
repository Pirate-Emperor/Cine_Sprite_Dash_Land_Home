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
import {Link, useNavigate} from "react-router-dom";
import { useContext, useEffect} from "react";
import { DarkModeContext} from "../../context/darkModeContext";
import logo from '../../../assets/images/main_logo.png';
import { UserAuth } from "../../../../../context/AuthContext";
const Sidebar = ({landMode, setLandMode, homeMode, setHomeMode,setHomeMode1,setUserMode}) => {

  const {dispatch} = useContext(DarkModeContext)
  const homeClickHandler = () => {
    setHomeMode(true);
  };
  const landClickHandler = () => {
    setLandMode(true);
  };
  const titleClickHandler = () => {
    setUserMode(false);
    setHomeMode1(true);
  };
  const { user, logOut } = UserAuth();
    console.log(user);
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
        await logOut();
        landClickHandler();
        navigate("/");
        }catch (error) {
        console.log(error);
        }
    };

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
           <Link to="/dash" style={{textDecoration: "none"}}>
            <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
            </Link>
            <p className="title">FEATURES</p>
            <Link to="/users" style={{textDecoration: "none"}}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
            <span>Collaborators</span>
            </li>
            </Link>
            <Link to="/title" style={{textDecoration: "none"}}>
            <li>
              <LocalMovies className="icon" />
            <span>Titles</span>
            </li>
            </Link>
            <Link to="/attempt" style={{textDecoration: "none"}}>
            <li>
              <Engineering className="icon" />
            <span>Attempts</span>
            </li>
            </Link>
            <Link to="/record" style={{textDecoration: "none"}}>
            <li>
              <FiberSmartRecord className="icon" />
            <span>Records</span>
            </li>
            </Link>
            <p className="title">NAVIGATION</p>
            <Link to="/home" style={{textDecoration: "none"}} onClick={homeClickHandler}>
            <li>
              <AnalyticsIcon className="icon" />
            <span>Home</span>
            </li>
            </Link>
            <Link to="/" style={{textDecoration: "none"}} onClick={titleClickHandler}>
            <li>
              <NotificationsNoneOutlinedIcon className="icon" />
            <span>Viewers</span>
            </li>
            </Link>
            <Link to="/home" style={{textDecoration: "none"}} onClick={homeClickHandler}>
            <li>
              <NotificationsNoneOutlinedIcon className="icon" />
            <span>Genre</span>
            </li>
            </Link>
            <Link to="/" style={{textDecoration: "none"}} onClick={landClickHandler}>
            <li>
              <NotificationsNoneOutlinedIcon className="icon" />
            <span>Land</span>
            </li>
            </Link>
            <Link to="/account" style={{textDecoration: "none"}} onClick={landClickHandler}>
            <p className="title">USER</p>
            <li>
              <SettingsOutlinedIcon className="icon" />
            <span>Account</span>
            </li>
            </Link>
            <Link to="/" style={{textDecoration: "none"}} onClick={handleLogOut}>
            <li>
              <InputOutlinedIcon className="icon" />
            <span>Logout</span>
            </li>
            </Link>
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
