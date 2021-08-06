import React from 'react'
import { useParams } from 'react-router-dom'

import { Button, RoomCode } from 'components'
import logoImage from 'assets/images/logo.svg'

import {
  Header,
  Main,
  Form,
  FormFooter,
} from './styles'

type RoomParams = {
  id: string
}

export const Room = () => {
  const params = useParams<RoomParams>()

  return (
    <div>
      <Header>
        <div>
          <img src={logoImage} alt="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </Header>

      <Main>
        <div>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <Form>
          <textarea placeholder="O que você quer perguntar?" />

          <FormFooter>
            <span>
              Para enviar uma pergunta,
              {' '}
              <button type="button">faça seu login</button>
              .
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </FormFooter>
        </Form>
      </Main>
    </div>
  )
}
