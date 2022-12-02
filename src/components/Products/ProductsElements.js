import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProductsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 5rem calc((100vw -1300px) /2);
    background: linear-gradient(108deg, rgba(17, 100, 102,1) 0%, rgba(255, 203, 152, 1) 100%);
    color: #fff;
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
        
    }
`;

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;

    :hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #2c3531;
`;

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    padding-top: 45px;
`;

export const ProuductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`;

export const ProductPrice =styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`;

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #116466;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;

    :hover{
        transition: all 0.2s ease-in-out;
        background: #FFCB98;
        color: #fff;
        cursor: pointer;
    }
`;