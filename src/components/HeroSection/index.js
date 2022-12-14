import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';
import { HeroContainer,HeroBg,VideoBg, HeroContent, 
        HeroH1, HeroP, HeroBtnWrapper, 
        ArrowForward,ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };


  return (
    <>
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Technology is Our Passion</HeroH1>
            <HeroP>Sign up today for a new account and recieve a 50% discount on your first order.</HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='false' dark='false'>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    </>
  )
}

export default HeroSection