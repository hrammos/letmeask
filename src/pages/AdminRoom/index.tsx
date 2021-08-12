import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useRoom } from 'hooks/useRoom'

import logoImage from 'assets/images/logo.svg'
import { Button, Question, RoomCode } from 'components'

import { RoomInfos } from 'pages/Room/styles'
import deleteImage from 'assets/images/delete.svg'
import checkImage from 'assets/images/check.svg'
import answerImage from 'assets/images/answer.svg'

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

  const onClickQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  const onClickHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    })
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
            isAnswered={question.isAnswered}
            isHighlighted={question.isHighlighted}
          >
            {!question.isAnswered && (
              <>
                <button
                  type="button"
                  onClick={() => onClickQuestionAsAnswered(question.id)}
                >
                  <img src={checkImage} alt="Marcar pergunta como respondida" />
                </button>

                <button
                  type="button"
                  onClick={() => onClickHighlightQuestion(question.id)}
                >
                  <img src={answerImage} alt="Dar destaque à pergunta" />
                </button>
              </>
            )}

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
