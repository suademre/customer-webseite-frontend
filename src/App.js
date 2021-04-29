import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Pages
import LoginPage from "./views/LoginView";
import RegisterPage from "./views/RegisterView";
import AdminView from "./views/admin/AdminView";
import LoadingPageView from "./views/LoadingPageView";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/admin"></Redirect>
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/singup">
          <RegisterPage />
        </Route>
        <Route path="/admin">
          <AdminView />
        </Route>
        <Route path="/loading">
          <LoadingPageView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
