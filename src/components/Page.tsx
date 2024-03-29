import React from 'react';
import clsx from 'clsx';
import { Helmet } from 'react-helmet';

import 'styles/components/Page.scss';

export type PageProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
};

const Page: React.FC<PageProps> = ({ children, title, className }) => {
  const suffix = 'Gatsby - TypeScript/Scss';
  const fullTitle = title ? `${title} - ${suffix}` : suffix;

  return (
    <div className={clsx('page', className)}>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default Page;
