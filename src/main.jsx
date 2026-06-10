import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'

import App from './App.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Cart from './pages/Cart/Cart.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EsqueciSenha from './pages/EsquiciSenha/EsqueciSenha.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  /*Login*/
  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/register',
    element: <Register/>
  },

  {
    path: '/esqueci-senha',
    element: <EsqueciSenha/>
  },
  /*carrinho*/
  {
    path: '/carrinho',
    element: <Cart/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)