import React from 'react'

import logoImage from '../../assets/images/logo.svg'
import { Button } from '../../components/Button'

import {
  Header, Main, Form, FormFooter
} from './styles'

export const Room = () => {
  const a = 'b'

  return (
    <div>
      <Header>
        <div>
          <img src={logoImage} alt="Letmeask" />
          <div>código</div>
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
