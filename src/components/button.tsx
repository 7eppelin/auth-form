import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled from "styled-components";

import { COLOR } from "src/constants";

const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 96px;
    height: 44px;
    padding: 0;
    border: 0;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    transition: all 0.15s ease;

    &:disabled {
        cursor: default;
        opacity: 0.5;
    }
`;

const PrimaryButton = styled(BaseButton)`
    background: ${COLOR.BLUE_400};
    color: ${COLOR.WHITE};

    :hover:not(:disabled) {
        background-color: ${COLOR.BLUE_500};
    }

    :active:not(:disabled) {
        background-color: ${COLOR.BLUE_400};
    }
`;

const SecondaryButton = styled(BaseButton)`
    background: ${COLOR.WHITE};
    color: ${COLOR.BLACK};

    :hover:not(:disabled) {
        background-color: ${COLOR.GREY_200};
    }

    :active:not(:disabled) {
        background-color: ${COLOR.GREY_300};
    }
`;

enum ButtonVariant {
    Primary = "primary",
    Secondary = "secondary",
}

type ButtonVariantLiteral = `${ButtonVariant}`;

type Props = {
    variant?: ButtonVariantLiteral;
    disabled?: boolean;
    children?: ReactNode;
    onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BUTTONS_MAP = {
    [ButtonVariant.Primary]: PrimaryButton,
    [ButtonVariant.Secondary]: SecondaryButton,
};

export const Button: FC<Props> = ({ variant = "primary", children, ...rest }) => {
    const ButtonStyled = BUTTONS_MAP[variant];

    return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
