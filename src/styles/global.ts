'use client'
import { Inter } from 'next/font/google'

import { createGlobalStyle } from 'styled-components'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    :root{
        font-size: 62.5%;
        --white: rgb(255, 255, 255);
        --black: rgb(0, 0, 0);
        --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
            'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
            'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
        --font: ${inter.style.fontFamily};
    }
        
    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    body {
        color: var(--white);
        background: var(--black);
    }

    button,
    body {
        font-family: var(--font);
        font-size: 1.6rem;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }
    }

`
