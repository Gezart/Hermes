import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useState } from "react";

const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState("");
  return (
    <div>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <div onClick={() => setIsActive("")}>
        {children}
      </div>

      <Footer setIsActive={setIsActive} />
    </div>
  )
}

export default Layout