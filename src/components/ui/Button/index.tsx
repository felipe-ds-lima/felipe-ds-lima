'use client'

import { useRouter } from 'next/navigation'

import { Container } from './styles'

interface IButtonProps {
  children: React.ReactNode
  format?: 'primary' | 'secondary'
  onClick?: () => void
  href?: string
}

export const Button: React.FC<IButtonProps> = ({
  children,
  format = 'primary',
  onClick,
  href,
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (href) {
      if (href.includes('https://')) {
        window.open(href)
      } else {
        router.push(href)
      }
    }
  }

  return (
    <Container onClick={handleClick} format={format}>
      {children}
    </Container>
  )
}
