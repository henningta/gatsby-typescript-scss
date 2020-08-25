import React from 'react';

import './App.scss';

const App: React.FC = ({ children }) => {
  return <div className="app">{children}</div>;
};

export default App;
