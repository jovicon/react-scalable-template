import React from "react"
import {
  BrowserRouter as Router, 
  Link,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

// reducers
import { authReducer } from './reducer';

// router
import { PrivateRoute } from './router';

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

// debo hacer un custom hook para poder englobar el login

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}



const AuthButton = withRouter(({ history }) => (
  auth.isAuthenticated
    ? <p>
        Welcome! <button onClick={() => {
          auth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    : <p>You are not logged in.</p>
))

export const App = () => {
  const [auth, dispatchAuth] = React.useReducer(
    authReducer,
    { data: [], isAuthenticated: false, isLoading: false, isError: false }
  );

  return (
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
        
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path='/protected' auth={auth} component={Protected}  />
      </div>
    </Router>
  )
}

export default App;
