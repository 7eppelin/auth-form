export const PALETTE = {
    WHITE: "#FFF",
    BLACK: "#212529",

    GREY_100: "#F8F9FA",
    GREY_200: "#E9ECEF",
    GREY_300: "#DEE2E6",
    GREY_400: "#CED4DA",
    GREY_500: "#ADB5BD",
    GREY_600: "#6C757D",
    GREY_700: "#495057",
    GREY_800: "#343A40",

    BLUE_200: "#E9F5FF",
    BLUE_300: "#D2EBFF",
    BLUE_400: "#2977FF",
    BLUE_500: "#1754BE",
    BLUE_600: "#103F91",

    RED_200: "#FFEEF0",
    RED_400: "#EF5121",
    RED_500: "#C7421A",
    RED_600: "#A33413",

    GREEN_200: "#CDFAE4",
    GREEN_400: "#009E40",

    ORANGE_200: "#FFF9E5",
    ORANGE_400: "#FEB31E",
} as const;

export type PaletteColor = typeof PALETTE[keyof typeof PALETTE];
