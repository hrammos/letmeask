import { useEffect, useState } from 'react'

import { database } from 'services/firebase'

type TFirebaseQuestion = Record<string, {
  content: string
  isHighlighted: boolean
  isAnswered: boolean
  author: {
    name: string
    avatar: string
  }
}>

type TQuestion = {
  id: string
  content: string
  isHighlighted: boolean
  isAnswered: boolean
  author: {
    name: string
    avatar: string
  }
}

export const useRoom = (roomId: string) => {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState<TQuestion[]>([])

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: TFirebaseQuestion = databaseRoom.questions ?? {}

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => ({
        id: key,
        content: value.content,
        author: value.author,
        isHighlighted: value.isHighlighted,
        isAnswered: value.isAnswered,
      }))

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })
  }, [roomId])

  return { questions, title }
}
