import React, { useRef, useEffect, useState } from 'react';

import { Link, useLocation, useNavigate} from 'react-router-dom';
import { UserAuth } from "../../../context/AuthContext";
import './header.scss';

import logo from '../../images/main_logo.png';

import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../../../Firebase';
    

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
        display: 'Rec/Ins',
        path: '/insight',
        onClick: true,
        handle: "land",
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
        handle: "logout",
        authChange: true,
        users: true,
    }
];

const Header = ({darkMode, landMode, setLandMode, homeMode, setHomeMode }) => {


    const [todo, setTodo] = useState("Hello")
    const [id, setID] = useState("")
    const [todos, setTodos] = useState([])
    const addTodo = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "test"), {
              added: todo,    
              name: todo,
            });
            console.log("Document written with ID: ", docRef.id);
            setID(docRef.id);
          } catch (e) {
            console.log("Error adding document: ",e);
          }
    }
    const fetchPost = async () => {
       
        await getDocs(collection(db, "test"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                
                setTodos(newData);                
                console.log(todos, newData);
            })
       
    }
   
    useEffect(()=>{
        fetchPost();
    }, [id])
    // addTodo();
    console.log(todo)
    console.log(todos)

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    const homeClickHandler = () => {
        setHomeMode(true);
        setLandMode(false);
      };
    const dashClickHandler = () => {
        // const {user} = UserAuth()
        if(user?.email){
            setHomeMode(false);
            setLandMode(false);
            
        }else{
            setLandMode(true);
        }
        
      };  
    const landClickHandler = () => {
        setLandMode(true);
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

    const chooseHandler =(handle) => {
        if (handle==="logout") return handleLogOut
        else if (handle==="home") return homeClickHandler
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
                            (e.handle==="dash")?
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={(user?.email)?e.path:"/"} onClick={chooseHandler(e.handle)}>
                                    {e.display}
                                </Link>
                            </li>
                            :
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} onClick={chooseHandler(e.handle)}>
                                    {e.display}
                                </Link>
                            </li>
                            :
                            user?.email?
                            (e.users)?
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} onClick={chooseHandler(e.handle)}>
                                    {e.display}
                                </Link>
                            </li>
                            : <></>
                            :(!e.users)?
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} onClick={chooseHandler(e.handle)}>
                                    {e.display}
                                </Link>
                            </li>
                            : <> </>
                        ))
                        
                    }
                    {/* <li key={24} className={`${24 === active ? 'active' : ''}`}>
                                <Link to="/" onClick={addTodo}>
                                    Hello
                                </Link>
                        </li>
                        <li key={24} className={`${24 === active ? 'active' : ''}`}>
                                <Link to="/" onClick={fetchPost}>
                                    Yo
                                </Link>
                        </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Header;
