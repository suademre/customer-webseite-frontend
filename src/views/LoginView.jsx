import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../config/i18n";
import User from "../models/user";

function LoginView(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // Init i18n
  const { t, i18n } = useTranslation();

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-md-center h-100">
        <Col className=" my-auto">
          <Form className="w-50 mx-auto">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>{t("email.label")}</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">{t("never.label")}</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>{t("password.label")}</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => {
                console.log(email);
                User.loginWithEmailAndPassword(email, password).then((res) => {
                  console.log("res : ", res);
                  if (res === "auth/user-not-found") {
                    setError("Mail adresiniz kayitli degil");
                  }
                });
              }}
            >
              {t("submit.label")}
            </Button>
            <Link to="/singup">Register</Link>
          </Form>
          <Col>
            <p>{error}</p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginView;
