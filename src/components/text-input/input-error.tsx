import { FC } from "react";
import styled from "styled-components";

import { PALETTE } from "src/constants";

import { Typo } from "../typography";

const ErrorWrapper = styled.div`
    padding-left: 20px;
`;

type Props = {
    text: string;
};

export const InputError: FC<Props> = ({ text }) => {
    return (
        <ErrorWrapper>
            <Typo variant="caption" color={PALETTE.RED_400}>
                {text}
            </Typo>
        </ErrorWrapper>
    );
};
