const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";
const LOGOUT = "LOGOUT";
const ALL_CONTACTS = "ALL_CONTACTS";

const iniState = {
  contacts: [],
  myinfo: {
    logged: false,
    avatar: "",
  },
};

const reducer = (state = iniState, action) => {
  if (action.type === ALL_CONTACTS) {
    return {
      ...state,
      freinds: action.data,
    };
  } else if (action.type === LOGIN) {
    return {
      ...state,
      myinfo: {
        ...action.data,
      },
    };
  } else if (action.type === LOGOUT) {
    return iniState;
  }
  return state;
};

export default reducer;
