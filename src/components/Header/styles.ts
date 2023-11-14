"use client"

import styled from "styled-components";

export const HeaderRoot = styled.header`
    width: 100%;
    height: 101px;

    background-color: #0F52BA;
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderNav = styled.nav`
    width: 100%;
    max-width: 1279px;

    padding: 0rem 1rem;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
    }
`

