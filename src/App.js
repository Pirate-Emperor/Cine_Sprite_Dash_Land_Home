import React, { useState , useContext, useEffect} from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import Features from "./components/features";
import Contact from "./components/contact";
import Extension from "./components/extension";
import { tema, temad } from "./theme/theme";
import Header from "./components/header";
import Footer from "./components/footer";
import SucessoEmail from "./components/sucessoEmail";
import Login from "./components/login";

// srcni (Dash)
import Home1 from "./srcni/pages/home/Home";
import Login1 from "./srcni/pages/login/Login";
import List from "./srcni/pages/list/List";
import Single from "./srcni/pages/single/Single";
import New from "./srcni/pages/new/New";
import { productInputs, userInputs } from "./srcni/formSource";
import "./srcni/style/dark.scss";
import { DarkModeContext} from "./srcni/context/darkModeContext";


// srcnl (Land)

import 'aos/dist/aos.css';
import './srcnl/css/style.css';

import AOS from 'aos';

import Header2 from './srcnl/comp/header/Header';
import Home2 from './srcnl/pages/Home';
import SignIn from './srcnl/pages/SignIn';
import SignUp from './srcnl/pages/SignUp';
import ResetPassword from './srcnl/pages/ResetPassword';
function App() {
  const {darkMode} = useContext(DarkModeContext)
  const [homeMode, setHomeMode] = useState(false);
  const [landMode, setLandMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    (landMode)
    ?
    // <BrowserRouter>
    <div className={darkMode ? "app dark" : "app"}>
      <Header2 darkMode={darkMode} 
          landMode={landMode}
          setLandMode={(obj) => setLandMode(obj)}
          homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>
      <Routes>
        <Route exact path="/" element={<Home2 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      </div>
    // </BrowserRouter>
    :
    (!homeMode)
    ?<div  className={darkMode ? "app dark" : "app"}>
    {/* <BrowserRouter> */}
    {/* <DarkModeContextProvider> */}
      <Routes>
        <Route path="/"> 
        <Route path="dash" element={<Home1 homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>} />
        <Route path="login" element={<Login1/>}/>
        <Route path="users">
          <Route index element={<List homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
          <Route path=":userId" element={<Single homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
          <Route path="new" element={<New inputs={userInputs} title="Add New User" homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
        </Route>
        <Route path="products">
          <Route index element={<List homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
          <Route path=":productId" element={<Single homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
          <Route path="new" element={<New inputs={productInputs} title="Add New Product" homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
        </Route>
        </Route>
      </Routes>
      {/* </DarkModeContextProvider> */}
      {/* </BrowserRouter> */}
      </div>
      :
      <div className={darkMode ? "app dark" : "app"}>
        {/* <BrowserRouter> */}
      
      <Header2 darkMode={darkMode} 
          landMode={landMode}
          setLandMode={(obj) => setLandMode(obj)}
          homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>
      <ThemeProvider theme={darkMode?temad:tema}>
      <GlobalStyles />
      {/* <Header homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/> */}
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/sucessoEmail" element={<SucessoEmail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer landMode={landMode}
          setLandMode={(obj) => setLandMode(obj)}
          homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/> */}
    </ThemeProvider>
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
