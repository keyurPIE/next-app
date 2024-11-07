"use client";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import DashboardLayout from "./(dashboard)/layout";
import Loading from "./Loading";

export default function Page({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress > 99) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
        return newProgress;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack className="h-screen">
      <DashboardLayout>{children}</DashboardLayout>
    </Stack>
  );
}
