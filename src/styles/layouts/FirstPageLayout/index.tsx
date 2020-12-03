import React from 'react'

import Head from 'next/head'

import { Container } from './styles'

interface IFirstPageLayoutProps {
  title?: string
}

const FirstPageLayout: React.FC<IFirstPageLayoutProps> = ({
  children,
  title = 'Felipe D. S. Lima'
}) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </Container>
  )
}

export default FirstPageLayout
