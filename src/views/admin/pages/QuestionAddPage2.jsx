import React, { useState } from "react";
import Select from "react-select";
import {
  Row,
  Col,
  Container,
  Label,
  Form,
  FormGroup,
  Input,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
} from "reactstrap";

import TagsInput from "components/TagsInput/TagsInput.js";

const initialAddQuestions = {
  category: null,
  question: "",
  answers: [],
  isMultiple: false,
};

function QuestionAddPage2() {
  const [addQuestions, setAddQuestions] = useState(initialAddQuestions);

  /* cosnt [ismultiple, setIsmultiple] = useState(false); */

  console.log(addQuestions);

  return (
    <>
      <Container className="mt-5">
        <Label>
          Bitte wählen Sie die Kategorie aus, in der Sie Ihre Frage stellen
          möchten.{" "}
        </Label>
        <Row className="mt-3">
          <br />
          <Col lg="5" md="6" sm="3">
            <Select
              className="react-select react-select-primary"
              classNamePrefix="react-select"
              name="singleSelect"
              value={addQuestions.category}
              onChange={(e) => {
                setAddQuestions({ ...addQuestions, category: e });
              }}
              options={[
                {
                  value: "",
                  label: "Single Option",
                  isDisabled: true,
                },
                { value: "2", label: "Web Seite" },
                { value: "3", label: "Application" },
                { value: "4", label: "Data Analyst" },
              ]}
              placeholder="Single Select"
            />
          </Col>
        </Row>

        <FormGroup>
          <label htmlFor="exampleFormControlTextarea1">Question</label>
          <Input
            id="exampleFormControlTextarea1"
            rows="3"
            value={addQuestions.question}
            onChange={(e) => {
              setAddQuestions({ ...addQuestions, question: e.target.value });
            }}
          ></Input>
        </FormGroup>

        <label htmlFor="exampleFormControlTextarea1">
          Bitte Geben Sie Antworten
        </label>
        <br />
        <FormGroup check>
          <Label check>
            <Input
              checked={addQuestions.isMultiple}
              type="checkbox"
              onChange={(e) =>
                setAddQuestions({
                  ...addQuestions,
                  isMultiple: e.target.checked,
                })
              }
            ></Input>
            Kann mann multiple wählen <span className="form-check-sign"></span>
          </Label>
        </FormGroup>

        <Button
          className="btn-just-icon"
          color="primary"
          onClick={() => {
            setAddQuestions({
              ...addQuestions,
              answers: [
                ...addQuestions.answers,
                { value: null, text: null, days: null, cost: null },
              ],
            });
          }}
        >
          <i className="fa fa-plus"></i>
        </Button>
        <div style={{ width: "100%", overflow: "auto" }}>
          {addQuestions.answers.map((answer, index) => {
            return (
              <Card
                className="mt-4"
                style={{ width: "20rem", float: "left", margin: "10px" }}
                sm={4}
              >
                <CardBody>
                  <CardTitle>Answer {index + 1}</CardTitle>

                  <FormGroup>
                    <label htmlFor="exampleFormControlTextarea1">text</label>
                    <Input
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={addQuestions.answers[index].text}
                      onChange={(e) => {
                        setAddQuestions({
                          ...addQuestions,
                          answers: addQuestions.answers.map((answer, i) => ({
                            ...answer,
                            text: i === index ? e.target.value : answer.text,
                          })),
                        });
                      }}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleFormControlTextarea1">Cost</label>
                    <Input
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={addQuestions.answers[index].cost}
                      onChange={(e) => {
                        setAddQuestions({
                          ...addQuestions,
                          answers: addQuestions.answers.map((answer, i) => ({
                            ...answer,
                            cost: i === index ? e.target.value : answer.cost,
                          })),
                        });
                      }}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleFormControlTextarea1">Days</label>
                    <Input
                      id="exampleFormControlTextarea1"
                      rows="3"
                      type="number"
                      value={addQuestions.answers[index].days}
                      onChange={(e) => {
                        setAddQuestions({
                          ...addQuestions,
                          answers: addQuestions.answers.map((answer, i) => ({
                            ...answer,
                            days:
                              i === index
                                ? parseInt(e.target.value)
                                : answer.days,
                          })),
                        });
                      }}
                    ></Input>
                  </FormGroup>
                  <CardFooter>
                    <Button
                      className="btn-just-icon"
                      color="primary"
                      onClick={() => {
                        setAddQuestions({
                          ...addQuestions,
                          answers: addQuestions.answers.filter(
                            (_, i) => i !== index
                          ),
                        });
                      }}
                    >
                      <i className="fa fa-minus"></i>
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <br />

        <Button
          className="btn-move-right btn-round mt-5"
          color="danger"
          onClick={() => {
            setAddQuestions(initialAddQuestions);
          }}
        >
          Next <i className="nc-icon nc-minimal-right"></i>
        </Button>
      </Container>
    </>
  );
}

export default QuestionAddPage2;
