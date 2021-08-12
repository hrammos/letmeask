import React, { ReactNode } from 'react'

import { Container, FooterQuestion, LikeButton } from './styles'

type TQuestionProps = {
  content: string
  author: TAuthor
  children?: ReactNode
  hasLiked?: boolean
  isAnswered?: boolean
  isHighlighted?: boolean
}

export const Question = (props: TQuestionProps) => {
  const {
    content,
    author,
    children,
    hasLiked = false,
    isAnswered = false,
    isHighlighted = false
  } = props

  return (
    <Container
      answered={isAnswered}
      highlighted={isHighlighted}
    >
      <p>{content}</p>

      <FooterQuestion>
        <div>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        {/* <LikeButton /> */}
        <LikeButton liked={hasLiked}>{children}</LikeButton>
      </FooterQuestion>
    </Container>
  )
}
