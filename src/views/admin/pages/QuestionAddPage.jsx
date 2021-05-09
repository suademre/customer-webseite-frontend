import React, { useState } from "react";
/* import { Tabs, Tab, Button, ButtonGroup, Modal } from "reactstrap"; */
import MultiLanguageText from "../../../components/admin/questions/MultiLanguageText";
import Answer from "../../../components/admin/questions/Answer";
/* import {
  Tabs,
  Tab,
  Button,
  ButtonGroup,
  Modal,
  Nav,
  NavItem,
} from "reactstrap"; */

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Modal,
  ButtonGroup,
} from "reactstrap";
import classnames from "classnames";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function QuestionAddPage(props) {
  const [questionText, setQuestionText] = useState({});
  const [active, setActive] = useState("1");
  const [answers, setAnswers] = useState({});

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // tabs
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <h4>Frage Text</h4>
      <MultiLanguageText
        data={questionText}
        setData={setQuestionText}
        langs={["de", "en"]}
      />

      <Tabs
        id="controlled-tab-example"
        activekey={active}
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
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          {Object.keys(answers).map((answer) => (
            <Tab>{answer}</Tab>
          ))}
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>

      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            More Tabs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>

      <h4>Antworten</h4>
      <Nav
        tabs
        id="controlled-tab-example"
        activekey={active}
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
                <i
                  className="nc-icon nc-watch-time ml-2"
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
