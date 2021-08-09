import React from 'react'
import { useParams } from 'react-router-dom'
import { useRoom } from 'hooks/useRoom'

import logoImage from 'assets/images/logo.svg'
import { Button, Question, RoomCode } from 'components'

import { RoomInfos } from 'pages/Room/styles'
import {
  Header,
  Main,
} from './styles'

type RoomParams = {
  id: string
}

export const AdminRoom = () => {
  const params = useParams<RoomParams>()

  const roomId = params.id

  const { title, questions } = useRoom(roomId)

  return (
    <div>
      <Header>
        <div>
          <img src={logoImage} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </Header>

      <Main>
        <RoomInfos>
          <h1>
            {`Sala ${title}`}
          </h1>
          {questions.length > 0 && <span>{`${questions.length} pergunta(s)`}</span>}
        </RoomInfos>

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
