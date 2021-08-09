import React from 'react'

import { Container, FooterQuestion } from './styles'

type TQuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
}

export const Question = (props: TQuestionProps) => {
  const { content, author } = props

  return (
    <Container>
      <p>{content}</p>

      <FooterQuestion>
        <div>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div />
      </FooterQuestion>
    </Container>
  )
}
