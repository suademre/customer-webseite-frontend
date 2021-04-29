import axios from "axios";
import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, ButtonGroup, Table, UncontrolledTooltip } from "reactstrap";

function RequestsPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios("http://localhost:3100/admin/requests")
      .then((res) => {
        console.log(res.data);
        setRequests(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th>Stuation</th>
            <th>Application</th>
            <th>Days</th>
            <th className="text-right">Price</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>

        {requests.map((request) => (
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>{request.request[0].request_user}</td>
              <td>{request.request[0].status}</td>
              <td>{request.request[0].application}</td>
              <td>{request.request[0].days}</td>
              <td className="text-right">€ {request.request[0].cost}</td>
              <td className="td-actions text-right">
                <Button
                  className="btn-icon"
                  color="info"
                  id="tooltip918713947"
                  size="sm"
                  type="button"
                  onClick={(e) => {
                    console.log("onaylandi");
                  }}
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
                  onClick={() => {
                    console.log("update");
                  }}
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
                  onClick={() => {
                    console.log("silindi");
                  }}
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

export default RequestsPage;
