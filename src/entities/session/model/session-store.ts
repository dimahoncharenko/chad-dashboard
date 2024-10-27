import { createStore } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type SessionState = {
  email: string | null
  name: string | null
  password: string | null
  loggedIn: boolean
}

export type SessionActions = {
  deleteSession: () => void
  addSession: (session: SessionState) => void
  logout: () => void
}

export type SessionStore = SessionState & SessionActions

export const initSessionStore = (): SessionState => {
  return { email: null, name: null, password: null, loggedIn: false }
}

export const defaultInitState: SessionState = {
  email: null,
  name: null,
  loggedIn: false,
  password: null,
}

export const createSessionStore = (initState = defaultInitState) => {
  return createStore<SessionStore>()(
    devtools(
      persist(
        (set, get) => ({
          ...initState,
          deleteSession: () => {
            set(initState)
          },
          addSession: session => {
            set(session)
          },
          logout: () => {
            set({ ...get(), loggedIn: false })
          },
        }),
        { name: 'session-storage' },
      ),
    ),
  )
}
