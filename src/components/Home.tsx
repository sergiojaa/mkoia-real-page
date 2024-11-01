import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
    const nav = () =>{
        navigate('/about')
    }
  return (
    <div>
      {/* <Link to={'/about'}>navigate to about</Link>
      <button onClick={nav}>
        navigate to about
      </button> */}
    </div>
  )
}
