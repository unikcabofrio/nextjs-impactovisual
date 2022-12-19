// CSS Text
import styled from 'styled-components'

export const Titles = styled.div`
  padding: 2vh 0;
  text-align: center;

  > h1 {
    font-size: 2vw;
    line-height: 80%;
    font-weight: 800;
  }

  > p {
    font-size: 1vw;
    padding: 5px 20%;
  }

  @media only screen and (max-width: 800px) {
    > h1 {
      font-size: 8vw;
    }
    > p {
      font-size: 4vw;
      padding: 20px 2%;
    }
  }
`

export const InforMsg = styled.p`
  padding: 0.5vh 0;
  font-size: 1vw;

  @media only screen and (max-width: 800px) {
    font-size: 4vw;
  }
`
