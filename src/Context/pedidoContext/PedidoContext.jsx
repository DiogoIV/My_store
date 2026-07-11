import { createContext, useState } from "react";

export const PedidoContext = createContext();

export function PedidoProvider({ children }) {

    const [pedidos, setPedidos] = useState([]);

    console.log('pedidos do context', pedidos)

    function adicionarPedido(pedido) {
        setPedidos(prevPedidos => [
            ...prevPedidos,
            pedido
        ]);
    }

    function limparPedido() {
        setPedidos([]);
    }


    return (
        <PedidoContext.Provider
            value={{
                adicionarPedido,
                limparPedido,
                pedidos
            }}
        >
            {children}
        </PedidoContext.Provider>
    );
}