import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';

const ProtectedRoute = (props) => {
  const user = useContext(CurrentUserContext);
  const routeProtection = () => {
    if (user) {
      return <>{props.children}</>;
    }
    props.signmeup();
    return <Redirect to="/" />;
  };

  return (
    <Route>
      {routeProtection}
    </Route>
  );
};

export default ProtectedRoute;
