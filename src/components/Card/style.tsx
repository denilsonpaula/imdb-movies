import styled from 'styled-components'
export const Container = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: gray;
    height: 100%;
    width: 100%;
    max-width: 200px;
    max-height: 280px;
    text-decoration: none;
`
export const Image = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
`
export const Title = styled.p`
    z-index: 2;
    background-color: #36323282;
    width:100%;
    height: auto;
    position: absolute;
    top: 12px;
    color: white; 
`