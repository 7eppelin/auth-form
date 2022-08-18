import React from "react";
import styled from "styled-components";

import { Typo } from "src/components";
import { PALETTE } from "src/constants";

const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    height: 28px;
    width: 44px;
    background: ${PALETTE.WHITE};
    border: 1px solid ${PALETTE.GREY_400};
    border-radius: 14px;
    padding: 0 2px;
    transition: ease 0.2s;

    ${HiddenCheckbox}:focus + & {
        border: 1px solid ${PALETTE.BLACK};
    }

    &[data-checked="true"] {
        background: ${PALETTE.BLUE_300};
    }
`;

const Switch = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: ${PALETTE.BLUE_400};
    transition: ease 0.2s;

    &[data-checked="true"] {
        transform: translate(14px);
    }
`;

type Props = {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
};

export const Checkbox: React.FC<Props> = ({ id, label, checked, onChange }) => {
    return (
        <StyledLabel htmlFor={id}>
            <HiddenCheckbox id={id} checked={checked} onChange={onChange} />
            <StyledCheckbox data-checked={checked}>
                <Switch data-checked={checked} />
            </StyledCheckbox>
            <Typo variant="small">{label}</Typo>
        </StyledLabel>
    );
};
