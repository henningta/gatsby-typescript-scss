import React from 'react';
import { Helmet } from 'react-helmet';

import './Page.scss';

export type PageProps = {
  title?: string;
};

const Page: React.FC<PageProps> = ({ children, title }) => {
  const suffix = 'Gatsby - TypeScript SCSS';
  const fullTitle = title ? `${title} - ${suffix}` : suffix;

  return (
    <div className="page">
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default Page;
