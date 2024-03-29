import { Layout } from '@/components/layouts/DefaultLayout'
import { Loading } from '@/components/layouts/DefaultLayout/Loading'
import { GlobalStyle } from '@/styles/global'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Felipe D. S. Lima</title>
      </head>
      <body style={{ overflow: 'hidden' }}>
        <Loading />
        <GlobalStyle />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
