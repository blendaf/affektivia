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
  position: absolute;
  top: 0;
  left: 0;
  @media only screen and (max-width: 400px) {
    left: auto;
  }
`

const Ul = styled.ul`
  width: 400px;
  height: 50px;
  padding: 0;
  padding-left: 10px;
  list-style: none;

  @media only screen and (max-width: 600px) {
    width: auto;
  }

  @media only screen and (max-width: 400px) {
    padding-left: 0px;
  }
`

const Li = styled.li`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  display: inline-block;
  padding: 0px 15px;
  color: ${({ theme }) => theme.colors.accentprimary};
`

const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accentprimary};
  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
  :after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: ${({ theme }) => theme.colors.accentprimary};
    transition: width 0.2s ease;
    -webkit-transition: width 0.2s ease;
  }

  :hover:after {
    width: 100%;
    left: 0;
    background: ${({ theme }) => theme.colors.accentprimary};
  }
`

const Header = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${'/image.png'});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
`
const Title = styled.div`
  font-size: 80px;
  color: ${({ theme }) => theme.colors.accentprimary};
  @media only screen and (max-width: 600px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 40px;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: ${(props) => (props.row ? '500px' : 'auto')};
  width: 100%;
  color: ${(props) =>
    props.second ? props.theme.colors.black : props.theme.colors.white};
  background-color: ${(props) =>
    props.second ? props.theme.colors.white : props.theme.colors.accentprimary};
  padding: 20px 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
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

const Box = styled.div`
  width: 800px;
  height: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 5px 0px rgba(255, 255, 255, 0.4),
    5px 5px 5px 0px rgba(0, 0, 0, 0.1);
`

const TextBox = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`
const TextBox__Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`
const TextBox__Text = styled.div`
  font-size: 20px;
`

const InputForm = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 0 50px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0px;
    width: 100%;
  }
`

const InputRow = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    padding: 0;
  }
`

const Input = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 5px;
`

const ShortInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 100;
  padding: 10px 0;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.5s ease;
  :hover {
    border-color: #aaa;
  }

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentprimary};
  }
  ::placeholder {
    color: #aaa;
  }

  @media only screen and (max-width: 400px) {
    margin: 10px 0;
  }
`
const LongInput = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 70px;
  font-size: 15px;
  font-weight: 100;
  padding-top: 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.5s ease;
  :hover {
    border-color: #aaa;
  }
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentprimary};
  }

  ::placeholder {
    color: #aaa;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 10px;
  }
`
const SubmitButton = styled.div`
  margin-top: 20px;
  padding: 15px 50px;
  background-color: ${({ theme }) => theme.colors.accentprimary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  transition: all 0.5s ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.accentsecondary};
  }
`

export default () => (
  <Body>
    <Header>
      <Nav>
        <Ul>
          <Li>
            <Link href="#">Hem</Link>
          </Li>
          <Li>
            <Link href="#">Arbete</Link>
          </Li>
          <Li>
            <Link href="#">Kontakt</Link>
          </Li>
        </Ul>
      </Nav>
      <Title>Affektivia.se</Title>
    </Header>
    <Section second>Någon typ av info etc</Section>
    <Section>Någon typ av info etc</Section>
    <Section second>
      <TextBox>
        <TextBox__Title>Vill du veta mer?</TextBox__Title>
        <TextBox__Text>Kontakta mig via formuläret.</TextBox__Text>
      </TextBox>

      <InputForm action="https://Formspree.io/mgelzazl" method="POST">
        <InputRow>
          <Input>
            <ShortInput type="text" name="_replyto" placeholder="Förnamn" />
          </Input>
          <Input>
            <ShortInput type="text" name="_replyto" placeholder="Efternamn" />
          </Input>
        </InputRow>
        <InputRow>
          <Input>
            <ShortInput type="text" name="_replyto" placeholder="Email" />
          </Input>
          <Input>
            <ShortInput
              type="text"
              name="_replyto"
              placeholder="Telefonnummer"
            />
          </Input>
        </InputRow>
        <InputRow>
          <Input>
            <LongInput name="message" placeholder="Ditt meddelande" />
          </Input>
        </InputRow>

        <SubmitButton type="submit">Skicka</SubmitButton>
      </InputForm>
    </Section>
    <Footer>
      <FooterContent>Om oss</FooterContent>
      <FooterContent>Kontakt</FooterContent>
      <FooterContent>Hjälp</FooterContent>
    </Footer>
  </Body>
)
