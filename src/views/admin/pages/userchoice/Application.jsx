import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardFooter,
  CardBody,
  CardSubtitle,
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";

function Application() {
  const [apps, setApps] = useState([]);
  const [selectedList, setSelectdList] = useState([]);
  const [days, setDays] = useState("");
  const [cost, setCost] = useState("");
  const [form, setForm] = useState({});
  const [answer, setAnswer] = useState([]);

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
        let application = res.data.filter(
          (question) => question.category_id.title === "App Developer"
        );
        /* setApps(res.data.category[0].category_title === "Application"); */
        console.log(res);
        console.log(application);
        setApps(application);
        let sonuc = application.map((question) => ({
          question: question.question,
          answers: question.answers.map((answer) => ({
            text: answer.text,
            isSelected: false,
          })), // obje dondurmek icin normal parantez de gerekioyr
        }));
        setSelectdList(sonuc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {apps.map((question, index) => (
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
    apps.map((question, index) => {
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
      user: "608d119bf2ac404396bc5769",
      request: "App Developer",
      cost,
      days,
      questions: selectedList,
    };
    axios.post("http://localhost:3100/admin/requests", senddata);
    //console.log(days + " " + cost);
    console.log(senddata);
  }
}

export default Application;
