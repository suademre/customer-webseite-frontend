import React, { useState } from "react";
import {
  Link,
  useRouteMatch,
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  withRouter,
} from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import User from "../../models/user";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  UncontrolledCollapse,
  NavLink,
  FormGroup,
  Input,
  Modal,
} from "reactstrap";
import AdminView from "views/admin/AdminView";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authSlice";
// core components

function WhiteNavbar(props) {
  //path
  let { path, url } = useRouteMatch("");

  const [loginModal, setLoginModal] = React.useState(false);
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { match, location, history } = props;

  const dispatch = useDispatch();

  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className="fixed-top pt-4"
        expand="lg"
        id="navbar-main"
        style={{ backgroundColor: "#EEEFF2", boxShadow: "none" }}
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              className="mr-4"
              to="/index"
              tag={Link}
            >
              <img
                style={{ width: "138px" }}
                src="https://ui8-solo-saas.herokuapp.com/img/logo-dark.png"
                alt=""
              />
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Paper Kit PRO React
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navbarNavDropdown"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="d-flex w-100" navbar>
              <NavItem className="active px-2">
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className=" px-2">
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Features
                </NavLink>
              </NavItem>
              <NavItem className=" px-2">
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem className=" px-2">
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem className=" px-2">
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Pricing
                </NavLink>
              </NavItem>

              <NavItem className=" ml-lg-auto">
                <Button
                  className="btn ml-auto"
                  color="info"
                  target="_blank"
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  <i className="" /> Register
                </Button>

                <Button
                  className="btn ml-auto"
                  onClick={() => setLoginModal(true)}
                  color="primary"
                  /* href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-white-navbar" */
                  target="_blank"
                >
                  <i className="" /> Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        isOpen={loginModal}
        toggle={() => setLoginModal(false)}
        modalClassName="modal-register"
      >
        <div className="modal-header no-border-header text-center">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLoginModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <h6 className="text-muted">Welcome</h6>
          <h3 className="modal-title text-center">Paper Kitttt</h3>
          <p>Log in to your account</p>
        </div>
        <div className="modal-body">
          <FormGroup>
            <label>Email</label>
            <Input
              defaultValue=""
              placeholder="Email"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <Input
              defaultValue=""
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormGroup>
          <Button
            block
            className="btn"
            color="primary"
            onClick={() => {
              console.log(email, password);
              axios
                .post("http://localhost:3100/login", { email, password })
                .then((res) => {
                  dispatch(login(res.data));
                });
              /*User.loginWithEmailAndPassword(email, password).then((res) => {
                console.log(res);
                if (res.user_type === "user") {
                  history.push("/admin/dashboard");
                }
              });*/
            }}
          >
            Log in
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default withRouter(WhiteNavbar);
