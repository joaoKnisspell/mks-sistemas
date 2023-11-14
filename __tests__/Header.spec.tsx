import { fireEvent, render, screen } from "@testing-library/react"
import { Header } from "@/components/Header"
import { CheckoutCart } from "@/components/CheckoutCart"
import { CartContextProvider } from "@/contexts/CheckoutCartContext"
import '@testing-library/jest-dom';

const renderHeaderComponent = () => {
    render(
        <CartContextProvider>
            <Header />
            <CheckoutCart />
        </CartContextProvider>   
    )
}

describe("Header", () => {
    it("should render company logo", () => {
        renderHeaderComponent()
        expect(screen.getByText("MKS")).toBeInTheDocument()
        expect(screen.getByText("Sistemas")).toBeInTheDocument()
    })

    it("should render cart button", () => {
        renderHeaderComponent()
        expect(screen.getByText("0")).toBeInTheDocument()
    })

    it("should open cart modal", () => {
        renderHeaderComponent()

        const cartBtn = screen.getByText("0")
        fireEvent.click(cartBtn)

        expect(screen.getByText("Carrinho de compras")).toBeInTheDocument()
    })
})