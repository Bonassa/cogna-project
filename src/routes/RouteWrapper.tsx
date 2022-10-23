
import { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
}

export function RouteWrapper({ isPrivate = false, ...rest } : RouteWrapperProps){
  const { isAuthenticated, loading } = useContext(AuthContext);

  if(loading){
    return(
      <div className='bg-gray-600 h-[100vh] w-[100vw]'>
      </div>
    );
  }

  if(!isAuthenticated && isPrivate){
    return <Redirect to="/" />
  }

  if(isAuthenticated && !isPrivate){
    return <Redirect to="/home" />
  }

  return(
    <Route { ...rest } />
  );
}