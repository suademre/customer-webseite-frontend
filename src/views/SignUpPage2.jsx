import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import CompanyForm from "../components/SignUp/CompanyForm";
import ContactForm from "../components/SignUp/ContactForm";
import PasswordForm from "../components/SignUp/PasswordForm";
import "../config/i18n";
import axios from "axios";

function SignUpPage(props) {
  // Init i18n
  /* const { t, i18n } = useTranslation(); */

  const [page, setPage] = useState(1);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null)
  const formsend = () => {
    axios.post("http://localhost:3100/register", form);
    console.log(form);
  };

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
              className="btn-move-left btn-round"
              color="default"
              variant="primary"
              type="submit"
              onClick={(e) => {
                setPage(page - 1);
              }}
              disabled={page == 1}
            >
              <i className="nc-icon nc-minimal-left"></i>
              Back
            </Button>
            <Button
              className="btn-move-right btn-round"
              color="default"
              className="mx-1 "
              variant="primary"
              type="submit"
              onClick={(e) => {
                if (page == 3) {
                  let data = {
                    email: form.contact.email,
                    password: form.password,
                    passwordRepeat: form.passwordRepeat,
                    contact: form.contact,
                    company: {
                      name: form.name,
                      address: form.address,
                    },
                  };
                  data.password === data.passwordRepeat ? formsend() : setError({type:"password not match",message:"Your password is not match"})

                  /* User.signUpUser(
                    "ada63e98fe50eccb55036d88eda4b2c3709f53c2b65bc0335797067e9a2a5d8b",
                    data
                  ).then((res) => {
                    console.log(res);
                  }); */
                } else {
                  setPage(page + 1);
                }
              }}
            >
              Next <i className="nc-icon nc-minimal-right"></i>
            </Button>
            <span>{error && error.message}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default SignUpPage;
