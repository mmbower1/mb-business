import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// containers
import About from "./containers/about/About";
import Homepage from "./containers/homepage/Homepage";
import Work from "./containers/work/Work";

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
              <Route exact path="/about" component={About} />
              <Route exact path="/work" component={Work} />
              <Footer />
            </div>
            {/* </Suspense> */}
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
