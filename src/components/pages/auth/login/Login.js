import React from "react";import {
  Redirect,
  withRouter
} from 'react-router-dom'

const Login =  ({ ...props })  => {
  // console.log('Login: ', props);
  // console.log('Login: ', onSignIn);
  const user = {...props};

  // const { from } = props.location.state || { from: { pathname: '/' } }
  const [loginState, setLoginState] = React.useState(
    {
      redirectToReferrer: false
    }
  );

  const AuthButton = withRouter(({ history }) => (
    user.isAuthenticated
      ? <p>
          Welcome! <button onClick={() => {
            handleSignIn(() => history.push('/'))
          }}>Sign out</button>
        </p>
      : <p>You are not logged in.</p>
  ))

  const handleSignIn = () => {
    console.log("handleSignIn");
    setLoginState({redirectToReferrer: true});
    localStorage.setItem('isAuthenticated',true);
    props.history.push("/protected");
  }

  const handleSignOut = () => {
    console.log("handleSignOut");
    setLoginState({redirectToReferrer: false});
    localStorage.setItem('isAuthenticated',false);
    props.history.push("/login");
  }

  // // if (loginState.redirectToReferrer === true) {
  // //   return <Redirect to={from} />
  // // }

  return (
    <div>
      <AuthButton />

      <p>You must log in to view the page</p>

      {/* insertar formulario de loggeo aqui */}
      <button onClick={handleSignIn}>Log in</button>
    </div>
  );
}

export default Login;