import { Nav, Col, Container, NavItem, NavLink } from "reactstrap";
import { withRouter } from "react-router-dom";
import { useRouteMatch, Link } from "react-router-dom";

// Styles
import "../../styles/admin/sidebar.css";

function Sidebar() {
  let { path, url } = useRouteMatch();
  console.log(url);

  return (
    <>
      <Container className="pl-2 pr-0 my-2">
        <Nav
          className="col-md-12 d-none d-md-block bg-light sidebar pl-4 "
          activeKey="/home"
        >
          <div className="sidebar-sticky"></div>

          <NavItem>
            <Link to={`${url}/dashboard`}>Dashboard</Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/users`}>Users</Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/questions`}>Questions</Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/requests`}>Requests</Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/settings`}>Settings</Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/categories`}>Categories</Link>
          </NavItem>
        </Nav>
      </Container>
    </>
  );
}

export default withRouter(Sidebar);
