import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className=' text-zinc-50 bg-gradient-to-b from-green-500 to-zinc-900 bg-zinc-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
