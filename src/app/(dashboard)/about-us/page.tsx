import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: `/about-us`,
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "About us",
  description:
    "This is the landing template made with next js with typescript and material UI",
};

export default async function Page() {
  return (
    <Stack gap={{ xs: 1.5, md: 7.5 }}>
      <Grid container gap={{ xs: 5, md: 0 }}>
        <Grid item xs={12} md={6}>
          <Stack
            gap={3}
            sx={{
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">About Us</Typography>
            <Typography variant="body1" color="text.secondary">
              This is the About us the landing template made with next js with
              typescript and material UI
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* Rest section */}
      <Box gap={{ xs: 5, md: "100px" }}>
        <Typography variant="h2">How We Work</Typography>
        <Typography>
          We works seamlessly with your existing shopping habits. Here&apos;s
          how:
        </Typography>
      </Box>
    </Stack>
  );
}
