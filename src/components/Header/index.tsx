// "use client"

import { CartButton } from "./components/CartButton";
import { Logo } from "./components/Logo";
import { HeaderNav, HeaderRoot } from "./styles";

export function Header(){
    return(
        <HeaderRoot>
            <HeaderNav>
                <Logo />
                <CartButton />
            </HeaderNav>
        </HeaderRoot>    
    )
}