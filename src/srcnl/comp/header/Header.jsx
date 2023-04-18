import React, { useRef, useEffect } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserAuth } from "../../../context/AuthContext";
import './header.scss';

import logo from '../../images/main_logo.png';

const headerNav = [
    {
        display: 'Land',
        path: '/',
        onClick: true,
        handle: "land",
        authChange: false,
        
    },
    {
        display: 'Home',
        path: '/home',
        onClick: true,
        handle: "home",
        authChange: false,
    },
    {
        display: 'Dashboard',
        path: '/dash',
        onClick: true,
        handle: "dash",
        authChange: false,
    },
    {
        display: 'Sign In',
        path: '/signin',
        onClick: true,
        handle: "land",
        authChange: true,
        users: false,
    },
    {
        display: 'Sign Up',
        path: '/signup',
        onClick: true,
        handle: "land",
        authChange: true,
        users: false,
    },
    {
        display: 'Account',
        path: '/account',
        onClick: true,
        handle: "land",
        authChange: true,
        users: true,
    },
    {
        display: 'Log Out',
        path: '/',
        onClick: true,
        handle: "land",
        authChange: true,
        users: true,
    }
];

const Header = ({darkMode, landMode, setLandMode, homeMode, setHomeMode }) => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);
    

    const homeClickHandler = () => {
        setHomeMode(true);
        setLandMode(false);
      };
    const dashClickHandler = () => {
        setHomeMode(false);
        setLandMode(false);
      };  
    const landClickHandler = () => {
        setLandMode(true);
    };

    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
        await logOut();
        homeClickHandler();
        navigate("/");
        }catch (error) {
        console.log(error);
        }
    };

    const chooseHandler =(handle) => {
        if (handle==="home") return homeClickHandler
        else if (handle==="dash") return dashClickHandler
        else if (handle==="land") return landClickHandler
    }
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className={`${!darkMode?"darki":"header"}`}>
            
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/" onClick={landClickHandler}>Cine Sprite</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            (!e.onClick)?
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} >
                                    {e.display}
                                </Link>
                            </li>
                            :
                            (!e.authChange)?
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} onClick={chooseHandler(e.handle)}>
                                    {e.display}
                                </Link>
                            </li>
                            :
                            user?.email?
                            (!e.users)?
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} onClick={chooseHandler(e.handle)}>
                                    {e.display}
                                </Link>
                            </li>
                            : <></>
                            :(e.users)?
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} onClick={chooseHandler(e.handle)}>
                                    {e.display}
                                </Link>
                            </li>
                            : <> </>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    );
}

export default Header;
