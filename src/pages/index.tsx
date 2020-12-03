import React, { useEffect, useState } from 'react'

import { GetStaticProps } from 'next'

import api from 'src/services/api'
import FirstPageLayout from 'src/styles/layouts/FirstPageLayout'
import { getDocBySlug } from 'src/utils/docs'
import { markdownToHtml } from 'src/utils/markdown'

interface User {
  avatar_url: string
}

interface IHomeProps {
  content: string
}

const Home: React.FC<IHomeProps> = ({ content }) => {
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    api.get<User>('users/felipe-ds-lima').then(({ data }) => {
      setAvatar(data.avatar_url)
    })
  }, [])

  return (
    <FirstPageLayout>
      <div className="avatar">
        <img
          className={avatar ? 'active' : ''}
          src={avatar}
          alt="Felipe D S Lima"
        />
      </div>
      <section dangerouslySetInnerHTML={{ __html: content }} />
    </FirstPageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const doc = getDocBySlug('README.md')
  const content = await markdownToHtml(doc.content || '')

  return {
    props: {
      ...doc,
      content
    }
  }
}

export default Home
