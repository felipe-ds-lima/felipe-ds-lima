'use client'

import Background from './Background'
import { Menu } from './Menu'
import { Container, Main } from './style'

interface ILayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Container>
      <Background />
      <Menu />
      <Main>{children}</Main>
    </Container>
  )
}
