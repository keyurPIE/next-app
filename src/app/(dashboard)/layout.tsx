import React, { Suspense } from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { Box } from "@mui/material";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Box>
        <Box>
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </Box>
      </Box>
    </section>
  );
}
