import { FC, forwardRef, ReactNode } from "react";
import styled from "styled-components";

import { COLOR } from "src/constants";

type StyleProps = {
    color?: typeof COLOR[keyof typeof COLOR];
};

const applyCustomStyles = (styleProps: StyleProps) => {
    return `color: ${styleProps.color ?? "inherit"}`;
};

const H1 = styled.h1<StyleProps>`
    font-size: 32px;
    line-height: 36px;
    ${applyCustomStyles};
`;

const H2 = styled.h2<StyleProps>`
    font-size: 24px;
    line-height: 28px;
    ${applyCustomStyles};
`;

const H3 = styled.h3<StyleProps>`
    font-size: 20px;
    line-height: 24px;
    ${applyCustomStyles};
`;

const H4 = styled.h4<StyleProps>`
    font-size: 18px;
    line-height: 24px;
    ${applyCustomStyles};
`;

const H5 = styled.h5<StyleProps>`
    font-size: 16px;
    line-height: 20px;
    ${applyCustomStyles};
`;

const Paragraph = styled.p<StyleProps>`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    ${applyCustomStyles};
`;

const ParagraphBold = styled(Paragraph)`
    font-weight: 700;
`;

const Small = styled.small<StyleProps>`
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    ${applyCustomStyles};
`;

const SmallBold = styled(Small)`
    font-weight: 700;
`;

const Caption = styled(Paragraph)`
    font-size: 12px;
    line-height: 16px;
`;

enum TypoVariant {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    P = "body",
    BOLD = "body-bold",
    SMALL = "small",
    SMALL_BOLD = "small-bold",
    CAPTION = "caption",
}

type TypoVariantLiteral = `${TypoVariant}`;

const COMPONENTS_MAP = {
    [TypoVariant.H1]: H1,
    [TypoVariant.H2]: H2,
    [TypoVariant.H3]: H3,
    [TypoVariant.H4]: H4,
    [TypoVariant.H5]: H5,
    [TypoVariant.P]: Paragraph,
    [TypoVariant.BOLD]: ParagraphBold,
    [TypoVariant.SMALL]: Small,
    [TypoVariant.SMALL_BOLD]: SmallBold,
    [TypoVariant.CAPTION]: Caption,
};

type Props = {
    variant: TypoVariantLiteral;
    children?: ReactNode;
} & StyleProps;

export const Typo: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ variant, children, ...styleProps }, ref) => {
        const Component = COMPONENTS_MAP[variant];

        return (
            <Component ref={ref} {...styleProps}>
                {children}
            </Component>
        );
    },
);
