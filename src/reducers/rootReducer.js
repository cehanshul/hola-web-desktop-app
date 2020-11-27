const { combineReducers } = require("redux");
const { default: reducer } = require("./userReducer");

const rootReducer = combineReducers({
  user: reducer,
});

export default rootReducer;
