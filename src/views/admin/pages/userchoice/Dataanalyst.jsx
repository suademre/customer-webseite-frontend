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

function Dataanalyst() {
  const [datas, setDatas] = useState([]);
  /*  const [days, setDays] = useState(0);
  const [costs, setCosts] = useState(0); */
  const [selectedList, setSelectdList] = useState([]);
  const [days, setDays] = useState("");
  const [cost, setCost] = useState("");
  const [form, setForm] = useState({});
  const [answer, setAnswer] = useState([]);

  console.log(form);

  useEffect(() => {
    const [cost, days, answer] = getCostandDays();
    setDays(days);
    setCost(cost);
    setAnswer(answer);
    console.log(cost, days);
  }, [selectedList]);

  useEffect(() => {
    axios("http://localhost:3100/admin/questions").then((res) => {
      let dataanalyst = res.data.filter(
        (obj) => obj.category[0].category_title === "Dataanalyst"
      );

      console.log(dataanalyst);
      console.log(res.data);
      setDatas(dataanalyst);
      let sonuc = dataanalyst.map((data) =>
        data.questions[0].answers.map((answer) => false)
      );
      setSelectdList(sonuc);
    });
  }, []);

  return (
    <>
      {datas.map((data, index) => (
        <Card className="ml-5 mt-5" style={{ width: "20rem" }}>
          <CardBody>
            <CardText>Answers</CardText>
            <CardTitle tag="h4">{data.questions[0].question_text}</CardTitle>

            {data.questions[0].isMultiple === "false"
              ? data.questions[0].answers.map((q, i) => (
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
              : data.questions[0].answers.map((q, i) => (
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
      <Button className="ml-5 mb-5" onClick={allData}>
        Send
      </Button>
    </>
  );

  function getCostandDays() {
    let cost = 0;
    let days = 0;
    let answer = [];
    datas.map((data, index) => {
      data.questions[0].answers.map((d, i) => {
        if (selectedList[index][i]) {
          cost += d.cost;
          days += d.days;
          answer = d.text;
        }
      });
    });
    return [cost, days, answer];
    /* datas.map((data,index)=>
      data
    ) */
  }
  function allData() {
    let senddata = {
      id: 1,
      fiyat: cost,
      zaman: days,
      savedData: selectedList,
    };
    //console.log(days + " " + cost);
    console.log(senddata);
  }
}

export default Dataanalyst;
