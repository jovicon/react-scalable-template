import { Route, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth: auth , ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      auth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )
} 

const mapStateToProps = state => {
  const { auth } = state;
  return {
    auth
  };
};

export default connect(
  mapStateToProps,
)(PrivateRoute);
