import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardText, CardTitle, Label, Input } from "reactstrap";

function Webdevelopment() {
  const [webs, setWebs] = useState([]);

  useEffect(() => {
    axios("http://localhost:3100/admin/questions")
      .then((res) => {
        let webApplication = res.data.filter(
          (obj) => obj.category[0].category_title === "Web Application"
        );
        console.log(webApplication);
        setWebs(webApplication);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {webs.map((web) => (
        <Card className="ml-5 mt-5" style={{ width: "20rem" }}>
          <CardBody>
            <CardText>Answers</CardText>
            <CardTitle tag="h4">{web.questions[0].question_text}</CardTitle>
            {/* <CardSubtitle className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle> */}

            {web.questions[0].answers.map((q) => (
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

export default Webdevelopment;
