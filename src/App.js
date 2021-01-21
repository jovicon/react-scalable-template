import React from "react"
import {
  BrowserRouter as Router, 
  Link,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

// components
import { Login } from './components/pages';

// hooks
import { useSemiPersistentState } from './hooks'

// reducers
import { authReducer } from './reducer';

// router
import { PrivateRoute } from './router';

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100) // fake async
//   }
// }


export const App = props => {

  const isAuthenticated = localStorage.getItem('isAuthenticated') ? Boolean(localStorage.getItem('isAuthenticated')) : false;
  const [user, dispatchUser] = React.useReducer(
    authReducer,
    { data: [], isAuthenticated: isAuthenticated, isLoading: false, isError: false }
  );
  console.log(user);
  

  // const [user, setUser] = useSemiPersistentState(
  //   'user',
  //   { isAuthenticated: false, data: [] }
  // );

  const handleSignIn = event => {
    console.log("handleSignIn: ", event);
  }

  return (
    <Router>
      <div>

        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>

        {/* <Redirect exact from="/" to="/login" /> */}
        <Route path="/public" component={Public} />
        <Route path="/login" user={user} component={Login} />
        
        {/* <Route>
          <Login 
            path="/login"
            onSignIn={loginstatus => {console.log(loginstatus)}}  
          />
        </Route> */}

        <PrivateRoute path='/protected' auth={user} component={Protected}  />
      </div>
    </Router>
  )
}

export default App;
