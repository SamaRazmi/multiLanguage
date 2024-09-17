import { useTranslations } from 'next-intl';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return <div>{props.children}</div>;
};

export { BaseTemplate };
