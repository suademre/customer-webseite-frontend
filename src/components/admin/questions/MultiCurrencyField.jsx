import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Input,
} from "reactstrap";
import classnames from "classnames";

function MultiCurrencyField(props) {
  const { data, setData, currencies } = props;
  const [active, setActive] = useState("eur");
  const { t, i18n } = useTranslation();
  //reactstrap
  const [activeTab, setActiveTab] = useState("");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div>
        {currencies.map((currency) => (
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === "t(`${currency}.label`)",
                })}
                onClick={() => {
                  toggle("t(`${currency}.label`)");
                }}
              >
                {t(`${currency}.label`)}
              </NavLink>
            </NavItem>
          </Nav>
        ))}
        <Nav
          tabs
          id="controlled-tab-example"
          activeKey={active}
          onSelect={(k) => setActive(k)}
        >
          {currencies.map((currency) => (
            <TabContent activeTab={activeTab}>
              <TabPane tabId="t(`${currency}.label`)">
                <Row>
                  <Col sm="12">
                    <Input
                      id={currency}
                      className="rounded-0 border-top-0"
                      placeholder={t(`${currency}.question.placeholder`)}
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
        </Nav>
      </div>
    </>
  );
}

export default MultiCurrencyField;
