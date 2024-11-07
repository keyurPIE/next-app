"use client";
import { Button, Stack, Typography } from "@mui/material";
import Lottie from "react-lottie-player";
import { useScreenSize } from "./_components/useScreenSize";
import errorAnimation from "./_animations/page-not-found-animation.json";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { isSmScreen, isTabletMode } = useScreenSize();

  const animSize = isSmScreen ? 280 : isTabletMode ? 350 : 450;
  return (
    <Stack
      className="h-screen w-full"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Stack width="100%" alignItems="center">
        <Lottie
          loop
          play
          animationData={errorAnimation}
          style={{
            width: animSize,
            height: animSize,
          }}
        />
        <Typography
          fontWeight={500}
          fontSize={18}
          sx={{ color: "white", flexWrap: "wrap" }}
        >
          Something went wrong while fetching page data. Either you're on a
          wrong page url or our page simply failed to load. Please try again or
          contact us!
        </Typography>
      </Stack>
      <Stack direction="row" gap={1}>
        <Button
          variant="outlined"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <Button
          variant="contained"
          component="a"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us
        </Button>
      </Stack>
    </Stack>
  );
}
