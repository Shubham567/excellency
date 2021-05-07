import React from "react";
import {Card} from "react-bootstrap";

const AboutSubmission = props => {

  return <>
    <div id={"about"}>
      <Card>
        <Card.Body>
          <Card.Title>
            About
          </Card.Title>
          <Card.Text>
            <p>
              All the Problems are solved in React Js. The code seen on upcoming sections are printed using toString method on Functions.
              <br/>
              Visit <a href={"https://github.com/Ritika42894/Final-Logical-Test"}>Github Repository</a> to view full Source Code
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </>
}

export default AboutSubmission;