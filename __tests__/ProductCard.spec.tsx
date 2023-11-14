import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { CartContextProvider } from "@/contexts/CheckoutCartContext";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

const renderProductCard = () => {
    render(
        <CartContextProvider>
            <Header />
            <ProductCard 
                id={8} 
                photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" 
                price="600.00"
                amount={1}
                name="Headset Cloud Stinger"
                description="O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade."
                key={8}
            />
        </CartContextProvider>    
    )
}

describe("ProductCard", () => {
    it("should increment cart counter", () => {
        renderProductCard()

        const addProductToCartBtn = screen.getByText("COMPRAR")
        fireEvent.click(addProductToCartBtn)

        expect(screen.getByText("1")).toBeInTheDocument()
    })
})