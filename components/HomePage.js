import styled from 'styled-components'

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.accentprimary};
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Nav = styled.div``

export default () => <Header>Header with picture</Header>
