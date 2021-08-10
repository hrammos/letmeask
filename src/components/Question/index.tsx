import React, { ReactNode } from 'react'

import { Container, FooterQuestion, LikeButton } from './styles'

type TQuestionProps = {
  content: string
  author: TAuthor
  children?: ReactNode
  hasLiked?: boolean
}

export const Question = (props: TQuestionProps) => {
  const {
    content,
    author,
    children,
    hasLiked = false
  } = props

  return (
    <Container>
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
