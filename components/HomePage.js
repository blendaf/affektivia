import styled from 'styled-components'

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Nav = styled.div`
  background-color: transparent;
`

const Ul = styled.ul`
  width: 400px;
  height: 50px;
  padding: 0;
  padding-left: 10px;
  list-style: none;

  .link {
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  .link:after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: ${({ theme }) => theme.colors.white};
    transition: width 0.2s ease;
    -webkit-transition: width 0.2s ease;
  }

  .link:hover:after {
    width: 100%;
    left: 0;
    background: ${({ theme }) => theme.colors.white};
  }
`

const Li = styled.li`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  display: inline-block;
  padding: 0px 15px;
  color: ${({ theme }) => theme.colors.white};
`

const Header = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${'/placeholderimage.jpg'});
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`

const Section = styled.div`
  height: 500px;
  width: 100%;
  background-color: ${(props) =>
    props.second ? props.theme.colors.white : props.theme.colors.primary};
`

const Footer = styled.div`
  height: 150px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`

const FooterContent = styled.div`
  padding: 0 10px;
`

export default () => (
  <Body>
    <Header>
      <Nav>
        <Ul>
          <Li>
            <a class="link" href="#">
              Home
            </a>
          </Li>
          <Li>
            <a class="link" href="#">
              Work
            </a>
          </Li>
          <Li>
            <a class="link" href="#">
              Contact
            </a>
          </Li>
        </Ul>
      </Nav>
    </Header>
    <Section></Section>
    <Section second></Section>
    <Footer>
      <FooterContent>About</FooterContent>
      <FooterContent>Contact</FooterContent>
      <FooterContent>Help</FooterContent>
    </Footer>
  </Body>
)
