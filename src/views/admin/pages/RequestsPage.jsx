import axios from "axios";
import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Table, UncontrolledTooltip } from "reactstrap";

function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(true);

  const updateStatus = (id, operation) => {
    axios(`http://localhost:3100/admin/requests/update/${id}/${operation}`);
    setShouldUpdate(true);
  };

  useEffect(() => {
    setShouldUpdate(false);
    axios("http://localhost:3100/admin/requests")
      .then((res) => {
        console.log(res.data);
        setRequests(res.data);
      })
      .catch((err) => console.log(err));
  }, [shouldUpdate]);

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
              <td>{request.user ? request.user.contact.name : null}</td>
              <td>{request.status}</td>
              <td>{request.request}</td>
              <td>{request.days}</td>
              <td className="text-right">€ {request.cost}</td>
              <td className="td-actions text-right">
                <Button
                  className="btn-icon"
                  color="info"
                  id="tooltip918713947"
                  size="sm"
                  type="button"
                  onClick={(e) => {
                    updateStatus(request._id, "accepted");
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
                    updateStatus(request._id, "waiting");
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
                    updateStatus(request._id, "canceled");
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
