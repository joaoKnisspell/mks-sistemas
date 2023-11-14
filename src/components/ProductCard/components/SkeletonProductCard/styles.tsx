"use client"
import styled from "styled-components"

export const SkeletonProductCardRoot = styled.div`
    background-color: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

    border-radius: 8px;

    width: 100%;
    max-width: 217.562px;

    height: 330px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 18px 12px 18px 12px;
` 

export const SkeletonProductCardPhoto = styled.div`
    max-height: 138px;
    height: 100%;
    width: 100%;

    background-color: #EEEEEE;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

`

export const SkeletonProductCardText = styled.div`
    width: 100%;
    height: 30px;

    background-color: #EEEEEE;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`