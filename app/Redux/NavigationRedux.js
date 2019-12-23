import AppNavigation from '../Navigation/AppNavigation';

const reducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};

export default reducer;
