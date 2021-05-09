import React from "react";
import { Input, FormGroup, Label } from "reactstrap";

function CompanyForm(props) {
  let { data, setData } = props;
  return (
    <>
      <h2>Company Details</h2>

      <FormGroup controlId="formGridFirmaName">
        <Label>Firma Name</Label>
        <Input
          type="text"
          placeholder="Enter Firma Name"
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
      </FormGroup>

      <h4>Adress</h4>

      <FormGroup controlId="formGridAddress1">
        <Label>Street and No</Label>
        <Input
          placeholder="1234 Main St"
          value={data.address?.street_and_no}
          onChange={(e) => {
            setData({
              ...data,
              address: { ...data.address, street_and_no: e.target.value },
            });
          }}
        />
      </FormGroup>

      <FormGroup controlId="formGridZip">
        <Label>Zip</Label>
        <Input
          placeholder="Zip Code"
          value={data.address?.zip_code}
          onChange={(e) => {
            setData({
              ...data,
              address: { ...data.address, zip_code: e.target.value },
            });
          }}
        />
      </FormGroup>

      <FormGroup controlId="formGridCity">
        <Label>City</Label>
        <Input
          value={data.address?.city}
          onChange={(e) => {
            setData({
              ...data,
              address: { ...data.address, city: e.target.value },
            });
          }}
        />
      </FormGroup>

      <FormGroup controlId="formGridState">
        <Label>State</Label>
        <Input
          placeholder="Choose your State"
          value={data.address?.state}
          onChange={(e) => {
            setData({
              ...data,
              address: { ...data.address, state: e.target.value },
            });
          }}
        />
      </FormGroup>

      <FormGroup controlId="formGridCountry">
        <Label>Country</Label>
        <Input
          value={data.address?.country}
          onChange={(e) => {
            setData({
              ...data,
              address: { ...data.address, country: e.target.value },
            });
          }}
        />
      </FormGroup>
    </>
  );
}

export default CompanyForm;
