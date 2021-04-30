import axios from "axios";
import { data } from "jquery";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Label,
  Input,
  FormGroup,
} from "reactstrap";

function Webdevelopment() {
  const [webs, setWebs] = useState([]);
  const [selectedList, setSelectdList] = useState([]);

  useEffect(() => {
    const [cost, days] = getCostandDays();
    console.log(cost, days);
  }, [selectedList]);

  useEffect(() => {
    axios("http://localhost:3100/admin/questions")
      .then((res) => {
        let webApplication = res.data.filter(
          (obj) => obj.category[0].category_title === "Web Application"
        );
        console.log(webApplication);
        setWebs(webApplication);

        let sonuc = webApplication.map((data) =>
          data.questions[0].answers.map((answer) => false)
        );
        setSelectdList(sonuc);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {webs.map((web, index) => (
        <Card className="ml-5 mt-5" style={{ width: "20rem" }}>
          <CardBody>
            <CardText>Answers</CardText>
            <CardTitle tag="h4">{web.questions[0].question_text}</CardTitle>

            {web.questions[0].isMultiple === "false"
              ? web.questions[0].answers.map((q, i) => (
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option1"
                        id="exampleRadios1"
                        name="exampleRadios"
                        type="radio"
                        onChange={(e) => {
                          setSelectdList((prev) =>
                            prev.map((question, _index) =>
                              question.map((answer, _i) =>
                                index === _index ? i === _i : answer
                              )
                            )
                          );
                        }}
                      ></Input>
                      {q.text} <span className="form-check-sign"></span>
                    </Label>
                  </div>
                ))
              : web.questions[0].answers.map((q, i) => (
                  <FormGroup check>
                    <Label check>
                      <Input
                        defaultValue=""
                        type="checkbox"
                        onChange={(e) => {
                          setSelectdList((prev) =>
                            prev.map((question, _index) =>
                              question.map((answer, _i) =>
                                index === _index && i === _i ? !answer : answer
                              )
                            )
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
    </>
  );
  function getCostandDays() {
    let cost = 0;
    let days = 0;
    webs.map((data, index) => {
      data.questions[0].answers.map((d, i) => {
        if (selectedList[index][i]) {
          cost += d.cost;
          days += d.days;
        }
      });
    });
    return [cost, days];
  }
}

export default Webdevelopment;
