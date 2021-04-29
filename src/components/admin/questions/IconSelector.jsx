import React, { useState } from "react";
/* import {
  Form,
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Col,
} from "reactstrap";
import * as Icon from "reactstrap-icons"; */
import Select from "react-select";
import { Row, Col } from "reactstrap";

function IconSelector(props) {
  const { data, setData } = props;
  const [singleSelect, setSingleSelect] = useState;
  return (
    <>
      <Row>
        <Col lg="5" md="6" sm="3">
          <Select
            className="react-select react-select-primary"
            classNamePrefix="react-select"
            name="singleSelect"
            value={singleSelect}
            onChange={(value) => setSingleSelect(value)}
            options={[
              {
                value: "",
                label: "Single Option",
                isDisabled: true,
              },
              { value: "2", label: "Foobar" },
              { value: "3", label: "Is great" },
            ]}
            placeholder="Single Select"
          />
        </Col>
      </Row>
      {/* <Container>
        <h5>Icon</h5>
        <Row>
          <Col md={2}>
            <div className="mx-auto mt-3">
              <p>Icon</p>
            </div>
          </Col>
          <Col md={10}>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Icon Select</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  onChange={(e) => {
                    setData({ ...data, icon: e.target.value });
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default IconSelector;
