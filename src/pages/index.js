import React, {useState} from 'react'
import SideBar from '../components/SideBar';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  const [IsOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!IsOpen)
  };

  return (
    <>
    <SideBar IsOpen={IsOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services />
    <InfoSection {...homeObjThree}/>
    <Footer />
    </>
  )
}

export default Home 