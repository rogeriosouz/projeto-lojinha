import http from '../services/axios';
import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SingInData = {
  email: string;
  password: string;
}

type RegisterType = {
  name: string;
  email: string;
  password: string;
}

type AuthContexttype = {
  isAuthenticated: boolean;
  user: User | null;
  singIn: (data: SingInData) => Promise<void>;
  register: (data: RegisterType) => Promise<void>;
  errors: string[];
  amostrarError: boolean;
  setAmostrarError: any;
  setErrors: any;
}

type User = {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthContexttype);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [amostrarError, setAmostrarError] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = !!user;

  useEffect(() => {
    if(Cookies.get('tokenUser')) {
      http.get(`/user/getUserRefres`).then(response => {
        setUser(response.data)
      })
    }
  }, [])

  async function singIn({email, password}: SingInData) {
    try {
      const response = await http.post('/login', { email, password });
      Cookies.set('tokenUser', response.data.token, { expires: 2 });

      http.defaults.headers.common['authorization-user'] = response.data.token as string;

      setUser(response.data.user);
      navigate('/');
    } catch (error: any) {
      setAmostrarError(true);
      setErrors(error.response.data.Erros)

      setTimeout(() => {
        setAmostrarError(false);
      }, 5000)
    }
  }


  async function register({name, email, password}: RegisterType) {
    try {
      const response = await http.post('/register', { name, email, password });
      Cookies.set('tokenUser', response.data.token, { expires: 2 });

      http.defaults.headers.common['authorization-user'] = response.data.token as string;

      setUser(response.data.user);
      navigate('/');
    } catch (error: any) {
      setAmostrarError(true);
      setErrors(error.response.data.Erros)

      setTimeout(() => {
        setAmostrarError(false);
      }, 5000)
    }
  }


  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      singIn, 
      errors, 
      amostrarError, 
      setAmostrarError, 
      setErrors, 
      register 
    }}>
      {children}
    </AuthContext.Provider>
  )
}