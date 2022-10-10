import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesP, ServicesCard } from './ServicesElements';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
  return (
    <>
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Consultation</ServicesH2>
                <ServicesP>Our technology experts are glad to help find the right solution for you.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Troubleshooting</ServicesH2>
                <ServicesP>Get help with all your technology needs with the touch of a button.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>On-Site Setup</ServicesH2>
                <ServicesP>Have our technology reps travel to your location and set everything up for you.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>

    </ServicesContainer>
    </>
  )
}

export default Services