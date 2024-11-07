import { Box, Grid, Stack, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: `/contact-us`,
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Contact Us",
  description: "Contact if you need support",
};

export default async function Page() {
  return (
    <Stack gap={{ xs: 1.5, md: 7.5 }}>
      <Grid container gap={{ xs: 5, md: 0 }}>
        <Grid item xs={12} md={6}>
          <Stack gap={3}>
            <Typography>Contact us</Typography>
            <Typography>This is contact page.</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Box gap={{ xs: 5, md: "100px" }}>
        <Typography>How We Work</Typography>
        <Typography>This is the thing how contact us works</Typography>
      </Box>
    </Stack>
  );
}
