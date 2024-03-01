import styled, { css } from "styled-components";

interface Props {
  variant: string; 
}

export const ButtonContainer = styled.button<Props>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100px;

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #ED4105;
        &:hover{
            opacity:0.6;
            cursor:Pointer;
        }
        &::after {
            content: "";
            position: absolute;
            border: 1px solid #e41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`;
