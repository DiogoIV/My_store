import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState();

    function adicionarProduto(produto) {
        setCart([...cart, produto])
    }

    function removerProduto(id) {
        setCart(cart.filter(item => item.id !== id))

    }

    function atualizarQuantidade(id, quantidade) {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantidade } : item
        ))
    }

    function calcularTotal() {
        return cart.reduce(
            (total, item) => total + item.preco * item.quantidade, 0
        )
    }
    return (
        <CartContext.Provider value={{
            cart,
            adicionarProduto,
            removerProduto,
            atualizarQuantidade,
            calcularTotal
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
