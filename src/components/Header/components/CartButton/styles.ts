"use client"

import styled from "styled-components";

export const CartRoot = styled.button`
    background-color: #FFF;
    color: #000;

    border: none;

    font-weight: 700;

    border-radius: 8px;

    height: 45px;
    width: 90px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    svg{
        margin-bottom: 2px;
    }

    .cart-amount{
        font-size: 18px;
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        height: 35px;
        width: 80px;

        .cart-amount{
            font-size: 16px;
        }

        svg{
            margin-bottom: 2px;
            width: 18px;
            height: 18px;
        }
    }
`