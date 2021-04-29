import React from "react";
import { Col, Input, FormGroup, Label } from "reactstrap";

function ContactForm(props) {
  let { data, setData } = props;

  return (
    <>
      <h4>Contact</h4>

      <FormGroup as={Col} controlId="formGridName">
        <Label>Name</Label>
        <Input
          type="name"
          placeholder="Enter Name"
          value={data.contact?.name}
          onChange={(e) => {
            setData({
              ...data,
              contact: { ...data.contact, name: e.target.value },
            });
          }}
        />
      </FormGroup>

      <FormGroup as={Col} controlId="formGridEmail">
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email"
          value={data.contact?.email}
          onChange={(e) => {
            setData({
              ...data,
              contact: { ...data.contact, email: e.target.value },
            });
          }}
        />
      </FormGroup>

      <FormGroup as={Col} controlId="formGridTelNo">
        <Label>Telefon Nummer</Label>
        <Input
          placeholder="Firma Nummer"
          value={data.contact?.tel}
          onChange={(e) => {
            setData({
              ...data,
              contact: { ...data.contact, tel: e.target.value },
            });
          }}
        />
      </FormGroup>

      <FormGroup as={Col} controlId="formGridMobileNo">
        <Label>Mobile Nummer</Label>
        <Input
          placeholder="Mobile Nummer"
          value={data.contact?.mobile}
          onChange={(e) => {
            setData({
              ...data,
              contact: { ...data.contact, mobile: e.target.value },
            });
          }}
        />
      </FormGroup>

      <FormGroup as={Col} controlId="formGridFax">
        <Label>Fax</Label>
        <Input
          placeholder="Fax"
          value={data.contact?.fax}
          onChange={(e) => {
            setData({
              ...data,
              contact: { ...data.contact, fax: e.target.value },
            });
          }}
        />
      </FormGroup>
    </>
  );
}

export default ContactForm;
