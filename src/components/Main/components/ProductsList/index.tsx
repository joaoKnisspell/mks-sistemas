"use client"

import { SkeletonProductCard } from "@/components/ProductCard/components/SkeletonProductCard"
import { ProductCard } from "../../../ProductCard"
import { ProductsWrapper } from "./styles"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { MainWrapper } from "../../styles"

import axios from 'axios'

type ApiProductProps = {
    id: number,
    brand: string,
    createdAt: string,
    description: string,
    name: string,
    photo: string,
    price: string,
    updatedAt: string,
}

export function ProductsList(){

    const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8]

    async function getProducts(){
        const response = await axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC")
        const products = response.data.products

        return products
    }

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })

    if(isLoading){
        return (
            <MainWrapper>
                <ProductsWrapper>
                    {skeletonArray.map((index) => {
                        return <SkeletonProductCard key={index} />
                    })}
                </ProductsWrapper>
            </MainWrapper>    
        )
    }

    return(
        <ProductsWrapper>
            {data.map((product: ApiProductProps ) => {
                return(
                    <ProductCard 
                        key={product.id} 
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        photo={product.photo}
                        price={product.price}
                        amount={0}
                    />    
                )
            })}
        </ProductsWrapper>    
    )
}