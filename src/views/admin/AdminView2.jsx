/* import { Container, Row, Col, Card, Form, Button } from "reactstrap"; */
import Sidebar from "../../components/admin/Sidebar";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import QuestionsPage from "./pages/QuestionsPage";
import RequestsPage from "./pages/RequestsPage";
import SettingsPage from "./pages/SettingsPage";
import QuestionAddPage2 from "./pages/QuestionAddPage2";
/* import NavBar from "../../components/admin/NavBar"; */

//reactstzrap
import { Container, Row, Col} from "reactstrap";
import CategoryAddPage from "./pages/CategoryAddPage";

function AdminView() {
  let { path } = useRouteMatch();

  return (
    <>
      <Container fluid className="pr-0">
        <Row>
          <Col xs={2} id="sidebar-wrapper" className="pr-0 d-none d-md-block">
            <Sidebar />
          </Col>

          <Col xs={10} id="page-content-wrapper" className="px-0">
            {/* <NavBar /> */}
            <Container>
              <Switch>
                <Route exact path={`${path}/dashboard`}>
                  <h3>Please select a topic.</h3>
                </Route>
                <Route exact path={`${path}/users`}>
                  <UsersPage />
                </Route>
                <Route exact path={`${path}/questions`}>
                  <QuestionsPage />
                </Route>
                <Route exact path={`${path}/questions/add`}>
                  <QuestionAddPage2 />
                </Route>
                <Route exact path={`${path}/requests`}>
                  <RequestsPage />
                </Route>
                <Route exact path={`${path}/settings`}>
                  <SettingsPage />
                </Route>
                <Route exact path={`${path}/categories`}>
                  <CategoryAddPage />
                </Route>
              </Switch>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminView;
