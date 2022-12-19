// CSS NavBar
import styled from 'styled-components'

export const NavBar = styled.div`
  z-index: 9999;
  position: fixed;
  width: 100vw;
  padding: 0 6vw;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: normal;
    padding: 0.1rem;
  }
`

export const ContainerTop = styled.div`
  padding: 20px 10px;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`

export const logo = styled.img`
  width: 40%;

  @media only screen and (max-width: 800px) {
    width: 30%;
  }
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > svg {
    fill: #030a8c;
    width: 20%;
  }
`

export const UlResponse = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: left;
  transition: 0.2s;

  > li {
    cursor: pointer;
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    font-size: 1vw;

    :hover {
      background-color: #f23545;
    }
    :hover a,
    :hover svg {
      color: #fff;
      fill: #fff;
    }
  }

  > li > a {
    color: #030a8c;
  }

  > li > svg {
    width: 1.5vw;
    fill: #030a8c;
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;

    > li {
      font-size: 5vw;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-top: 1px solid hsla(0, 0%, 100%, 0.1);
    }

    > li > svg {
      width: 5vw;
    }

    > li:first-child {
      border-top: 1px solid hsla(0, 0%, 100%, 0);
    }
  }
`
