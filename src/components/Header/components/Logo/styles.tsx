"use client"

import styled from "styled-components"

export const HeaderLogo = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 8px;

    .heading{
        font-size: 40px;
        font-weight: 600;
    }

    .subHeading{
        font-size: 20px;
        font-weight: 300;
        line-height: 170%;
    }

    @media screen and (max-width: 768px) {
        .heading{
            font-size: 30px;
        }

        .subHeading{
            font-size: 15px;
            line-height: 200%;
        }
    }
`