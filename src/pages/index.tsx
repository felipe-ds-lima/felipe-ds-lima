import React from 'react'

import Head from 'next/head'

import MontsLogo from '../assets/images/logo.svg'
import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Kedros Next</title>
      </Head>

      <a href="https://monts.com.br" target="_blank" rel="noopener noreferrer">
        <MontsLogo />
      </a>

      <h1>Welcome to Kedros Next</h1>

      <p>
        A ReactJS & Next.js structure made by{' '}
        <a
          href="https://monts.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Monts
        </a>
      </p>
    </Container>
  )
}

export default Home
