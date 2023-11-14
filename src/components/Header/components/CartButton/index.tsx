"use client"

import { ShoppingCart } from "lucide-react";
import { CartRoot } from "./styles";
import { useCartContext } from "@/contexts/CheckoutCartContext";

export function CartButton(){

    const { toggleCart, cartProducts } = useCartContext()

    return(
        <CartRoot onClick={toggleCart}>
            <ShoppingCart width={20} height={20} fill="true" />
            <span className="cart-amount">{cartProducts.length}</span>
        </CartRoot>
    )
}