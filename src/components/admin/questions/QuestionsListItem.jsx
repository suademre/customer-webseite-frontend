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
  const [shouldUpdate, setShouldUpdate] = useState(true); //

  useEffect(() => {
    if (shouldUpdate) {
      console.log(typeof questions);
      axios("http://localhost:3100/admin/questions")
        .then((res) => {
          setQuestions(res.data);

          console.log(questions);
          console.log(questions.category_id.title);
        })
        .catch((err) => {
          console.log(err);
        });
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  return (
    <div>
      {questions.map((question, index) => (
        <Card className="bg-white text-white mt-5 mb-2 pl-3" sm="2">
          <CardTitle tag="h4"> Question: {question.question}</CardTitle>
          <CardText>Category: {question.category_id.title}</CardText>
          <CardText>Es gibt {question.answers.length} antworten</CardText>
          <CardText>
            {question.answers.map((q) => (
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
              onClick={(e) => {
                axios
                  .delete(
                    "http://localhost:3100/admin/questions/" + question._id
                  )
                  .then((res) => {
                    setShouldUpdate(true);
                  });
              }}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default QuestionsListItem;
