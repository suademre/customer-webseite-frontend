import React, { useState } from "react";
import { Col, Label, Input, FormGroup } from "reactstrap";

function PasswordForm(props) {
  let { data, setData } = props;
  /* const [hata, setHata] = useState(""); */
  return (
    <>
      <h4>Password</h4>

      <FormGroup as={Col} controlId="formGridPassword">
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
      </FormGroup>

      <FormGroup as={Col} controlId="formGridPasswordRepeat">
        <Label>Password Repeat</Label>
        <Input
          type="password"
          placeholder="Password Repeat"
          onChange={(e) => {
            setData({ ...data, passwordRepeat: e.target.value });
          }}
          isInvalid={
            data.passwordRepeat && data.password !== data.passwordRepeat
          }
          
        />
      </FormGroup>
    </>
  );
}

export default PasswordForm;
