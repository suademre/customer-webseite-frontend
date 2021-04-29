import React, { useState } from "react";
/* import { Tabs, Tab, Form } from "reactstrap"; */
import { useTranslation } from "react-i18next";
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
  Input,
} from "reactstrap";
import classnames from "classnames";

function MultiLangugaeText(props) {
  const { data, setData, langs } = props;
  /*   const [active, setActive] = useState("de"); */
  const { t, i18n } = useTranslation();
  //reactstrap
  const [activeTab, setActiveTab] = useState("");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div>
        {langs.map((lang) => (
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === "t(`${lang}.label`)",
                })}
                onClick={() => {
                  toggle("t(`${lang}.label`)");
                }}
              >
                {t(`${lang}.label`)}
              </NavLink>
            </NavItem>
          </Nav>
        ))}

        {langs.map((lang) => (
          <TabContent activeTab={activeTab}>
            <TabPane tabId="t(`${lang}.label`)">
              <Row>
                <Col sm="12">
                  <Input
                    id={lang}
                    className="rounded-0 border-top-0"
                    placeholder={t(`${lang}.question.placeholder`)}
                    value={data["lang"]}
                    as="textarea"
                    rows={3}
                    onChange={(e) => {
                      setData({ ...data, [e.target.id]: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        ))}
      </div>

      {/* <Tabs
        id="controlled-tab-example"
        activeKey={active}
        onSelect={(k) => setActive(k)}
      >
        {langs.map((lang) => (
          <Tab eventKey={lang} title={t(`${lang}.label`)}>
            <Form.Control
              id={lang}
              className="rounded-0 border-top-0"
              placeholder={t(`${lang}.question.placeholder`)}
              value={data["lang"]}
              as="textarea"
              rows={3}
              onChange={(e) => {
                setData({ ...data, [e.target.id]: e.target.value });
              }}
            />
          </Tab>
        ))}
      </Tabs> */}
    </>
  );
}

export default MultiLangugaeText;
