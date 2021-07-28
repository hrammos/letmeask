import React, { useState, FormEvent, ChangeEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import illustrationImage from '../../assets/images/illustration.svg'
import logoImage from '../../assets/images/logo.svg'

import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import {
  AsideContainer,
  Container,
  MainContainer,
} from './styles'

export const NewRoom = () => {
  const [newRoom, setNewRoom] = useState('')

  const { user } = useAuth()
  const history = useHistory()

  const onSubmitCreateNewRoom = async (event: FormEvent) => {
    event.preventDefault()

    if (newRoom.trim() === '') return

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
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

          <h2>Criar uma nova sala</h2>

          <form onSubmit={onSubmitCreateNewRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={event => setNewRoom(event.target.value)}
            />

            <Button type="submit">
              Criar sala
            </Button>
          </form>

          <p>
            Quer entrar em uma sala existente?
            {' '}
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </MainContainer>
    </Container>
  )
}
