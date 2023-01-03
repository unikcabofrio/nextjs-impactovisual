// CSS Calculadora
import styled from 'styled-components'

export const container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Calculadora = styled.div`
  width: 80vw;
  padding: 4vh 3vw;
  border: 1px solid #f9f9f9;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #top {
    text-align: center;
    > p {
      font-size: 1.5vw;
    }
  }

  #middle {
    #form {
      width: 100%;
      display: flex;
      flex-direction: column;

      > button {
        display: inline-block;
        margin: 1vw 0;
        cursor: pointer;
        padding: 8px 30px;
        border-radius: 5px;
        border: none;
        box-shadow: 2px 5px 20px -5px rgb(0 0 0 / 10%);
        transition: 0.5s;
        background-color: #0178af;
        color: #fff;

        :hover {
          background-color: #02405c;
        }
      }

      > label {
        display: contents;
        margin-bottom: 2vh;

        > input {
          font-family: 'Poppins', sans-serif;
          margin: 0.2rem 0;
          width: 100%;
          height: 2rem;
          padding: 6px 12px;
          background-color: #fff;
          background-image: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;

          :focus {
            border-color: #66afe9;
            outline: 0;
            box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
              0 0 8px rgb(102 175 233 / 60%);
          }
        }
      }
    }
  }

  #bottom {
    font-size: 2vw;
    align-items: flex-start;
  }

  @media only screen and (max-width: 800px) {
    #top {
      > p {
        font-size: 3vw;
      }
    }

    #bottom {
      font-size: 4vw;
      align-items: flex-start;
    }
  }
`
