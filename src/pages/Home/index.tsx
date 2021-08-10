import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'
import illustrationImage from 'assets/images/illustration.svg'
import logoImage from 'assets/images/logo.svg'
import googleImage from 'assets/images/google-icon.svg'

import { database } from 'services/firebase'

import { Button } from 'components/Button'

import {
  AsideContainer,
  Container,
  MainContainer,
  Separator,
  GoogleButton,
} from './styles'

export const Home = () => {
  const [roomCode, setRoomCode] = useState('')

  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()

  const onClickHandleCreateRoom = async () => {
    if (!user) await signInWithGoogle()

    history.push('/rooms/new')
  }

  const onSubmitHandleJoinRoom = async (event: FormEvent) => {
    event.preventDefault()

    if (roomCode.trim() === '') return

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exists.')

      return
    }

    if (roomRef.val().endedAt) {
      alert('Room alreadt closed.')

      return
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
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

          <GoogleButton
            onClick={onClickHandleCreateRoom}
            type="button"
          >
            <img src={googleImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </GoogleButton>

          <Separator>ou entre em uma sala</Separator>

          <form onSubmit={onSubmitHandleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={event => setRoomCode(event.target.value)}
            />

            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </MainContainer>
    </Container>
  )
}
