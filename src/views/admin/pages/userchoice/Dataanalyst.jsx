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
} from "reactstrap";

function Dataanalyst() {
  const [datas, setDatas] = useState([]);
  const [days, setDays] = useState(0);
  const [costs, setCosts] = useState(0);

  useEffect(() => {
    axios("http://localhost:3100/admin/questions").then((res) => {
      let dataanalyst = res.data.filter(
        (obj) => obj.category[0].category_title === "Dataanalyst"
      );

      console.log(dataanalyst);
      console.log(res.data);
      setDatas(dataanalyst);
    });
  }, []);

  return (
    <>
      {datas.map((data) => (
        <Card className="ml-5 mt-5" style={{ width: "20rem" }}>
          <CardBody>
            <CardText>Answers</CardText>
            <CardTitle tag="h4">{data.questions[0].question_text}</CardTitle>

            {data.questions[0].isMultiple === "false"
              ? data.questions[0].answers.map((q) => (
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option1"
                        id="exampleRadios1"
                        name="exampleRadios"
                        type="radio"
                        onChange={(e) => {
                          setCosts(costs + q.cost);
                          console.log(costs);
                        }}
                      ></Input>
                      {q.text} <span className="form-check-sign"></span>
                    </Label>
                  </div>
                ))
              : data.questions[0].answers.map((q) => (
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox"></Input>
                      {q.text} <span className="form-check-sign"></span>
                    </Label>
                  </FormGroup>
                ))}
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default Dataanalyst;
