import { FC } from "react";
import styled from "styled-components";

import { PALETTE } from "src/constants";

type StyleProps = {
    isActive?: boolean;
};

const LabelStyled = styled.div<StyleProps>`
    position: absolute;
    display: flex;
    pointer-events: none;
    color: ${({ isActive }) => (isActive ? PALETTE.GREY_600 : PALETTE.GREY_500)};
    font-size: ${({ isActive }) => (isActive ? "12px" : "16px")};
    left: 20px;
    top: ${({ isActive }) => (isActive ? "4px" : "50%")};
    transform: translateY(${({ isActive }) => (isActive ? "0" : "-50%")});
    transition: 0.2s;
`;

const RequiredMarkStyled = styled.span`
    color: ${PALETTE.RED_400};
`;

type Props = {
    text: string;
    isInputRequired?: boolean;
} & StyleProps;

export const InputLabel: FC<Props> = ({ text, isActive, isInputRequired }) => {
    return (
        <LabelStyled isActive={isActive}>
            {text}
            {isInputRequired && <RequiredMarkStyled>{"*"}</RequiredMarkStyled>}
        </LabelStyled>
    );
};
