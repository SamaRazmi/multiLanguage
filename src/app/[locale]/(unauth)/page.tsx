import { getTranslations } from 'next-intl/server';
import {Box, Button} from "@mui/material";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <Box>
      <Button>Hello world</Button>
    </Box>
  );
}
