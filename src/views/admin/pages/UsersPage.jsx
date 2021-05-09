import axios from "axios";
import React, { useState, useEffect } from "react";
/* import { Table, Button, Modal } from "reactstrap"; */

//reactstrap
import { Button, Table, UncontrolledTooltip } from "reactstrap";

function UsersPage() {
  const [users, setUsers] = useState([]);

  /* console.log(users); */

  useEffect(() => {
    axios("http://localhost:3100/admin/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
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
              <td>{user.name}</td>
              <td>{user.contact.name}</td>
              <td>{user.contact.mail}</td>
              <td>{user.contact.tel}</td>
              <td className="text-right">{user.address.country}</td>
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
    </>
  );
}

export default UsersPage;
