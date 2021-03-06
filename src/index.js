import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//import reducers from "./Reducers";

import App from "./Components/App";

//const store = createStore(reducers, applyMiddleware(thunk));
const store = createStore(()=>{});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
