import { useEffect, useState } from 'react'

import { database } from 'services/firebase'
import { useAuth } from './useAuth'

type TFirebaseQuestion = Record<string, {
  content: string
  author: TAuthor
  isHighlighted: boolean
  isAnswered: boolean
  likes: Record<string, {
    authorId: string
  }>
}>

type TQuestion = {
  id: string
  content: string
  author: TAuthor
  isHighlighted: boolean
  isAnswered: boolean
  likeCount: number
  likeId: TLikeId
}

export const useRoom = (roomId: string) => {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState<TQuestion[]>([])

  const { user } = useAuth()

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
        likeCount: Object.values(value.likes ?? {}).length,
        likeId: Object
          .entries(value.likes ?? {})
          .find(([_, like]) => like.authorId === user?.id)?.[0]
      }))

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })

    return () => {
      roomRef.off('value')
    }
  }, [roomId, user?.id])

  return { questions, title }
}
