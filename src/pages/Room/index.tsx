import React, { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import { useRoom } from 'hooks/useRoom'

import { database } from 'services/firebase'
import logoImage from 'assets/images/logo.svg'
import { Button, Question, RoomCode } from 'components'

import {
  Header,
  Main,
  RoomInfos,
  Form,
  FormFooter,
  UserInfo,
} from './styles'

type RoomParams = {
  id: string
}

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState('')

  const { user } = useAuth()
  const params = useParams<RoomParams>()

  const roomId = params.id

  const { title, questions } = useRoom(roomId)

  const onSubmitHandleSendQuestion = async (event: FormEvent) => {
    event.preventDefault()

    if (newQuestion.trim() === '') return

    if (!user) {
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      isHighlighted: false,
      isAnswered: false,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)

    setNewQuestion('')
  }

  return (
    <div>
      <Header>
        <div>
          <img src={logoImage} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </Header>

      <Main>
        <RoomInfos>
          <h1>
            {`Sala ${title}`}
          </h1>
          {questions.length > 0 && <span>{`${questions.length} pergunta(s)`}</span>}
        </RoomInfos>

        <Form onSubmit={onSubmitHandleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <FormFooter>
            {user
              ? (
                <UserInfo>
                  <img src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </UserInfo>
              ) : (
                <span>
                  Para enviar uma pergunta,
                  {' '}
                  <button type="button">faça seu login</button>
                  .
                </span>
              )}

            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </FormFooter>
        </Form>

        {questions.map(question => (
          <Question
            key={question.id}
            content={question.content}
            author={question.author}
          />
        ))}
      </Main>
    </div>
  )
}
