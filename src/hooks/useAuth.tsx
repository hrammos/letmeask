import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

import { auth, firebase } from '../services/firebase'


type TUser = {
  id: string
  name: string
  avatar: string
}

type TUseAuthType = {
  user: TUser | undefined
  signInWithGoogle: () => Promise<void>
}

type TAuthContextProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as TUseAuthType)

const AuthProvider = (props: TAuthContextProviderProps) => {
  const { children } = props

  const [user, setUser] = useState<TUser>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(useAuth => {
      if (useAuth) {
        const { displayName, photoURL, uid } = useAuth

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)

    if (!result.user) return

    const { displayName, photoURL, uid } = result.user

    if (!displayName || !photoURL) {
      throw new Error('Missing information from Google Account.')
    }

    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL,
    })
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): TUseAuthType => {
  const context = useContext(AuthContext)

  return context
}

export { useAuth, AuthProvider }
