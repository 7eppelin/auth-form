import { ChangeEvent, FC } from "react";
import styled from "styled-components";

import { PALETTE } from "src/constants";

import { CloseIcon } from "../icons";
import { InputError } from "./input-error";
import { InputLabel } from "./input-label";

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

const INPUT_STYLES = `
    width: 100%;
    color: ${PALETTE.BLACK};
    padding: 20px 32px 10px 20px;
`;

const InputStyled = styled.input`
    ${INPUT_STYLES}
`;

const TextAreaStyled = styled.textarea`
    ${INPUT_STYLES}
    resize: vertical;
    min-height: 100px;
    max-height: 300px;
`;

const ClearButton = styled.button`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
`;

type PropsBase = {
    value: string;
    label: string;
    disabled?: boolean;
    error?: string;
    required?: boolean;
    isFocused?: boolean;
    onFocus: () => void;
    onBlur: () => void;
    onClear: () => void;
};

type InputProps = {
    type?: "text" | "email" | "password";
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TextareaProps = {
    type: "textarea";
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

type Props = PropsBase & (InputProps | TextareaProps);

export const InputInner: FC<Props> = ({
    value,
    onChange,
    type,
    label,
    disabled,
    error,
    required,
    isFocused,
    onFocus,
    onBlur,
    onClear,
}) => {
    return (
        <TextInputWrapper>
            <LabelWrapper>
                <InputLabel
                    text={label}
                    isActive={isFocused || Boolean(value)}
                    isInputRequired={required}
                />

                {type === "textarea" ? (
                    <TextAreaStyled
                        value={value}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        disabled={disabled}
                    />
                ) : (
                    <InputStyled
                        value={value}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        disabled={disabled}
                        type={type}
                    />
                )}

                {value && (
                    <ClearButton onClick={onClear}>
                        <CloseIcon color={PALETTE.GREY_500} size="18px" />
                    </ClearButton>
                )}
            </LabelWrapper>

            {error && <InputError text={error} />}
        </TextInputWrapper>
    );
};
