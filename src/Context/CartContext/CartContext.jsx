import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function contadorCart() {
        const total = cart.reduce((total, item) => {
            return total + item.quantidade;
        }, 0);

        return total
    }


    function adicionarProduto(produto) {
        const existeNoCarrinho = cart.find(item => item.id === produto.id);

        if (existeNoCarrinho) {
            return aumentarQuantidade(produto.id)
        }

        setCart([...cart, { ...produto, quantidade: 1 }])



    }

    function removerProduto(id) {
        setCart(cart.filter(item => item.id !== id))

    }

    function aumentarQuantidade(ID) {
        const aumentarProdutos = cart.map(item => {

            if (item.id === ID) {

                return {
                    ...item,
                    quantidade: item.quantidade + 1
                }
            }

            return item
        })

        return setCart(aumentarProdutos)
    }

    function diminuirQuantidade(ID) {
        const diminuirProduto = cart.map(item => {
            if (item.id === ID) {

                return {
                    ...item,
                    quantidade: Math.max(item.quantidade - 1, 1)


                }
            }

            return item
        })

        return setCart(diminuirProduto)
    }


    function resumoPedido() {
        

        const subtotal = cart.reduce((total, item)=> {
            return total + (item.preco * item.quantidade)
        }, 0)

        const frete = subtotal >= 200 ? 0 : 15;
        const total = subtotal + frete;
        

        const resumo = {
            subtotal,
            frete,
            total
        }
        return resumo

    }

    const resultadoResumo = resumoPedido()
    const quantidadeCart = contadorCart()

    console.log(resultadoResumo)

    return (
        <CartContext.Provider value={{

            cart,
            adicionarProduto,
            removerProduto,
            aumentarQuantidade,
            diminuirQuantidade,
            contadorCart,
            quantidadeCart,
            resultadoResumo
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
