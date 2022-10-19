import React, { Fragment, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// actions
import { getUserDetails } from "./actions/userActions";

// containers
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Homepage from "./containers/homepage/Homepage";
import Login from "./containers/login/Login";
import Profile from "./containers/profile/Profile";
import Register from "./containers/register/Register";
import Work from "./containers/work/Work";

// components
import Loader from "./components/loader/Loader";
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
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(getUserDetails());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Suspense fallback={<Loader />}>
              <div className="App">
                <Header />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/work" component={Work} />
                <Footer />
              </div>
            </Suspense>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
