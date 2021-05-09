import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CompanyForm from "../components/signup/CompanyForm";
import ContactForm from "../components/signup/ContactForm";
import PasswordForm from "../components/signup/PasswordForm";
import "../config/i18n";
import User from "../models/user";

function RegisterView(props) {
  // Init i18n
  const { t, i18n } = useTranslation();

  const [page, setPage] = useState(1);
  const [form, setForm] = useState({});

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-md-center h-100">
        <Col className=" my-auto">
          <div className="w-50 mx-auto">
            {page == 1 && <CompanyForm data={form} setData={setForm} />}
            {page == 2 && <ContactForm data={form} setData={setForm} />}
            {page == 3 && <PasswordForm data={form} setData={setForm} />}
            {console.log(form)}
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                setPage(page - 1);
              }}
              disabled={page == 1}
            >
              Geri
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                if (page == 3) {
                  let data = {
                    email: form.contact.email,
                    password: form.password,
                    contact: form.contact,
                    company: {
                      name: form.name,
                      address: form.address,
                    },
                  };
                  User.signUpUser(
                    "ada63e98fe50eccb55036d88eda4b2c3709f53c2b65bc0335797067e9a2a5d8b",
                    data
                  ).then((res) => {
                    console.log(res);
                  });
                } else {
                  setPage(page + 1);
                }
              }}
            >
              Ileri
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default RegisterView;
