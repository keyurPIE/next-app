import { SxProps } from "@mui/material";

export const defaultContainerStyles: SxProps = {
  maxWidth: "1440px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingX: {
    xs: "16px", // Standard padding for extra small screens
    sm: "24px", // Standard padding for small screens
    md: "32px", // Standard padding for medium screens
    lg: "48px", // Standard padding for large screens
    xl: "64px", // Standard padding for extra large screens
  },
  paddingY: {
    xs: "16px", // Consistent vertical padding
    sm: "24px",
    md: "32px",
    lg: "48px",
    xl: "64px",
  },
  marginX: "auto", // Center the container horizontally
};
