import { ChangeEvent, FC, useRef, useState } from "react";
import styled from "styled-components";

import { PALETTE } from "src/constants";

import { CloseIcon } from "./icons";
import { InputLabel } from "./input-label";
import { Typo } from "./typography";

const TextInputWrapper = styled.div`
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const LabelWrapper = styled.label`
    width: 100%;
    position: relative;
    border-radius: 8px;
    border: 1px solid ${PALETTE.GREY_200};
    transition: 0.15s;
    overflow: hidden;

    &:focus-within {
        border-color: ${PALETTE.BLUE_400};
    }
`;

const Input = styled.input`
    width: 100%;
    color: ${PALETTE.BLACK};
    padding: 20px 32px 10px 20px;
`;

const ErrorWrapper = styled.div`
    padding-left: 20px;
`;

const ClearButton = styled.button`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
`;

type Props = {
    value: string;
    onChange: (value: string) => void;
    label: string;
    disabled?: boolean;
    error?: string;
    required?: boolean;
};

export const TextInput: FC<Props> = ({ value, onChange, label, error, disabled, required }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const onClear = () => {
        inputRef.current?.focus();
        onChange("");
    };

    return (
        <TextInputWrapper>
            <LabelWrapper>
                <InputLabel
                    text={label}
                    isActive={isFocused || Boolean(value)}
                    isInputRequired={required}
                />

                <Input
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    ref={inputRef}
                />

                {value && (
                    <ClearButton onClick={onClear}>
                        <CloseIcon color={PALETTE.GREY_500} size="18px" />
                    </ClearButton>
                )}
            </LabelWrapper>

            {error && (
                <ErrorWrapper>
                    <Typo variant="caption" color={PALETTE.RED_400}>
                        {error}
                    </Typo>
                </ErrorWrapper>
            )}
        </TextInputWrapper>
    );
};
