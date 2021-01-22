import React from "react"
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from 'react-router-dom'

import { Login } from './components/pages';
import { useSemiPersistentState } from './hooks';
import { PrivateRoute } from './router';

import { store } from "./store";

const Public = () => <h3>Public</h3>
const ProtectedOne = () => <h3>Protected 1</h3>
const ProtectedTwo = () => <h3>Protected 2</h3>

// Protected Example
const Protected = props => {
  const pathOne = `${props.match.path}/one`;
  const pathTwo = `${props.match.path}/two`;
  return (
    <>
      <Route path={pathOne} component={ProtectedOne}/>
      <Route path={pathTwo} component={ProtectedTwo}/>
    </>
  );
}

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>

          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/public">Public Page</Link></li>
            <li><Link to="/app/one">Protected Page One</Link></li>
            <li><Link to="/app/two">Protected Page Two</Link></li>
          </ul>

          <Redirect exact from="/" to="/login" />

          <Route path="/public" component={Public}/>

          <Route path="/login" component={Login} />

          <PrivateRoute path='/app' component={Protected}/>

        </div>
      </Router>
    </Provider>
  )
}

export default App;
