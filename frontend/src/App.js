import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import PetsPage from "./components/PetsPage";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import * as sessionActions from "./store/session";
import SignupFormModal from "./components/SignupFormModal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  console.log(isLoaded, 'isLoaded')

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormModal />
          </Route>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/pets">
            <PetsPage />
          </Route>
          <Route path="/users/:userId">
            <ProfilePage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
