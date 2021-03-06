import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { persistor } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="loading..." persistor={persistor}>
        <BrowserRouter>
        {/* <HashRouter> */}
          <App />
        {/* </HashRouter> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
