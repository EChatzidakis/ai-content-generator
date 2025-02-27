
interface AuthActions {
  login: (user: User) => void;
  logout: () => void;
}

const login = async (user: User) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'LOGIN', payload: user });
  };
}