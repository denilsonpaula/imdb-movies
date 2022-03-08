import styled from 'styled-components'
export const Container= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    height: 100%;
    width: 100%;
    gap: 24px;
`
export const Synopsis= styled.div`
    display: flex;
    font-size: 12px;
    text-align: justify;
    background-color: white;
    color: #222222;
`
export const Back= styled.button`
      border-radius: 50%;
      background-color: #662086;
      color: white;
`
export const Title= styled.h1`
      color: #662086;
      font-size: 48px;
      

`
export const Banner= styled.div`
      height: 30vh;
      width: 60vh;
`
export const Wrapper= styled.div`
      display: flex;
`
export const WrapperText= styled.div`
      display: flex;
      flex-direction: column;
`
export const Image= styled.img`
      height: 100%;
      width: 100%;
      object-fit: cover;
`