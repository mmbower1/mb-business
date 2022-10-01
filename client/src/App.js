import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// containers
import Homepage from "./containers/homepage/Homepage";

// components
import Header from "./components/header/Header";

// styles
import "./App.scss";
import "./scss/App.scss";

// redux
import {
  store,
  // persistor
} from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            {/* <Suspense fallback={<Spinner />}> */}
            <div className="App">
              <Header />
              <Route exact path="/" component={Homepage} />
            </div>
            {/* </Suspense> */}
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
