import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-rigth: auto;
    padding-left: calc(${theme.grid.gutter});
    padding-rigth: calc(${theme.grid.gutter});
  `}
`
