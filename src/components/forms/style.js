// CSS Forms
import styled from 'styled-components'

export const Forms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;

    > input:first-child {
      margin-right: 1rem;
    }
  }

  @media only screen and (max-width: 600px) {
    > div {
      flex-direction: column;

      > input:first-child {
        margin-right: 0;
      }
    }
  }
`
