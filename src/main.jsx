import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from "./Context/CartContext/CartContext";
import './styles/global.css'
import { PedidoProvider } from './Context/pedidoContext/PedidoContext.jsx';

import App from './App.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Favoritos from './pages/Favoritos/Favoritos.jsx'
import Produtos from './pages/Produtos/Produtos.jsx';
import Home from './pages/Home/Home.jsx'

import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import EsqueciSenha from './pages/EsquiciSenha/EsqueciSenha.jsx'

import Checkout from './pages/Checkout/Checkout.jsx'
import CheckoutLayout from './pages/Checkout/CheckoutLayout.jsx'
import OrderSuccess from './pages/Checkout/OrderSuccess.jsx'
import MeusPedidos from './pages/MeusPedidos/MeusPedidos.jsx';
import DetalhesPedidos from './pages/MeusPedidos/DetalhesPedidos.jsx';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "carrinho",
        element: <Cart/>
      },

      {
        path: "favoritos",
        element: <Favoritos/>
      },
      {
        path:"meuspedidos",
        element: <MeusPedidos/>
      },
      {
        path:"produtos/:id",
        element: <Produtos/>
      }
    ]
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

  /*cart*/

  {
    path: '/checkout',
    element: <CheckoutLayout/>,
    children: [

      {
        index: true,
        element: <Checkout/>
      },
      
      {
        path: "sucesso",
        element: <OrderSuccess/>
      },

      {
        path: "detalhespedidos",
        element: <DetalhesPedidos/>
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <PedidoProvider>
        <RouterProvider router={router} />
      </PedidoProvider>
    </CartProvider>
  </StrictMode>
)