"use client";
import { useMediaQuery, useTheme } from "@mui/material";

// Each breakpoint (a key) matches with a fixed screen width (a value):
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export const useScreenSize = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmAndUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isTabletMode = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMdAndUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isLgAndUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isXlScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isBetweenMdAndLg = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return {
    isBetweenMdAndLg,
    isXsScreen,
    isSmScreen,
    isSmAndUp,
    isMdScreen,
    isMdAndUp,
    isLgScreen,
    isLgAndUp,
    isXlScreen,
    isTabletMode,
    isMobileOrTablet,
  };
};
