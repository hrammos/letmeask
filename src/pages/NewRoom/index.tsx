import React from 'react'

import illustrationImage from '../../assets/images/illustration.svg'
import logoImage from '../../assets/images/logo.svg'

import { Button } from '../../components/Button'
import {
  AsideContainer,
  Container,
  MainContainer,
} from './styles'

export const NewRoom = () => (
  <Container>
    <AsideContainer>
      <img
        src={illustrationImage}
        alt="Ilustração simbolizando perguntas e respostas"
      />

      <strong>Crie salas de Q&amp;A ao vivo</strong>

      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </AsideContainer>

    <MainContainer>
      <div>
        <img src={logoImage} alt="Letmeask" />

        <h2>Criar uma nova sala</h2>

        <form>
          <input
            type="text"
            placeholder="Nome da sala"
          />

          <Button type="submit">
            Criar sala
          </Button>
        </form>

        <p>
          Quer entrar em uma sala existente?
          {' '}
          <a href="foo">Clique aqui</a>
        </p>
      </div>
    </MainContainer>
  </Container>
)
