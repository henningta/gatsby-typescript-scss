import React from 'react';
import { Helmet } from 'react-helmet';

import './PageContainer.scss';

export type PageContainerProps = {
  title?: string;
};

const PageContainer: React.FC<PageContainerProps> = ({ children, title }) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>{title || 'Gatsby - TypeScript SCSS'}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default PageContainer;
