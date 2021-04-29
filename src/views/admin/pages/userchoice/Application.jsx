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
} from "reactstrap";

function Application() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios("http://localhost:3100/admin/questions")
      .then((res) => {
        let a = res.data.filter;
        setApps(res.data.category[0].category_title === "Application");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {apps.map((app) => (
        <Card className="ml-5 mt-5" style={{ width: "20rem" }}>
          <CardBody>
            <CardTitle tag="h4">{app.questions[0].question_text}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>Answers</CardText>

            {app.questions[0].answers.map((q) => (
              <div className="form-check-radio">
                <Label check>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  {q.text} <span className="form-check-sign"></span>
                </Label>
              </div>
            ))}
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default Application;
