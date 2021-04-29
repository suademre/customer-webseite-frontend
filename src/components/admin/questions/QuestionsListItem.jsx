import axios from "axios";
import React, { useEffect, useState } from "react";
/* import { Container, Row, Card, Button, Col } from "reactstrap";
import { InfoCircle, PencilFill, Trash } from "reactstrap-icons"; */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroupItem,
  ListGroup,
} from "reactstrap";

function QuestionsListItem() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log(typeof questions);
    axios("http://localhost:3100/admin/questions")
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
        console.log(typeof questions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {questions.map((question, index) => (
        <Card className="bg-white text-white mt-5 mb-2 pl-3" sm="2">
          <CardTitle tag="h4">
            {" "}
            Question: {question.questions[0].question_text}
          </CardTitle>
          <CardText>Category: {question.category[0].category_title}</CardText>
          <CardText>
            Es gibt {question.questions[0].answers.length} antworten
          </CardText>
          <CardText>
            {question.questions[0].answers.map((q) => (
              <CardText>
                answer:{q.text}, days:{q.days} cost: {q.cost}
              </CardText>
            ))}
          </CardText>
          <CardText></CardText>
          <CardFooter>
            <Button
              className="btn-round"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export default QuestionsListItem;
