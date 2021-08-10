import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useRoom } from 'hooks/useRoom'

import logoImage from 'assets/images/logo.svg'
import { Button, Question, RoomCode } from 'components'

import { RoomInfos } from 'pages/Room/styles'
import deleteImage from 'assets/images/delete.svg'

import { database } from 'services/firebase'
import {
  Header,
  Main,
} from './styles'

type RoomParams = {
  id: string
}

export const AdminRoom = () => {
  const params = useParams<RoomParams>()
  const history = useHistory()

  const roomId = params.id

  const { title, questions } = useRoom(roomId)

  const onClickDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  const onClickEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  return (
    <div>
      <Header>
        <div>
          <img src={logoImage} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button
              isOutlined
              onClick={onClickEndRoom}
            >
              Encerrar sala
            </Button>
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
          >
            <button
              type="button"
              onClick={() => onClickDeleteQuestion(question.id)}
            >
              <img src={deleteImage} alt="Remover pergunta" />
            </button>
          </Question>
        ))}
      </Main>
    </div>
  )
}
