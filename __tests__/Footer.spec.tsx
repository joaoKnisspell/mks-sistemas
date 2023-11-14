import { Footer } from "@/components/Footer";
import { render, screen } from "@testing-library/react";

const renderFooterComponent = () => {
    render(
        <Footer />    
    )
}

describe("Footer", () => {
    it("should render footer component", () => {
        renderFooterComponent()

        expect(screen.getByText("MKS Sistemas © Todos os direitos reservados"))
    })
})