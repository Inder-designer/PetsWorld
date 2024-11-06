import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import Loading from '../components/Loading';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = Cookies.get('token');
      
      // Function to parse expiration date from cookie string
      const parseCookieExpiration = (cookieStr) => {
          const parts = cookieStr.split(';');
          for (let part of parts) {
              part = part.trim();
              if (part.startsWith('Expires=')) {
                  const expiresStr = part.substring('Expires='.length);
                  return new Date(expiresStr);
              }
          }
          return null;
      };

      if (token) {
          const cookieExpires = parseCookieExpiration(Cookies.get('token'));
          if (cookieExpires && cookieExpires < new Date()) {
              // Token cookie expired, remove cookie
              Cookies.remove('token');
          }
      }

      // Set loading state to false after initial check
      setLoading(false);
  }, []);
  
    if (loading || isLoading) {
      return <Loading/>
    }

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" state={{ from: window.location.pathname }} />;
    }

    return children;
};

export default ProtectedRoute;