import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const acceder = useContext(CartContext)
    return (
        <>
            <h1 className="TituloCarrito">Carrito</h1>
            {
                (acceder.cartList.length > 0)
                ?<button onClick={acceder.borrarTodo} className="botonEliminarTodo">Eliminar Todo</button>
                :<h3 className="CarritoVacio">Tu carrito esta vacio</h3>
            }
            <ul>
                {
                   acceder.cartList.length > 0 &&
                   
                    acceder.cartList.map(item=> 
                    <li key={item.id} className=""> 
                    <img src={item.imagen} alt="" className="imagenCarrito" />
                     <p className="textoCarrito"> Producto:{item.nombre} cantidad:{item.qty} precio:{acceder.totalPorItem(item.idItem)}</p> 
                     
                    <button onClick={()=> acceder.delThis(item.id)} className="botonEliminar">Eliminar</button>
                    </li>  )
                    
                
                }
            </ul>
           
                {
                    acceder.cartList.length > 0 &&
                <div>
                    <h3 className="cartaFinalizarHeader">Compra Final</h3>
                    <p className="subTotal">Subtotal{acceder.subTotal()}</p>
                    <p className="Total">Total{acceder.CalculoTotal()}</p>
                    <button className="FinalizarCompra">FINALIZAR COMPRA</button>

                </div>
                }
            
            
        </>
    );
}

export default Cart;