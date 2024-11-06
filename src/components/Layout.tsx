import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useState } from 'react'

export default function Layout() {

  const [activeLink, setActiveLink] = useState('')

  return (
    <div>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      <Outlet />
      <Footer />
    </div>
  )
}
