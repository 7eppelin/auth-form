import { FC, useRef, useState } from "react";
import styled from "styled-components";

import { BOX_SHADOW, PALETTE } from "src/constants";
import { useOnClickOutside } from "src/hooks";

import { ChevronDownIcon } from "./icons";
import { Typo } from "./typography";

const SelectWrapper = styled.div`
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
`;

const Field = styled.div`
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    padding: 0 32px 0 20px;
    position: relative;
    border-radius: 8px;
    border: 1px solid ${PALETTE.GREY_200};
    transition: 0.15s;
    overflow: hidden;
    cursor: pointer;

    &:focus-within {
        border-color: ${PALETTE.BLUE_400};
    }
`;

const ICON_SIZE = "18px";

const IconWrapper = styled.div`
    height: ${ICON_SIZE};
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: center center;
    transition: transform 0.2s ease;

    &[data-expanded="true"] {
        transform: translateY(-50%) rotate(180deg);
    }
`;

const UlStyled = styled.ul<{ isOpen: boolean }>`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px;
    background: ${PALETTE.WHITE};
    box-shadow: ${BOX_SHADOW};
    border-radius: 8px;
    z-index: 1;
    position: absolute;
    top: 105%;
    right: 0;
`;

const LiStyled = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 0 20px;
    background: ${PALETTE.WHITE};
    border-radius: 8px;
    color: ${PALETTE.BLACK};
    transition: all 0.2s ease;
    text-align: center;
    cursor: pointer;

    &:hover {
        background: ${PALETTE.BLUE_400};
        color: ${PALETTE.WHITE};
    }
`;

type Props = {
    options: string[];
    placeholder: string;
    value: string;
    onSelect: (value: string) => void;
};

export const Select: FC<Props> = ({ options, placeholder, value, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setIsOpen(false));

    const handleSelect = (option: string) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <SelectWrapper ref={ref}>
            {/* TODO: improve accessibility */}
            <Field onClick={() => setIsOpen(!isOpen)} tabIndex={0}>
                {value ? (
                    <Typo variant="small">{value}</Typo>
                ) : (
                    <Typo variant="small" color={PALETTE.GREY_500}>
                        {placeholder}
                    </Typo>
                )}

                <IconWrapper data-expanded={isOpen}>
                    <ChevronDownIcon color={PALETTE.GREY_500} size={ICON_SIZE} />
                </IconWrapper>
            </Field>

            {isOpen && (
                <UlStyled isOpen={isOpen}>
                    {options.map((option, i) => (
                        <LiStyled onClick={() => handleSelect(option)} key={i}>
                            <Typo variant="small">{option}</Typo>
                        </LiStyled>
                    ))}
                </UlStyled>
            )}
        </SelectWrapper>
    );
};
