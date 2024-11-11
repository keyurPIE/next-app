import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
  // backgroundColor: "#1a237e",
  backgroundColor: "#1E1E1E",
  color: "#ffffff",
  padding: theme.spacing(6, 0),
  marginTop: "auto",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#ffffff",
  textDecoration: "none",
  transition: "color 0.3s ease",
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  color: "#ffffff",
  margin: theme.spacing(0, 1),
  cursor: "pointer",
  transition: "transform 0.3s ease, color 0.3s ease",
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: "#ffffff",
}));

const footerLinks = [
  { text: "About Us", url: "/about-us" },
  { text: "Blog", url: "/blogs" },
  { text: "Finly Rebates", url: "/rebates" },
  { text: "Credit Cards Calculator", url: "/credit-cards" },
  { text: "Terms of Service", url: "/terms-and-conditions" },
  { text: "Privacy Policy", url: "/privacy-policy" },
  { text: "Disclosure", url: "/disclosure" },
  { text: "Credit Cards", href: "/credit-cards" },
];

const footerSections = [
  {
    title: "what we",
    links: [
      { text: "About Us", url: "/about-us" },
      { text: "Our Story", url: "/our-story" },
      { text: "Careers", url: "/careers" },
      { text: "Press", url: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", url: "/help-center" },
      { text: "Contact Us", url: "/contact-us" },
      { text: "FAQ", url: "/faq" },
      { text: "Community", url: "/community" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", url: "/privacy-policy" },
      { text: "Terms of Service", url: "/terms-conditions" },
      { text: "Cookie Policy", url: "/cookie-policy" },
      { text: "Disclaimer", url: "/disclaimer" },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook />, label: "Facebook", url: "#" },
  { icon: <Twitter />, label: "Twitter", url: "#" },
  { icon: <Instagram />, label: "Instagram", url: "#" },
  { icon: <LinkedIn />, label: "LinkedIn", url: "#" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setEmail("");
    }
  };

  return (
    <FooterContainer component="footer" role="contentinfo">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Stack direction="row" gap={1} alignItems="center">
              <Typography variant="h6" fontWeight={600} color="#ffffff">
                Trust me
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            display="flex"
            justifyContent="space-between"
            gap={2}
          >
            {footerSections.map((section, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} width={"100%"}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {section.title}
                </Typography>
                <Box component="nav" aria-label={`${section.title} navigation`}>
                  {section.links.map((link, linkIndex) => (
                    <Box key={linkIndex} mb={1}>
                      <FooterLink
                        href={link.url}
                        aria-label={link.text}
                        onClick={(e) => e.preventDefault()}
                      >
                        {link.text}
                      </FooterLink>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" color="#ffffff" gutterBottom>
              Subscribe to our Newsletter
            </Typography>
            <form onSubmit={handleSubscribe}>
              <Stack direction="row" gap={1} alignItems="center">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 1,
                    input: { color: "#ffffff", paddingY: 1 },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                    },
                  }}
                  aria-label="Email subscription input"
                />
                <Button
                  variant="contained"
                  sx={{ width: 90, borderRadius: 1 }}
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </form>
            <Typography variant="body2" color="#ffffff" sx={{ marginTop: 1 }}>
              Rest assured, your email is used only for newsletters.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ marginTop: 4, borderColor: "#ffffff" }} />

        {/* Footer Bottom */}
        <Stack
          direction={{ md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          gap={2}
        >
          <Typography variant="body2" color="#ffffff">
            © {new Date().getFullYear()} All Rights Reserved.{" "}
            <strong>
              <i>Made by Keyur Moradiya</i>
            </strong>
          </Typography>
          <Box display="flex" width={{ xs: "100%", md: "auto" }}>
            {socialLinks.map((social, index) => (
              <Box
                key={index}
                aria-label={social.label}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon>{social.icon}</SocialIcon>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
