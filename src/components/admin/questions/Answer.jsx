import React from "react";
/* import { Form, Col, Row, InputGroup, FormControl } from "reactstrap"; */

import MultiCurrencyField from "./MultiCurrencyField";
import IconSelector from "./IconSelector";
import MultiLanguageText from "./MultiLanguageText";

//reactstrap
import {
  InputGroupAddon,
  InputGroupText,
  Input,
  Col,
  Row,
  InputGroup,
  Form,
} from "reactstrap";

function Answers(props) {
  const { data, setData } = props;

  return (
    <>
      <h4>Antwort</h4>
      <MultiLanguageText
        data={data.text ?? {}}
        setData={(text) => {
          setData({ ...data, text });
        }}
        langs={["de", "en"]}
      />

      <IconSelector data={data} setData={setData} />

      <Row>
        <Col>
          <h5>Kost</h5>
          <MultiCurrencyField
            data={data.cost ?? {}}
            setData={(cost) => {
              setData({ ...data, cost });
            }}
            currencies={["eur", "usd"]}
          />
        </Col>
        <Col>
          <h5>Tag</h5>
          <InputGroup className="mb-3 mt-5">
            <Input
              placeholder="Bitte geben Sie die Tage"
              type="number"
              onChange={(e) => {
                setData({ ...data, days: parseFloat(e.target.value) });
              }}
              isInvalid={data.days <= 0}
            />

            <Form.Control.Feedback type="invalid">
              Bitte geben Sie eine Zahl größer als Null ein
            </Form.Control.Feedback>
            <InputGroup.Append>
              <InputGroup.Text>Tage</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <h5>Nächste Frage</h5>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Control
            as="select"
            custom
            onChange={(e) => {
              setData({ ...data, next: e.target.value });
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
      <h5>Antrag</h5>

      <MultiLanguageText
        data={data.contract ?? {}}
        setData={(contract) => {
          setData({ ...data, contract });
        }}
        langs={["de", "en"]}
      />
    </>
  );
}

export default Answers;
