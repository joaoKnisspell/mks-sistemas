"use client"
import styled from "styled-components";

export const CheckoutCartRoot = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    
    width: 486px;
    height: 100vh;

    background-color: #0F52BA;
    color: #FFF;

    box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100vw;
        height: 100vh;
    }
`

export const CkeckoutCartHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 36px 22px 0px 47px;

    .cart-heading{
        font-size: 27px;
        font-weight: 700;
    }

    .cart-close-btn{
        width: 38px;
        height: 38px;

        background-color: #000;
        border-radius: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: none;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 2rem 0px 2rem;
        align-items: center;

        .cart-heading{
            font-size: 20px;
        }
    }
`

export const CheckoutCartDetail = styled.section`
    margin: 60px 0px 70px 0px;
    padding-left: 47px;
    padding-top: 10px;

    display: flex;
    flex-direction: column;
    gap: 22px;

    height: 60%;
    overflow-y: auto;

    @media screen and (max-width: 768px) {
        margin: 1.5rem 0rem 0rem 0rem;
        padding: 10px 16px;
    }
`

export const CheckoutCartFooter = styled.footer`
    width: 100%;
    margin-top: auto;

    font-size: 28px;
    font-weight: 700;

    .cart-footer-detail{
        padding: 0px 63px 42px 47px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cart-checkout-btn{
        width: 100%;
        background-color: #000;
        color: #FFF;
        font-size: 28px;
        font-weight: 700;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 97px;

        cursor: pointer;
        border: none;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;

        .cart-footer-detail{
            padding: 1rem 2rem;
        }

        .cart-checkout-btn{
            font-size: 20px;
            height: 60px;
        }
    }
`