import styled from 'styled-components'

export const AppWrapper = styled.div`
  .one {
    color: red;
    &:hover {
      color: blue;
      font-size: ;
    }
  }

  .two {
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
  }
`
