"use client"
import styled from "styled-components"

export const CheckoutProductCartRoot = styled.article`

    position: relative;

    padding: 19px 23px;
    width: 100%;
    max-width: 379px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: #000;
    background-color: #FFF;

    border-radius: 8px;

    .checkout-product-img{
        object-fit: contain;

        height: 100%;
        width: auto;
        max-height: 57px;

        margin-right: 21px;
    }

    .checkout-product-heading{
        font-size: 13px;
        width: 100%;
        max-width: 89px;
        font-weight: 400;
    }

    .checkout-product-price{
        font-size: 14px;
        font-weight: 700;
    }

    .checkout-product-remove-btn{
        
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(7px, -6px);

        width: 18px;
        height: 18px;

        border-radius: 100%;

        background-color: #000;

        border: none;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        svg{
            color: #FFF;
        }
    }

    .checkout-product-counter{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

        width: 100%;
        max-width: 50px;

        margin: 0px 40px 0px 33px;

        .counter-label{
            font-size: 5px;
            font-weight: 400;
        }

        .counter-wrapper{
            border: 1px solid #BFBFBF;
            border-radius: 4px;

            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            padding: 4px 7px;
        }

        .counter-input{
            text-align: center;
            font-size: 8px;
            border: none;
            outline: none;

            width: 100%;
            max-width: 10px;
        }

        .counter-increase-btn, .counter-decrease-btn{
            border: none;
            background-color: transparent;
            cursor: pointer;
        }

        .counter-divider{
            width: 1px;
            height: 13px;
            background-color: #BFBFBF;
            margin: 0px 2.5px;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 0.5rem 0.5rem;
        max-width: 100%;
        width: 100%;
        justify-content: space-between;

        .checkout-product-img{
            margin: 0px;
        }

        .checkout-product-heading{
            font-size: 10px;
            max-width: 50px;
        }

        .checkout-product-price{
            font-size: 10px;
        }

        .checkout-product-counter{
            margin: 0px;
        }
    }
`