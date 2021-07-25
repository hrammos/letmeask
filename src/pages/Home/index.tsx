import React from 'react'

import illustrationImage from '../../assets/images/illustration.svg'
import logoImage from '../../assets/images/logo.svg'
import googleImage from '../../assets/images/google-icon.svg'

import { Button } from '../../components/Button'
import {
  AsideContainer,
  Container,
  MainContainer,
  Separator,
  GoogleButton,
} from './styles'

export const Home = () => (
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

        <GoogleButton type="button">
          <img src={googleImage} alt="Logo do Google" />
          Crie sua sala com o Google
        </GoogleButton>

        <Separator>ou entre em uma sala</Separator>

        <form>
          <input
            type="text"
            placeholder="Digite o código da sala"
          />

          <Button type="submit">
            Entrar na sala
          </Button>
        </form>
      </div>
    </MainContainer>
  </Container>
)