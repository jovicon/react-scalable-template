import React from 'react';

const useSemiPersistentState = (key, initialState) => {
  console.log(useSemiPersistentState);
  const isMounted = React.useRef(false);

  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      localStorage.setItem(key, value);
    }
  }, [value, key]);

  return [value, setValue];
};

export default useSemiPersistentState;