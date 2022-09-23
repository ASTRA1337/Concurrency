import React, {useState} from 'react'
import SideBar from '../components/SideBar';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [IsOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!IsOpen)
  }

  return (
    <>
    <SideBar IsOpen={IsOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection />
    </>
  )
}

export default Home 