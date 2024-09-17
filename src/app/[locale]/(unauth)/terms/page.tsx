// @ts-nocheck
import { useTranslations } from "next-intl";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import { Typography } from "@mui/material";
const BoxComponent = dynamic(() => import("./boxComponent"), {
  ssr: false,
});

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "About",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function About({ params }: { params: { locale: string } }) {
  const t = useTranslations("About");
  const getDirection = (locale: string): string => {
    const rtlLanguages = ["fa", "ar"];
    return rtlLanguages.includes(locale) ? "rtl" : "ltr";
  };
  const dir = getDirection(params.locale);

  return (
    <div dir={dir}>
      <BoxComponent />
      <Typography
        component="div"
        sx={{
          fontSize: "1.75rem",
          fontWeight: 600,
          color: "main",
          paddingRight: "5%",
          paddingTop: "1%",
        }}
      >
        <br />
        {t("title_p1")}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          fontWeight: 400,
          textAlign: "justify",
          textJustify: "inter-word",
          paddingTop: "1%",
        }}
        component="div"
        color="secondary"
      >
        {t("company_info")}
        <br />
        {t("company_info")}
        <br />
        {t("users")}
        <br />
        {t("cryptocurrency")}
        <br />
        {t("blockchain")}
        <br />
        {t("account_suspension")}
        <br />
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "main",
          paddingRight: "5%",
          paddingTop: "1%",
        }}
      >
        <br />
        {t("title_p2")}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          fontWeight: 400,
          textAlign: "justify",
          textJustify: "inter-word",
          paddingTop: "1%",
        }}
        component="div"
        color="secondary"
      >
        {t("note_p21")}
        <br />
        {t("note_p22_1")}
        <br />
        {t("note_p22_2")}
        <br />
        {t("note_p22_3")}
        <br />
        {t("note_p22_4")}
        <br />
        {t("note_p22_5")}
        <br />
        {t("note_p22_6")}
        <br />
        {t("note_p22_7")}
        <br />
        {t("note_p22_8")}
        <br />
        {t("note_p22_9")}
        <br />
        {t("note_p22_10")}
        <br />
        {t("note_p22_11")}
        <br />
        {t("note_p22_12")}
        <br />
        {t("note_p22_13")}
        <br />
        {t("note_p22_14")}
        <br />
        {t("recommendation_1")}
        <br />
        {t("recommendation_2")}
        <br />
        {t("recommendation_3")}
        <br />
        {t("recommendation_4")}
        <br />
        {t("recommendation_5")}
        <br />
        {t("note_p22_15")}
        <br />
        {t("note_p22_16")}
        <br />
        {t("note_p22_17")}
        <br />
        {t("note_p22_18")}
        <br />
        {t("note_p22_19")}
        <br />
        {t("note_p22_20")}
        <br />
        {t("note_p22_21")}
        <br />
        {t("note_p22_22")}
        <br />
        {t("note_p22_23")}
        <br />
        {t("note_p22_24")}
        <br />
        {t("note_p22_25")}
        <br />
        {t("note_p22_26")}
        <br />
        {t("note_p22_27")}
        <br />
        {t("note_p22_28")}
        <br />
        {t("note_p22_29")}
        <br />
        {t("note_p22_30")}
        <br />
        {t("note_p22_31")}
        <br />
        <br />
        {t("note_p22_32")}
        <br />
        {t("note_p22_33")}
        <br />
        {t("note_p22_34")}
        <br />
        {t("note_p22_35")}
        <br />
        {t("note_p22_36")}
        <br />
        {t("note_p22_37")}
        <br />
        {t("note_p22_38")}
        <br />
        {t("note_p22_39")}
        <br />
        {t("note_p22_40")}
        <br />
        {t("note_p22_41")}
        <br />
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "main",
          paddingRight: "5%",
          paddingTop: "1%",
        }}
      >
        <br />
        {t("title_p3")}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          paddingTop: "1%",
          fontWeight: 400,
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        component="div"
        color="secondary"
      >
        {t("note_p3")}
        <br />
        {t("note_p31")}
        <br />
        {t("note_p32")}
        <br />
        {t("note_p33")}
        <br />
      </Typography>
      <Typography
        component="div"
        variant="h6"
        sx={{
          fontWeight: 400,
          color: "main",
          paddingRight: "5%",
        }}
      >
        <br />
        {t("title_p4")}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          fontWeight: 400,
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        component="div"
        color="secondary"
      >
        {t("information_required")}
        <br />
        {t("entry_phone_or_email")}
        <br />
        {t("choose_password")}
        <br />
        {t("invitation_code_optional")}
        <br />
        {t("note_1")}
        <br />
        {t("note_2")}
        <br />
        {t("note_3")}
        <br />
        {t("step_1")}
        <br />
      </Typography>
      <Typography
        component="div"
        variant="h6"
        sx={{
          fontWeight: 400,
          color: "main",
          paddingRight: "5%",
        }}
      >
        <br />
        {t("title_p5")}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          fontWeight: 400,
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        component="div"
        color="secondary"
      >
        {t("information_required")}
        <br />
        {t("full_name")}
        <br />
        {t("national_id")}
        <br />
        {t("date_of_birth")}
        <br />
        {t("note")}
        <br />
        {t("step_2")}
        <br />
      </Typography>
      <Typography
        component="div"
        variant="h6"
        sx={{
          fontWeight: 400,
          color: "main",
          paddingRight: "5%",
        }}
      >
        <br />
        {t("title_p6")}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          fontWeight: 400,
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        component="div"
        color="secondary"
      >
        {t("information_required")}
        <br />
        {t("selfie_or_video")}
        <br />
        {t("identification_photo")}
        <br />
        {t("address")}
        <br />
        {t("postal_code")}
        <br />
        {t("id_card_serial_number")}
        <br />
        {t("note_4")}
        <br />
        {t("note_5")}
        <br />
        {t("note_6")}
        <br />
        {t("note_7")}
        <br />
        {t("note_8")}
        <br />
        {t("note_9")}
        <br />
        {t("note_10")}
        <br />
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "main",
          paddingRight: "5%",
        }}
      >
        <br />
        {t("title_p7")}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          paddingTop: "1%",
          fontWeight: 400,
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        component="div"
        color="secondary"
      >
        {t("restriction_1")}
        <br />
        {t("restriction_1_a")}
        <br />
        {t("restriction_1_b")}
        <br />
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "main",
          paddingRight: "5%",
          paddingTop: "1%",
        }}
      >
        <br />
        {t("title_p8")}
        <br />
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          paddingTop: "1%",
          fontWeight: 400,
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        component="div"
        color="secondary"
      >
        {t("account_blocked_conditions")}
        <br />
        {t("condition_1")}
        <br />
        {t("condition_2")}
        <br />
        {t("condition_3")}
        <br />
        {t("condition_4")}
        <br />
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "main",
          paddingRight: "5%",
          paddingTop: "1%",
        }}
      >
        <br />
        {t("title_p9")}
        <br />
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          fontWeight: 400,
          paddingTop: "1%",
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        component="div"
        color="secondary"
      >
        {t("security_enhancement")}
        <br />
        {t("user_death")}
        <br />
        {t("legal_incapacity")}
        <br />
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "main",
          paddingRight: "5%",
          paddingTop: "1%",
        }}
      >
        <br />
        {t("title_p10")}
        <br />
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1.125rem",
            sm: "1.125rem",
            lg: "1.125rem",
            md: "1.1875rem",
            xl: "1.1875rem",
          },
          paddingRight: "5%",
          paddingLeft: "5%",
          paddingTop: "1%",
          fontWeight: 400,
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        component="div"
        color="secondary"
      >
        {t("contact_recommendation")}
        <br />
        {t("legal_dispute")}
        <br />
      </Typography>
    </div>
  );
}
