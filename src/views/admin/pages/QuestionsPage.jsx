import React from "react";
/* import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Form,
  Button,
  Input,
  Col,
  Row,
  Card,
} from "reactstrap"; */
/* import ToggleButton from "reactstrap/ToggleButton";
import ToggleButtonGroup from "reactstrap/ToggleButtonGroup"; */
import "bootstrap/dist/css/bootstrap.min.css";
/* import ButtonGroup from "reactstrap/ButtonGroup"; */
/* import { PencilFill, Trash } from "react-bootstrap-icons"; */
import QuestionsListItem from "../../../components/admin/questions/QuestionsListItem";
import { Link, useRouteMatch } from "react-router-dom";

import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  FormGroup,
  Form,
  Button,
  Input,
  Col,
  Row,
  Card,
  Label,
} from "reactstrap";

const QuestionsPage = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <FormGroup className="mt-5 mb-5">
        <Row>
          <Label column sm="2">
            Question:
          </Label>
          <Col sm="10">
            <FormGroup>
              <label htmlFor="exampleFormControlSelect1">
                Exampleee select
              </label>
              <Input id="exampleFormControlSelect1" type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>

      <hr />

      <Link to={`${url}/add`}>
        <Button className="mt-4 w-100">Add Question</Button>
      </Link>

      <hr />

      <QuestionsListItem />
    </>
  );
};

export default QuestionsPage;
