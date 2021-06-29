/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from "react"
import { useDispatch } from "react-redux";

// manejar todos los estados aca
export const handleLogin = () => {
	try {
		const dispatch = useDispatch();

		const _handleSignIn = useCallback( () => {
			dispatch({ type: "AUTH_LOGIN_SUCCESS" });
		}, [dispatch]);

		return {
			handleSignIn: _handleSignIn,
		}
	}
	catch (error) {
	// handle error notification here
	// dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
	}
};
