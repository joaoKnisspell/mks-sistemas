"use client"

import { X } from "lucide-react";
import { CheckoutCartDetail, CheckoutCartRoot, CkeckoutCartHeader, CheckoutCartFooter } from "./styles";
import { CheckoutProductCart } from "./components/CheckoutProductCart";
import { useCartContext } from "@/contexts/CheckoutCartContext";

export function CheckoutCart(){

    const { toggleCart, isCartOpen, cartProducts, cartTotalPrice, checkout } = useCartContext()

    return(
        <CheckoutCartRoot style={ isCartOpen ? { display: 'flex' } : { display: 'none' }}>
            <CkeckoutCartHeader>
                <span className="cart-heading">Carrinho de compras</span>
                <button onClick={toggleCart} className="cart-close-btn">
                    <X width={25} height={30} color="#FFF" />
                </button>
            </CkeckoutCartHeader>

            <CheckoutCartDetail>
                {cartProducts.map((product) => {
                    return(
                        <CheckoutProductCart 
                            key={product.id} 
                            id={product.id}
                            name={product.name} 
                            price={product.price} 
                            photo={product.photo}  
                            amount={product.amount}
                        />    
                    )
                })}
            </CheckoutCartDetail>

            <CheckoutCartFooter>
                <div className="cart-footer-detail">
                    <span>Total:</span>
                    <span>R${cartTotalPrice.toFixed(2)}</span>
                </div>

                <button className="cart-checkout-btn" onClick={checkout}>
                    Finalizar Compra
                </button>
            </CheckoutCartFooter>
        </CheckoutCartRoot>    
    )
}