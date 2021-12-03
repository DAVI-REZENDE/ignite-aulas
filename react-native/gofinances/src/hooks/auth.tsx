import React, { createContext, ReactNode, useContext } from 'react';
import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
}

export const AuthContext = createContext([] as IAuthContextData)

function AuthProvider({children}: AuthProviderProps) {

  const user = {
    id: '32142435',
    name: 'Davi Rezende',
    email: 'daviresendes12@gmail.com',
    photo: 'https://github.com/DAVI-REZENDE.png'
  }

  async function signInWithGoogle() {
    try {
      const CLIENT_ID = '896978516611-c803qj2asdiedh1nneb74f2i97t19nm5.apps.googleusercontent.com'
      const REDIRECT_URI = 'https://auth.expo.io/@davirezende/gofinances'
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const response = await AuthSession.startAsync({ authUrl })
      console.log(response)
    } catch (error) {

    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }