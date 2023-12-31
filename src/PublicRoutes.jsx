import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PublicRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('persist:root');
    const userObject = JSON.parse(userLocalStorage);
    const user = userObject ? JSON.parse(userObject.user) : null;
    const isSuccess = user?.isSuccess;

    if (isSuccess) {
      // Redirect to dashboard page if isSuccess is true
      navigate('/dashboard');
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default PublicRoutes;