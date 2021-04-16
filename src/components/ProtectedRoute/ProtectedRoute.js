import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';

const ProtectedRoute = (props) => {
  const user = useContext(CurrentUserContext);

  const redirectAction = () => {
    if (user) {
      return <>{props.children}</>;
    }
    return <>{props.children}</>;
  };

  return (
    <Route>
      {redirectAction}
    </Route>
  );
};

export default ProtectedRoute;
