// @ts-nocheck
"use client";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";

const BoxComponent = () => {
  const theme = useTheme();
  const t = useTranslations("About");

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "4.4375rem",
        paddingBottom: "4.4375rem",
        marginTop: "-1.25rem",
        paddingLeft: {
          xs: 0,
          sm: 0,
          lg: 0,
          md: "33%",
          xl: "33%",
        },
        background: theme.palette.background.default,
      }}
    >
      <Typography
        component="div"
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "main",
          paddingRight: "5%",
          paddingTop: "1%",
        }}
      >
        {t("title")}
        <br />
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.375rem",
            md: "1.375rem",
            xl: "1.375rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          fontWeight: {
            xs: 600,
            sm: 600,
            lg: 500,
            md: 500,
            xl: 500,
          },
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        component="div"
        color="main"
      >
        {t("conditions1")}
        <br />
      </Typography>
      <Typography
        sx={{
          fontSize: "1.125rem",
          paddingRight: "5%",
          paddingLeft: "5%",
          textAlign: "justify",
          textJustify: "inter-word",
          fontWeight: 400,
        }}
        component="div"
        color="secondary"
      >
        {t("conditions2")}
        <br />
      </Typography>
    </Box>
  );
};

export default BoxComponent;
