"use client"

import { X } from "lucide-react";
import { CheckoutProductCartRoot } from "./styles";
import { useState } from "react";
import { ProductProps } from "@/components/ProductCard";
import { useCartContext } from "@/contexts/CheckoutCartContext";
import Image from "next/image";

export function CheckoutProductCart({ id, name, photo, price, description, amount }: ProductProps){

    const [ productAmount, setProductAmount ] = useState(amount)
    const { removeProductFromCart, increaseProductAmount, decreaseProductAmount } = useCartContext()

    function handleRemoveProduct(id: number){
        removeProductFromCart(id)
    }

    function handleIncreaseProductAmount(){
        increaseProductAmount({
            id,
            name,
            photo,
            price,
            description,
            amount
        })
    }

    function handleDecreaseProductAmount(){
        decreaseProductAmount({
            id,
            name,
            photo,
            price,
            description,
            amount
        })
    }

    return(
        <CheckoutProductCartRoot>
            <Image width={300} height={300} className="checkout-product-img" src={photo} alt="" />
            <h3 className="checkout-product-heading">{name}</h3>
            <div className="checkout-product-counter">
                <span className="counter-label">Qtd:</span>
                <div className="counter-wrapper">
                    <button className="counter-decrease-btn" onClick={handleDecreaseProductAmount}>-</button>
                    <span className="counter-divider" />
                    <input onChange={(e) => setProductAmount(Number(e.target.value))} className="counter-input" type="number" value={amount} />
                    <span className="counter-divider" />
                    <button className="counter-increase-btn" onClick={handleIncreaseProductAmount}>+</button>
                </div>
            </div>
            <span className="checkout-product-price">R${price}</span>
            <button onClick={() => handleRemoveProduct(id)} className="checkout-product-remove-btn"><X width={12} height={12} /></button>
        </CheckoutProductCartRoot>    
    )
}