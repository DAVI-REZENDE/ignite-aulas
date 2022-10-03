import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
  email: string;
  permissions: string[];
  roles: string[];
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User>()

  const isAuthenticated = !!user;

  useEffect(() => {
    const {'nextauth.token': token} = parseCookies() 

    if(token) {
      api.get('me').then(res => {
        const { permissions, email, roles } = res.data

        setUser({ permissions, email, roles })
      })
    }
  } ,[])

  async function signIn({email, password}) {
    try {
      const response = await api.post('sessions', {
        email,
        password
      })

      const { token, refreshToken, permissions, roles } = response.data

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      } )

      setUser({
        email,
        permissions,
        roles
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('dashboard')
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )

}