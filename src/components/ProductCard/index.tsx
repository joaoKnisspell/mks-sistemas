"use client"

import { ShoppingBag } from "lucide-react";
import { ProductButton, ProductDetail, ProductRoot } from "./styles";
import { useCartContext } from "@/contexts/CheckoutCartContext";
import Image from "next/image";

export type ProductProps = {
    id: number, 
    photo: string,
    name: string,
    price: string,
    description?: string,
    amount:number
}

export function ProductCard({ id, photo, name, price, description }: ProductProps) {

    const { addProductToCart } = useCartContext()

    function handleAddToCart(){
        addProductToCart({
            id,
            photo,
            name,
            price,
            description,
            amount: 1
        })
    }

    return (
        <ProductRoot>
            <ProductDetail>
                <Image width={300} height={300} className="product-img" src={photo} alt={`Foto do produto: ${name}`} />
                <div className="product-headline">
                    <h3 className="product-headline">{name}</h3>
                    <span className="headline-price">R${price}</span>
                </div>
                <p className="product-subHeadline">{description}</p>
            </ProductDetail>
            <ProductButton onClick={handleAddToCart}>
                <ShoppingBag width={15} height={15} />
                COMPRAR
            </ProductButton>
        </ProductRoot>
    )
}