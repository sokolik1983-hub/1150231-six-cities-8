import {Route, Redirect, RouteProps} from 'react-router-dom';
import {FC} from 'react';


type PrivateRouteProps = RouteProps & {
  authorizationStatus: boolean,
  path: string,
  exact: boolean,
  Component: FC
}

function PrivateRoute(props : PrivateRouteProps): JSX.Element {

  const {exact, path, authorizationStatus, Component} = props;

  return (
    <Route exact={exact} path={path} render={(items: RouteProps) =>
    {if (authorizationStatus && Component)
    {
      return (<Component {...items} />);
    }
    return (<Redirect to={'/login'}/>);
    }}
    />
  );
}

export default PrivateRoute;
