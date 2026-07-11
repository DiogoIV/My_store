import { createContext, useState } from "react";

export const PedidoContext = createContext();

export function PedidoProvider({ children }) {

    const [pedidos, setPedidos] = useState([]);


    function adicionarPedido(pedido) {
        setPedidos(prevPedidos => [
            ...prevPedidos,
            pedido
        ]);
    }
    console.log(pedidos)

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