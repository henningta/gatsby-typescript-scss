import { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  useEffect(() => {
    void navigate('/');
  }, []);

  return null;
};

export default NotFoundPage;
