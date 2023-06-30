import { type Metadata } from 'next'

import { Home } from '@/components/pages/Home'

export const metadata: Metadata = {
  title: 'Felipe D. S. Lima',
  description:
    'Programação é meu super poder! Como desenvolvedor, meu principal objetivo é utilizar tecnologia para criar soluções que tornem a vida das pessoas mais fácil, mais intuitiva e mais divertida.',
}

export default function HomePage() {
  return <Home />
}
