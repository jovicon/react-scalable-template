import React from "react";
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import {
  mapStateToProps,
  mapDispatchToProps
} from '../../../../reducer/handlers/auth';

import {
  FirstBlog
} from '../../../organisms/Blog/index';

const Login =  withRouter(({ history, auth, ...props })  => {
  const user = {props};
  const { handleSignIn, handleSignOut } = props;

  // const AuthButton = withRouter(({ history }) => (
  //   auth.isAuthenticated
  //   ? <p>
  //       Welcome! <button onClick={() => {
  //         handleSignOut();
  //         history.push('/login')
  //       }}>Sign out</button>
  //     </p>
  //   : <div>
  //       <p>
  //         You are not logged in.
  //       </p>
  //       <p>
  //         You must log in to view the page
  //       </p>
  //       <button onClick={handleSignIn}>Log in</button>
  //     </div>
  // ));

  return (
    <div>
      { auth.isAuthenticated ?
        <p>
          Welcome! <button onClick={() => {
            handleSignOut();
            history.push('/login')
          }}>Sign out</button>

          <FirstBlog/>
        </p> 
        : 
        <div>
          <p>
            You are not logged in.
          </p>
          <p>
            You must log in to view the page
          </p>
          <button onClick={handleSignIn}>Log in</button>
        </div>
      }
      {/* <AuthButton /> */}
    </div>
  );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);