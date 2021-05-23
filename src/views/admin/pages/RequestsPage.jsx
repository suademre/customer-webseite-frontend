import axios from "axios";
import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Table, UncontrolledTooltip, Modal } from "reactstrap";

function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(true);
  const [details,setDetails] = useState(false);
  const [currentRequest, setCurrentRequest] = useState([]);
  

  const updateStatus = (id, operation) => {
    axios(`http://localhost:3100/admin/requests/update/${id}/${operation}`);
    setShouldUpdate(true);
  };

  useEffect(() => {
    setShouldUpdate(false);
    axios("http://localhost:3100/admin/requests")
      .then((res) => {
        setRequests(res.data);
        /* console.log("requests"+requests); */
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

        <tbody>
        {requests.map((request) => (
            <tr key={request._id}>
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
                <Button className="btn btn-warning btn-sm" type="button" 
                onClick={(e)=>{
                  setCurrentRequest(request)
                  setDetails(true)}}>
                  Details
                </Button>

               
               
                
              </td>
            </tr>
        ))}
        </tbody>
      </Table>
      <Modal
       isOpen={details}
       toggle={() => setDetails(false)}
       modalClassName="modal-register"
       >
       
       <div className="modal-header no-border-header text-center">
         <button
           aria-label="Close"
           className="close"
           data-dismiss="modal"
           type="button"
           onClick={() => setDetails(false)}
         >
           <span aria-hidden={true}>×</span>
         </button>
         {
           details && currentRequest.questions.map(question=>(
            <div className="card card-nav-tabs">
            <div className="card-header card-header-warning">
              {question.question}
            </div>
            {question.answers.map((answer)=>(
              <div className="card-body">
                <p className="card-title">{answer.isSelected === true ? answer.text : null}</p>
              </div>
            ))}
          </div>
           ))
          //  currentRequest.questions.map((m)=>console.log(m))
         }
        {/*  {requests.find(request=>request._id === selectedRequestId).questions.map((question)=>(   
           <div className="card card-nav-tabs">
             <div className="card-header card-header-warning">
               {question.question}
             </div>
             {question.answers.map((answer)=>(
               <div className="card-body">
                 <p className="card-title">{answer.isSelected === true ? answer.text : null}</p>
               </div>
             ))}
           </div>
       
       ))} */}
       </div>
     </Modal>           
    </>
  );
}

export default RequestsPage;
