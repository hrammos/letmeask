import React from 'react'

import illustrationImage from '../../assets/images/illustration.svg'
import logoImage from '../../assets/images/logo.svg'
import googleImage from '../../assets/images/google-icon.svg'

export const Home = () => {
  const a = 'b'

  return (
    <div>
      <aside>
        <img
          src={illustrationImage}
          alt="Ilustração simbolizando perguntas e respostas"
        />

        <strong>Crie salas de Q&amp;A ao vivo</strong>

        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div>
          <img src={logoImage} alt="Letmeask" />

          <button type="button">
            <img src={googleImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div>ou entre em uma sala</div>

          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />

            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
