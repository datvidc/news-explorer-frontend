// this component can take a component as a prop
// it can also recieve an infinite number of props to pass down
/* function ProtectedRoute({ children, ...rest }) {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  return (
    <Route
      {
      ...rest
      }
      render={() => (currentUser.data.name === true
        ? children
        : <Redirect to="./signin" />)}
    />
  );
}
export default ProtectedRoute;
*/
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() => (props.loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      ))}
    </Route>
  );
}

export default ProtectedRoute;
