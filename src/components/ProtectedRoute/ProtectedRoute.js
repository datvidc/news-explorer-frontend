import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// this component can take a component as a prop
// it can also recieve an infinite number of props to pass down
function ProtectedRoute(props) {
  const { component: Component, ...prop } = props;
  console.log(props.loggedIn);

  console.log(props.Component);
  console.log(props.loggedIn);
  console.log(props.mainPage);
  console.log(props.handleLogout);
  console.log(props.device);
  console.log(props.knownUser);
  console.log(props.articleResults);
  console.log(props.userInfo);
  console.log(props.toogleMobNav);
  console.log(props.articles);
  console.log(props.isMain);

  return (
    <Route>
      {
        () => (props.loggedIn ? <Component {...prop} /> : <Redirect to="./" />)
      }
    </Route>
  );
}

export default ProtectedRoute;
