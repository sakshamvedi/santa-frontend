import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myaddress from './site/myaddress'
import Allcards from './site/allcards'
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Myaddress />} />
          <Route path="/myaddress" element={<Allcards />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;