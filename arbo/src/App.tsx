import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext, STD_USER_STATE, SidebarContext } from './Context';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logoff from './pages/Logoff';
import Recovery from './pages/Recovery';
import About from './pages/About';
import TestPage from './pages/TestPage';
import NotFound from './pages/NotFound';
import Cadastro_Arboreo from './pages/Cadastrar_Arvore';
import UserProfile from './pages/userPage';
import Qr from './pages/qrTest';

const App = () => {
  let [appUserState, setAppUserState] = useState(STD_USER_STATE)
  let [appSidebarState, setAppSidebarState] = useState(false);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{
        userState: appUserState,
        setUserState: setAppUserState,
      }}>
      <SidebarContext.Provider value={{
        sidebarState: appSidebarState,
        setSidebarState: setAppSidebarState,
      }}>
        <Routes> {/* Subpages */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='signup' element={<Signup />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='logoff' element={<Logoff />}></Route>
            <Route path='recovery' element={<Recovery />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='not-found' element={<NotFound />}></Route>
            <Route path='test' element={<TestPage />}></Route>
            <Route path='cadastro_arboreo' element={<Cadastro_Arboreo />}></Route>
            <Route path='user' element={<UserProfile />}></Route>
            <Route path='qr' element={<Qr />}></Route>
          </Route>
        </Routes>
      </SidebarContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
