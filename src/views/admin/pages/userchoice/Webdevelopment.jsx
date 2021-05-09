import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";

function Webdevelopment() {
  const [webs, setWebs] = useState([]);
  const [days, setDays] = useState("");
  const [cost, setCost] = useState("");
  const [answer, setAnswer] = useState([]);
  const [selectedList, setSelectdList] = useState([]);

  useEffect(() => {
    const [cost, days, answer] = getCostandDays();
    setDays(days);
    setCost(cost);
    setAnswer(answer);
    console.log(cost, days);
  }, [selectedList]);

  useEffect(() => {
    axios("http://localhost:3100/admin/questions")
      .then((res) => {
        let webApplication = res.data.filter(
          (question) => question.category_id.title === "Web Developer"
        );
        console.log(webApplication);
        setWebs(webApplication);

        let sonuc = webApplication.map((question) => ({
          question: question.question,
          answers: question.answers.map((answer) => ({
            text: answer.text,
            isSelected: false,
          })),
        }));
        setSelectdList(sonuc);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {webs.map((question, index) => (
        <Card className="ml-5 mt-5" style={{ width: "20rem" }}>
          <CardBody>
            <CardText>Answers</CardText>
            <CardTitle tag="h4">{question.question}</CardTitle>

            {question.isMultiple === false
              ? question.answers.map((q, i) => (
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option1"
                        id="exampleRadios1"
                        name="exampleRadios"
                        type="radio"
                        onChange={(e) => {
                          setSelectdList((prev) =>
                            prev.map((question, _index) => ({
                              ...question,
                              answers: question.answers.map((answer, _i) => ({
                                ...answer,
                                isSelected:
                                  index === _index
                                    ? i === _i
                                    : answer.isSelected,
                              })),
                            }))
                          );
                        }}
                      ></Input>
                      {q.text} <span className="form-check-sign"></span>
                    </Label>
                  </div>
                ))
              : question.answers.map((q, i) => (
                  <FormGroup check>
                    <Label check>
                      <Input
                        defaultValue=""
                        type="checkbox"
                        onChange={(e) => {
                          setSelectdList((prev) =>
                            prev.map((question, _index) => ({
                              ...question,
                              answers: question.answers.map((answer, _i) => ({
                                ...answer,
                                isSelected:
                                  index === _index && i === _i
                                    ? !answer.isSelected
                                    : answer.isSelected,
                              })),
                            }))
                          );
                        }}
                      ></Input>
                      {q.text} <span className="form-check-sign"></span>
                    </Label>
                  </FormGroup>
                ))}
          </CardBody>
        </Card>
      ))}
      <Button className="ml-5 mb-5" onClick={allData}>
        Send
      </Button>
    </>
  );
  function getCostandDays() {
    let cost = 0;
    let days = 0;
    let answer = [];
    webs.map((question, index) => {
      question.answers.map((d, i) => {
        if (selectedList[index].answers[i].isSelected) {
          cost += d.cost;
          days += d.days;
          answer = d.text;
        }
      });
    });
    return [cost, days, answer];
  }

  function allData() {
    let senddata = {
      user: "608c6f32f2ac404396bc5768",
      request: "Web Developer",
      cost: cost,
      days: days,
      questions: selectedList,
    };
    axios.post("http://localhost:3100/admin/requests", senddata);
  }
}

export default Webdevelopment;
