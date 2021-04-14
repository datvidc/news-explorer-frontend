import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';

// this component can take a component as a prop
// it can also recieve an infinite number of props to pass down
function ProtectedRoute({ component: Component, ...props }) {
  const user = useContext(CurrentUserContext);
  console.log(user);
  const whatToDo = user ? <Component {...props} /> : <Redirect to="/" />;

  return (
    <Route>
      { whatToDo}
    </Route>
  );
}

export default ProtectedRoute;
