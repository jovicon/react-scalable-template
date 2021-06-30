import React, {useState, useEffect} from "react";
import { Redirect, withRouter } from 'react-router-dom';
import { useAsync } from "react-async"
import { connect } from "react-redux";
import usePromise from 'react-promise';

import {
  mapStateToProps,
  mapDispatchToProps
} from '../../../../reducer/shared/loginHandlers';

import {
  handleLogin
} from '../../../../hooks/auth/login';

import {
  FirstBlog
} from '../../../organisms/Blog/index';

// unir todo en el hook
const Login = withRouter(({ history, auth, s3, ...props })  => {
  // const { handleSignInDispatch, handleSignOutDispatch } = props;
  const { handleSignOutDispatch, handleNotActiveDispatch, handleActiveDispatch } = props;
  const { handleSignIn } = handleLogin();

  const s3Data = usePromise(s3)

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
            handleSignOutDispatch();
            history.push('/login');
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

      {/* S3 status manager */}

      <br/>
      { 
        `${s3Data.loading ? 'Cargando' : s3Data.value?.status}`
      } 
      <br/>

      <button onClick={() => {
        handleActiveDispatch();
        history.push('/login');
      }}>Active s3 status</button>

      <br/>
      <button onClick={() => {
        handleNotActiveDispatch();
          history.push('/login');
      }}>deactivate s3 status</button>

      {/* <AuthButton /> */}
    </div>
  );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);