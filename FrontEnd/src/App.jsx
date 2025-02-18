import React from "react";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Song from "./pages/Song";
import Songs from "./pages/Songs";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";
import Header from './components/Header'

const App = () => {

  return <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route
        path="/" 
        element={<Home/>}
        />
          <Route
        path="/artists" 
        element={<Artists/>}
        />
          <Route
        path="/artist/:id" 
        element={<Artist/>}
        />
          <Route
        path="/songs" 
        element={<Songs/>}
        />
          <Route
        path="/song/:id" 
        element={<Song/>}
        />

      </Routes>
    </BrowserRouter>



  </>

}

export default App;