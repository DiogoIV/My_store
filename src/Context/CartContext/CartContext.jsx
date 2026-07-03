import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    

    function adicionarProduto(produto) {
        const existeNoCarrinho = cart.find(item => item.id === produto.id);
        
        if(existeNoCarrinho) {
            return aumentarQuantidade(produto.id)
        }
        
        setCart([...cart, {...produto, quantidade: 1}])

        

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
        let subtotal = 0;

        for (let i = 0; i < cart.length; i++) {
            subtotal += cart[i].preco * cart[i].quantidade;
        }

        return subtotal;
    }

    const resultadoResumo = resumoPedido()

    return (
        <CartContext.Provider value={{

            cart,
            adicionarProduto,
            removerProduto,
            aumentarQuantidade,
            diminuirQuantidade,
            resultadoResumo
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
