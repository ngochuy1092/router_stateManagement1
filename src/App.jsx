import React, { useState,createContext } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import {Contact} from "./pages/Contact";
import {Navbar} from "./pages/Navbar";
export const AppContext = createContext ();

export default function App() {
  const [newName, setNewName] = useState("Huy");
  return (
    <div> 
      <AppContext.Provider value={{newName, setNewName}}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home />}/> 
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<h1>Not found</h1>}> </Route>
          </Routes>
        </Router>
    </AppContext.Provider>
    </div>
  )
}