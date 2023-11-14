/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ProductProps } from "@/components/ProductCard";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

type CartContextProps = {
    toggleCart: () => void,
    isCartOpen: boolean,
    cartTotalPrice: number,
    cartProducts: [] | ProductProps[],
    addProductToCart: (newProduct: ProductProps) => void,
    removeProductFromCart: (currentProductId: number) => void,
    increaseProductAmount: (currentProduct: ProductProps) => void,
    decreaseProductAmount: (currentProduct: ProductProps) => void,
    checkout: () => void
}

const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: { children: ReactNode }) {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartProducts, setCartProducts] = useState<ProductProps[] | []>([])
    const [cartTotalPrice, setCartTotalPrice] = useState(0)

    // open/close checkout cart fn
    function toggleCart() {
        setIsCartOpen(!isCartOpen)
    }

    // query client instance
    const queryClient = new QueryClient()

    // add product to cart fn
    function addProductToCart(newProduct: ProductProps) {

        getCartTotalPrice()

        let alreadyInCart = cartProducts.find((product) => product.id === newProduct.id)

        if (!alreadyInCart) {
            setCartProducts(state => [...state, newProduct])
            getCartTotalPrice()
        } else {
            setCartProducts(state => {
                return state.map((product) => {
                    if (product.id === newProduct.id) {
                        return { ...product, amount: Number(product.amount) + 1 }
                    } else {
                        return product
                    }
                })
            })
            getCartTotalPrice()
        }

        setIsCartOpen(true)

    }

    // remove product from cart fn
    function removeProductFromCart(currentProductId: number) {
        setCartProducts(state => state.filter((product) => product.id !== currentProductId))
    }

    // increase product amount
    function increaseProductAmount(currentProduct: ProductProps) {
        setCartProducts(state => {
            return state.map((product) => {
                if (product.id === currentProduct.id) {
                    return { ...product, amount: currentProduct.amount + 1 }
                } else {
                    return product
                }
            })
        })
    }

    // decrease product amount
    function decreaseProductAmount(currentProduct: ProductProps) {

        if(currentProduct.amount <= 1){
            setCartProducts(cartProducts.filter((product) => product.id !== currentProduct.id))
        }

        setCartProducts(state => {
            return state.map((product) => {
                if (product.id === currentProduct.id && currentProduct.amount > 1) {
                    return { ...product, amount: currentProduct.amount - 1 }
                } else {
                    return product
                }
            })
        })
    }

    // get cart total price
    function getCartTotalPrice() {
        if (cartProducts[0]) {
            let firstPrice = Number(cartProducts[0].price) * Number(cartProducts[0].amount)
            let prices = cartProducts.map((product) => Number(product.price) * Number(product.amount))

            if (prices.length === 1) {
                setCartTotalPrice(firstPrice)
            } else {
                setCartTotalPrice(prices.reduce((acu, cur) => acu + cur, 0))
            }
        } else if (cartProducts.length === 0) {
            setCartTotalPrice(0)
        }
    }

    // complete checkout 
    function checkout(){
        if(cartProducts.length !== 0){
            toast.success(`Compra realizada no total de: R$${cartTotalPrice.toFixed(2)}`)
            setCartProducts([])
            setIsCartOpen(false)
        } else {
            toast.warn('Adicione um item ao carrinho antes de finalizar sua compra!')
            setIsCartOpen(false)
        }
    }

    useEffect(() => {
        getCartTotalPrice()
    }, [cartProducts])

    return (
        <CartContext.Provider value={{ toggleCart, isCartOpen, cartProducts, addProductToCart, removeProductFromCart, cartTotalPrice, increaseProductAmount, decreaseProductAmount, checkout }}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}