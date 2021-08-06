import React, { FormEvent, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'

import { database } from 'services/firebase'
import logoImage from 'assets/images/logo.svg'
import { Button, RoomCode } from 'components'

import { title } from 'process'
import {
  Header,
  Main,
  Form,
  FormFooter,
  UserInfo,
} from './styles'


type TFirebaseQuestions = Record<string, {
  content: string
  isHighlighted: boolean
  isAnswered: boolean
  author: {
    name: string
    avatar: string
  }
}>

type TQuestions = {
  id: string
  content: string
  isHighlighted: boolean
  isAnswered: boolean
  author: {
    name: string
    avatar: string
  }
}

type RoomParams = {
  id: string
}

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState('')
  const [newTitle, setTitle] = useState('')
  const [questions, setQuestions] = useState<TQuestions[]>([])

  const { user } = useAuth()
  const params = useParams<RoomParams>()

  const roomId = params.id

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

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: TFirebaseQuestions = databaseRoom.questions ?? {}

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => ({
        id: key,
        content: value.content,
        author: value.author,
        isHighlighted: value.isHighlighted,
        isAnswered: value.isAnswered,
      }))

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })
  }, [roomId])

  return (
    <div>
      <Header>
        <div>
          <img src={logoImage} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </Header>

      <Main>
        <div>
          <h1>
            {`Sala ${title}`}
          </h1>
          {questions.length > 0 && <span>{`${questions.length} pergunta(s)`}</span>}
        </div>

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

          {JSON.stringify(questions)}
        </Form>
      </Main>
    </div>
  )
}
