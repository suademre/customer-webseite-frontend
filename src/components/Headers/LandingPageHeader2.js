import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import "../../assets/css/header.css";

// core components

function LandingPageHeader() {
  

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          /* backgroundImage:
            "url(" +
            require("assets/img/sections/david-marcu.jpg").default +
            ")", */
          backgroundColor: "#EEEFF2",
        }}
      >
        <div className="content-center">
          <Container className="d-flex align-items-center justify-content-start">
            <div className="w-50">
              <h1 className="title">
                <p className="h4">
                  <strong style={{ color: "black" }}>
                    The best way to organize your work.
                  </strong>
                </p>
              </h1>
              <h3 className="description" style={{ color: "black" }}>
                Organize your tasks, lists and reminders in one app.
              </h3>
              <br />
              <Button
                className="btn mr-1"
                color="primary"
                /* href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?ref=creativetim" */
                target="_blank"
              >
                <i className="fa fa-play" />
                Watch video
              </Button>
              <Button
                className="btn landing-desciption"
                color="neutral"
                type="button"
                outline
              >
                Download
              </Button>
            </div>
            <div className="position-absolute mr-auto">
              {/* <img src="logo.png" alt="">
                asdasdadas
              </img> */}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
