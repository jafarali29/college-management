import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { UserContext } from './UserContext';
import { useState } from 'react';
import LayoutWrapper from './LayoutWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [user,setUser]=useState("Guest")

  return (
    <UserContext.Provider value={{user,setUser}}>
        <BrowserRouter>
          <LayoutWrapper/>
        </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
