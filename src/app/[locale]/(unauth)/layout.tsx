import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('About');

  return <Box>{props.children}</Box>;
}
