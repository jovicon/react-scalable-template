import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth: auth ,...rest }) => (
    <Route {...rest} render={(props) => (
      auth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
)

export default PrivateRoute;