import { Route, Switch } from "react-router-dom";
//Components:
import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import AllKitchenRecipes from "./AllKitchenRecipes";
import AllTrainigExercises from "./AllTrainingExercises";
import MyKitchenRecipes from "./MyKitchenRecipes";
import MyTrainingExercises from "./MyTrainingExercises";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header>
            <Route path="/login">
              <Login
                loginErrorMessage={loginErrorMessage}
                sendLoginToApi={sendLoginToApi}
              />
            </Route>
            <Route path="/signup">
              <SignUp
                signUpErrorMessage={signUpErrorMessage}
                sendSingUpToApi={sendSingUpToApi}
              />
            </Route>
            <Route path="/profile">
              <Profile
                userName={userName}
                userEmail={userEmail}
                userPassword={userPassword}
                sendProfileToApi={sendProfileToApi}
              />
            </Route>
          </Header>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
