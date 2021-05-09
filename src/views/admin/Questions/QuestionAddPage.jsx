import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Button,
  ButtonGroup,
  Modal,
  Nav,
  NavItem,
} from "reactstrap";
import MultiLanguageText from "../../../components/admin/questions/MultiLanguageText";
import Answer from "../../../components/admin/questions/Answer";
import { XCircleFill } from "reactstrap-icons";

function QuestionAddPage(props) {
  const [questionText, setQuestionText] = useState({});
  const [active, setActive] = useState("1");
  const [answers, setAnswers] = useState({});

  const [liveDemo, setLiveDemo] = React.useState(false);

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h4>Frage Text</h4>
      <MultiLanguageText
        data={questionText}
        setData={setQuestionText}
        langs={["de", "en"]}
      />

      <h4>Antworten</h4>
      <div>
        <Nav
          tabs
          id="controlled-tab-example"
          activeey={active}
          onSelect={(k) => {
            if (k === "new") {
              if (Object.keys(answers).length === 0) {
                setAnswers({
                  1: {},
                });
              } else {
                let key = parseInt(Object.keys(answers).reverse()[0]) + 1;
                setAnswers({ ...answers, [key]: {} });
              }
            } else {
              setActive(k);
            }
          }}
        >
          {Object.keys(answers).map((answer) => (
            <NavItem
              eventKey={answer}
              title={
                <>
                  {answer}{" "}
                  <XCircleFill
                    className="ml-2 nc-icon nc-watch-time"
                    onClick={() => {
                      setAnswers(
                        Object.fromEntries(
                          Object.entries(answers).filter(
                            ([key, value]) => key != answer
                          )
                        )
                      );
                    }}
                  />
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Löschen</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Sind Sie Sicher, um diese Antwort zu löschen!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleClose();
                          console.log(answer);
                        }}
                      >
                        Löschen
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              }
            >
              <Answer
                data={answers[answer]}
                setData={(answerData) => {
                  setAnswers({ ...answers, [answer]: answerData });
                }}
              />
            </NavItem>
          ))}

          <NavItem eventKey="new" title="+"></NavItem>
        </Nav>
      </div>

      <ButtonGroup className="d-flex justify-content-end bd-highlight my-3 mx-5">
        <Button className="mx-4">Back</Button>
        <Button
          className="mx-4"
          onClick={(e) => {
            console.log({
              isRoot: false,
              text: questionText,
              answers: answers,
            });
          }}
        >
          Send
        </Button>
      </ButtonGroup>
    </>
  );
}

export default QuestionAddPage;
