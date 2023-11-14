"use client"

import styled from "styled-components";

export const ProductRoot = styled.article`
    background-color: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

    border-radius: 8px;

    width: 100%;
    max-width: 217.562px;
    overflow: hidden;

    height: 330px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProductDetail = styled.div`

    color: #2C2C2C;
    padding: 18px 12px 0px 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 296px;

    .product-img{
        object-fit: contain;
        max-height: 138px;
        width: auto;
        height: 100%;
    }

    .product-headline{
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 16px;
        font-weight: 400;

        width: 100%;
    }

        .headline-price{
            font-size: 15px;
            font-weight: 700;

            color: #FFF;
            background-color: #373737;

            padding: 4px 6px;
            border-radius: 5px;
        }

    .product-subHeadline{
        font-size: 10px;
        font-weight: 300;
        line-height: 120%;
        width: 100%;

        height: 100%;
        max-height: 48px;

        overflow-y: hidden;
    }
`

export const ProductButton = styled.button`
    width: 100%;
    background-color: #0F52BA;
    color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    border: none;
    cursor: pointer;

    padding: 9px 0px;
    height: 34px;

    font-size: 14px;
    font-weight: 600;
`
