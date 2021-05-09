import CompanyForm from "components/SignUp/CompanyForm";
import ContactForm from "components/SignUp/ContactForm";
import PasswordForm from "components/SignUp/PasswordForm";
import React from "react";

function SignUp() {
  return (
    <div>
      <CompanyForm />
      <ContactForm />
      <PasswordForm />
    </div>
  );
}

export default SignUp;
