import axios from "axios";
import React, { useState, useEffect } from "react";
/* import { Table, Button, Modal } from "reactstrap"; */

//reactstrap
import { Button, ButtonGroup, Table, UncontrolledTooltip } from "reactstrap";

function UsersPage() {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    axios("http://localhost:3100/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data[0].contact.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Namee</th>
            <th>Company</th>
            <th>Contact Person</th>
            <th>Mail</th>
            <th className="text-right">Tel</th>
            <th className="text-right">Contract</th>
          </tr>
        </thead>
        {users.map((user, key) => (
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>{user.contact.name}</td>
              <td>{user.company.name}</td>
              <td>{user.contact.name}</td>
              <td>{user.contact.name}</td>
              <td className="text-right">{user.contact.tel}</td>
              <td className="td-actions text-right">
                <Button
                  className="btn-icon"
                  color="info"
                  id="tooltip918713947"
                  size="sm"
                  type="button"
                >
                  <i className="fa fa-check-circle"></i>
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  target="tooltip918713947"
                ></UncontrolledTooltip>
                <Button
                  className="btn-icon"
                  color="success"
                  id="tooltip554806771"
                  size="sm"
                  type="button"
                >
                  <i className="fa fa-edit"></i>
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  target="tooltip554806771"
                ></UncontrolledTooltip>
                <Button
                  className="btn-icon"
                  color="danger"
                  id="tooltip561480244"
                  size="sm"
                  type="button"
                >
                  <i className="fa fa-times"></i>
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  target="tooltip561480244"
                ></UncontrolledTooltip>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      {/* <Table>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Nameeeee</th>
            <th>Company</th>
            <th>Contact Person</th>
            <th>Mail</th>
            <th className="text-right">Tel</th>
            <th className="text-right">Contract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>Andrew Mike</td>
            <td>aaaa</td>
            <td>Andreas</td>
            <td>andreas@gmail.com</td>
            <td className="text-right">+49 179 2345768</td>
            <td className="td-actions text-right">
              <Button
                className="btn-icon"
                color="info"
                id="tooltip918713947"
                size="sm"
                type="button"
              >
                <i className="fa fa-check-circle"></i>
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip918713947"
              ></UncontrolledTooltip>
              <Button
                className="btn-icon"
                color="success"
                id="tooltip554806771"
                size="sm"
                type="button"
              >
                <i className="fa fa-edit"></i>
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip554806771"
              ></UncontrolledTooltip>
              <Button
                className="btn-icon"
                color="danger"
                id="tooltip561480244"
                size="sm"
                type="button"
              >
                <i className="fa fa-times"></i>
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip561480244"
              ></UncontrolledTooltip>
            </td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td>John Doe</td>
            <td>Design</td>
            <td>Web</td>
            <td>20</td>
            <td className="text-right">€ 89,241</td>
            <td className="td-actions text-right">
              <Button
                className="btn-round btn-icon"
                color="info"
                id="tooltip473923911"
                size="sm"
                type="button"
              >
                <i className="fa fa-check-circle"></i>
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip473923911"
              ></UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="success"
                id="tooltip728508052"
                size="sm"
                type="button"
              >
                <i className="fa fa-edit"></i>
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip728508052"
              ></UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="danger"
                id="tooltip149723750"
                size="sm"
                type="button"
              >
                <i className="fa fa-times"></i>
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip149723750"
              ></UncontrolledTooltip>
            </td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td>Alex Mike</td>
            <td>Design</td>
            <td>Analyst</td>
            <td>17</td>
            <td className="text-right">€ 92,144</td>
            <td className="td-actions text-right">
              <Button
                className="btn-simple btn-icon"
                color="info"
                id="tooltip669260606"
                size="sm"
                type="button"
              >
                <i className="fa fa-check-circle"></i>
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip669260606"
              ></UncontrolledTooltip>
              <Button
                className="btn-simple btn-icon"
                color="success"
                id="tooltip549541827"
                size="sm"
                type="button"
              >
                <i className="fa fa-edit"></i>
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip549541827"
              ></UncontrolledTooltip>
              <Button
                className="btn-simple btn-icon"
                color="danger"
                id="tooltip722792365"
                size="sm"
                type="button"
              >
                <i className="fa fa-times"></i>
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip722792365"
              ></UncontrolledTooltip>
            </td>
          </tr>
        </tbody>
      </Table> */}
    </>
  );
}

export default UsersPage;
