import React from "react";
import {
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
} from "reactstrap";
/* import ToggleButton from "reactstrap/ToggleButton";
import ToggleButtonGroup from "reactstrap/ToggleButtonGroup"; */
import "bootstrap/dist/css/bootstrap.min.css";
/* import ButtonGroup from "reactstrap/ButtonGroup"; */
/* import { PencilFill, Trash } from "reactstrap-icons"; */
import QuestionsListItem from "../../../components/admin/questions/QuestionsListItem";
import { Link, useRouteMatch } from "react-router-dom";

const QuestionsPage = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Form.Group className="mt-5 mb-5">
        <Row>
          <Form.Label column sm="2">
            Question:
          </Form.Label>
          <Col sm="10">
            <Form.Control as="select">
              <option>Default select dasdadasasdasdasdasdasdas</option>
              <option>Default select</option>
              <option>Default select</option>
              <option>Default select</option>
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>

      <hr />

      <Link to={`${url}/add`}>
        <Button className="mt-4 w-100">Add Question</Button>
      </Link>

      <QuestionsListItem />
    </>
  );
};

export default QuestionsPage;
