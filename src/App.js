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
import Sidebar from "./srcni/components/sidebar/Sidebar"
import Navbar from "./srcni/components/navbar/Navbar"
import Home1 from "./srcni/pages/home/Home";
import Record from "./srcni/pages/records/Records";
import Login1 from "./srcni/pages/login/Login";
import List from "./srcni/pages/list/List";
import Attempt from "./srcni/pages/attempt/Attempt";
import Single from "./srcni/pages/single/Single";
import SingleEngine from "./srcni/pages/single_eng/Single";
import Title from "./srcni/pages/title/Title";
import New from "./srcni/pages/new/New";
import { productInputs, userInputs } from "./srcni/formSource";
import "./srcni/style/dark.scss";
import { DarkModeContext} from "./srcni/context/darkModeContext";
import "./app1.scss";

// srcnl (Land)

import 'aos/dist/aos.css';
import './srcnl/css/style.css';

import AOS from 'aos';

import Header2 from './srcnl/comp/header/Header';
import Home2 from './srcnl/pages/Home';
import SignIn from './srcnl/pages/SignIn';
import SignUp from './srcnl/pages/SignUp';
import ResetPassword from './srcnl/pages/ResetPassword';

// srcnk (Recommender)
import Appy from './src/App';
// Auth
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const {darkMode} = useContext(DarkModeContext)
  const [homeMode, setHomeMode] = useState(true);
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
    // <AuthContextProvider>
    <div className={darkMode ? "app dark" : "app"}>
      <Header2 darkMode={darkMode} 
          landMode={landMode}
          setLandMode={(obj) => setLandMode(obj)}
          homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>
      <Routes>
        <Route exact path="/" element={<Home2 />} />
        <Route exact path="/insight" element={<ProtectedRoute> <Appy /> </ProtectedRoute>} /> 
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      </div>
      // </AuthContextProvider>

    :
    (!homeMode)
    ?
    // <AuthContextProvider>
    
    <div  className={darkMode ? "app dark" : "app"}>
    {/* <BrowserRouter> */}
    {/* <DarkModeContextProvider> */}
    <div className="app1">
    <Sidebar className="side"
    landMode={landMode}
    setLandMode={(obj) => setLandMode(obj)}
    homeMode={homeMode}
    setHomeMode={(obj) => setHomeMode(obj)}/>
      <Routes>
        <Route path="/"> 
        <Route path="dash" element={<ProtectedRoute><Home1 
          landMode={landMode}
          setLandMode={(obj) => setLandMode(obj)}
          homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/> </ProtectedRoute>} /> 
          <Route path="record" element={<Record 
          landMode={landMode}
          setLandMode={(obj) => setLandMode(obj)}
          homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>} />
        <Route path="login" element={<Login1/>}/>
        <Route path="attempt" element={<Attempt homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
        <Route path="title" element={<Title homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
        <Route path="users">
          <Route index element={<List homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
          <Route path=":userId" element={<Single homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
          
          <Route path="new" element={<New inputs={userInputs} title="Add New User" homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
        </Route>
        <Route path="engine">
          <Route index element={<List homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
          <Route path=":engineId" element={<SingleEngine homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
          <Route path="new" element={<New inputs={productInputs} title="Add New Product" homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>}/>
        </Route>
        </Route>
      </Routes>
      {/* </DarkModeContextProvider> */}
      {/* </BrowserRouter> */}
      </div>
      </div>

      // </AuthContextProvider>
      :
      // <AuthContextProvider>
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
    // </AuthContextProvider>
  );
}

export default App;
