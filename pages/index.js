import Head from 'next/head'
import HomePage from '../components/HomePage'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${(props) => props.theme.colors.primary};
   margin: 0;
   font-family: apercu-pro, "Apercu Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
   height: 100%;

  }
`

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <main>
      <HomePage />
    </main>
  </div>
)

export default Home
