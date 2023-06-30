'use client'
import { Button } from '@/components/ui/Button'

import { Container, TextContainer, AccountButtons } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <h1>
          Felipe <span>D. S. Lima</span>
        </h1>

        <p>
          Programação é meu super poder! Como desenvolvedor, meu principal
          objetivo é utilizar tecnologia para criar soluções que tornem a vida
          das pessoas mais fácil, mais intuitiva e mais divertida.
        </p>

        <div className="button-container">
          {/* <Button href="/portfolio" format="primary">
            Dê uma olhada no que já fiz!
          </Button> */}
          <Button
            href="https://wa.me/+5511950402518?text=Olá%2C+Felipe!"
            format="primary"
          >
            Bora conversar?
          </Button>
        </div>
      </TextContainer>
      <AccountButtons>
        {/* <Button href="/auth/signup" format="primary">
          Criar conta
        </Button>
        <Button href="/auth/login" format="secondary">
          Entrar
        </Button> */}
      </AccountButtons>
    </Container>
  )
}
