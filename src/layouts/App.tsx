import React from 'react';

import 'styles/layouts/App.scss';

const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="app">{children}</div>;
};

export default App;
