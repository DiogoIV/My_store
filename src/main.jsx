import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AuthProvider } from './Context/authContext/AuthContext.jsx';
import { CartProvider } from "./Context/CartContext/CartContext";
import './styles/global.css'
import { PedidoProvider } from './Context/pedidoContext/PedidoContext.jsx';


import App from './App.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Favoritos from './pages/Favoritos/Favoritos.jsx'
import Produtos from './pages/Produtos/Produtos.jsx';
import MinhaConta from './pages/Perfil/MinhaConta/MinhaConta.jsx';
import Home from './pages/Home/Home.jsx'

import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import EsqueciSenha from './pages/EsquiciSenha/EsqueciSenha.jsx'

import Checkout from './pages/Checkout/Checkout.jsx'
import CheckoutLayout from './pages/Checkout/CheckoutLayout.jsx'
import OrderSuccess from './pages/Checkout/OrderSuccess.jsx'
import MeusPedidos from './pages/MeusPedidos/MeusPedidos.jsx';
import DetalhesPedidos from './pages/MeusPedidos/DetalhesPedidos.jsx'

import SobreSite from './pages/Sobre/SobreSite.jsx';
import Politicas from './pages/Sobre/Politicas.jsx';
import Contato from './pages/Sobre/Contato.jsx';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Carousel from './pages/Carousel/Carousel.jsx';
import DadosPessoais from './pages/Perfil/DadosPessoais/DadosPessoais.jsx';
import Enderecos from './pages/Perfil/Enderecos/Enderecos.jsx';
import FaleConosco from './pages/Perfil/FaleConosco/FaleConosco.jsx';


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: "minha-conta",
        element: <MinhaConta/>
      },

      {
        path: "meus-pedidos",
        element: <MeusPedidos />
      },

      {
        path: "enderecos",
        element: <Enderecos />
      },

      {
        path: "dados-pessoais",
        element: <DadosPessoais />
      },  
      
      {
        path: "fale-conosco",
        element: <FaleConosco />
      },

      {
        path: "carrinho",
        element: <Cart />
      },

      {
        path: "favoritos",
        element: <Favoritos />
      },     
      
      {
        path: "produtos/:id",
        element: <Produtos />
      },
      {
        path: "detalhespedidos/:id",
        element: <DetalhesPedidos />
      },
      {
        path: "carousel/:slug",
        element: <Carousel />
      },
      {
        path: "sobresite",
        element: <SobreSite />
      },
      {
        path: "politicas",
        element: <Politicas />
      },

      {
        path: "contato",
        element: <Contato />
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
    element: <Register />
  },

  {
    path: '/esqueci-senha',
    element: <EsqueciSenha />
  },

  /*cart*/

  {
    path: '/checkout',
    element: <CheckoutLayout />,
    children: [

      {
        index: true,
        element: <Checkout />
      },

      {
        path: "sucesso",
        element: <OrderSuccess />
      }



    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <PedidoProvider>
          <RouterProvider router={router} />
        </PedidoProvider>
      </CartProvider>
    </AuthProvider>

  </StrictMode>
)