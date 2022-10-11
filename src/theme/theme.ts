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
  padding: "17px 33.5px",
  borderRadius: "14px",
  fontSize: "14px",
  lineHeight: "21.86px",
  fontWeight: 600,
  variants: {
    color: {
      celsia: {
        background: "$primary",
        color: "$white",
        "&:hover": {
          background: "$green100",
          color: "$green800",
        },
        "&:active": {
          background: "$green200",
        },
        "&:focus": {
          borderColor: "$green400",
        },
      },
    },
  },
});

export const SecondaryButton = styled(Button, {
  boxShadow: "$md",
  variants: {
    size: {
      mysize: {
        height: "$12",
        borderRadius: "$xs",
      },
    },
    color: {
      mycolor: {
        background: "$green800",
        color: "$green100",
        border: "$space$1 solid transparent",
        "&:hover": {
          background: "$green100",
          color: "$green800",
        },
        "&:active": {
          background: "$green200",
        },
        "&:focus": {
          borderColor: "$green400",
        },
      },
    },
  },
});

export default theme;
