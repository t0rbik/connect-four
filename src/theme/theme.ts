import { createTheme, styled, Button } from "@nextui-org/react";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // generic colors
      white: "#ffffff",
      black: "#000000",

      // background colors (light)
      background: "$white",
      backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
      foreground: "$black",
      backgroundContrast: "$white",

      // brand colors
      primaryLight: "#8787FF",
      primaryLightHover: "$blue300", // commonly used on hover state
      primaryLightActive: "$blue400", // commonly used on pressed state
      primaryLightContrast: "$blue600", // commonly used for text inside the component
      primary: "#2424FF",
      primaryBorder: "$blue500",
      primaryBorderHover: "$blue600",
      primarySolidHover: "$blue700",
      primarySolidContrast: "$white", // commonly used for text inside the component
      primaryShadow: "$blue500",

      // ... rest of colors (secondary, success, warning, error, etc)
    },
    space: {},
    fonts: {},
  },
});

export const PrimaryButton = styled(Button, {
  border: 0,
  boxShadow: "0px 14px 24px rgb(36 36 255 / 14%)",
  borderRadius: "14px",
  variants: {
    size: {
      celsia: {
        padding: "17px 33.5px",
        fontSize: "14px",
        lineHeight: "21.86px",
        fontWeight: 600,
        height: "fit-content",
      },
    },
    color: {
      celsia: {
        background: "$primary",
        color: "$white",
        "&:hover": {},
        "&:focus": {
          outline: "1px solid $black",
          outlineOffset: "1px",
        },
        "&:active": {},
      },
    },
  },
});

export const SecondaryButton = styled(Button, {
  boxShadow: "none",
  borderRadius: "14px",
  border: "1px solid #e6e6ed",
  variants: {
    size: {
      celsia: {
        padding: "17px 38px",
        fontSize: "14px",
        lineHeight: "21.86px",
        fontWeight: 600,
        height: "fit-content",
      },
    },
    color: {
      celsia: {
        background: "transparent",
        color: "$primary",
        "&:hover": {
          borderColor: "$primary",
        },
        "&:focus": {
          outline: "1px solid $black",
          outlineOffset: "1px",
        },
        "&:active": {},
      },
    },
  },
});

export const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
});

export const Col = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export default theme;
