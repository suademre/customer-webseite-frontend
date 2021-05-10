import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";
//import { useSelector } from "react-redux";

export default function MyRequests() {
  //const email = useSelector((state) => state.auth.email);

  const [requests, setRequests] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(true);

  useEffect(() => {
    setShouldUpdate(false);
    axios("http://localhost:3100/admin/myrequests")
      .then((res) => {
        console.log(res.data);
        setRequests(res.data);
      })
      .catch((err) => console.log(err));
  }, [shouldUpdate]);

  const updateStatus = (id, operation) => {
    axios(`http://localhost:3100/admin/requests/update/${id}/${operation}`);
    setShouldUpdate(true);
  };

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
          </tr>
        </thead>

        {requests.map((request) => (
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>{request.user.contact.name}</td>
              <td>{request.status}</td>
              <td>{request.request}</td>
              <td>{request.days}</td>
              <td className="text-right">€ {request.cost}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}
