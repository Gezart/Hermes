import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, slug}) => {
  return (
    <div className={`page page-${slug}`}>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout