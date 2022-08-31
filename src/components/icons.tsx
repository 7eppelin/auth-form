import { FC } from "react";

import { PALETTE, PaletteColor } from "src/constants";

type Props = {
    size?: string;
    color?: PaletteColor;
};

export const CloseIcon: FC<Props> = ({ size = "16px", color = PALETTE.BLACK }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
            <path
                fill={color}
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"
            />
        </svg>
    );
};

export const ChevronDownIcon: FC<Props> = ({ size = "16px", color = PALETTE.BLACK }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
            <path
                fill={color}
                d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
        </svg>
    );
};
