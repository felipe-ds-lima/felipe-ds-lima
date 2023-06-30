'use client'
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

import { Container, ScrollSpy, MenuItem, MenuContent } from './styles'

export const Menu: React.FC = () => {
  return (
    <Container>
      <MenuContent>
        {/* <button className="menu-button">
          <span></span>
        </button> */}

        <ul className="social-media">
          <li>
            <a
              href="https://github.com/felipe-ds-lima"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/felipe-ds-lima/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo />
            </a>
          </li>
        </ul>
      </MenuContent>
      <ScrollSpy>
        <div className="line"></div>
        <MenuItem aria-label="Home" size={3}></MenuItem>
        <MenuItem aria-label="About me" size={2}></MenuItem>
        <MenuItem aria-label="My Acknowledge" size={1}></MenuItem>
        <div className="line"></div>
      </ScrollSpy>
    </Container>
  )
}
