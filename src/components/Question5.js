import React from "react";
import {Card} from "react-bootstrap";

const Question5 = props => {
  const codeInput = [
    {"id" : 4, "name" : "abc"},
    { "id" : 10, "name" : "ab2"},
    {"id" : 5, "name" : "abc3"},
    { "id" : 6, "name" : "abc5"}
  ]

  function sortById(input){
    return input.sort((a,b)=>a.id-b.id);
  }

  return <>
    <div id={"question5"}>
      <Card>
        <Card.Body>
          <Card.Title>
            Question 5
          </Card.Title>
          <Card.Text>
            <h4>
              Assume there is a object of this format<br/>
              var obj = {"{"}<br/>
              “id” : 4, “name” : “abc”,<br/>
              “id” : 10, “name” : “ab2”,<br/>
              “id” : 5, “name” : “abc3”,<br/>
              “id” : 6, “name” : “abc5”<br/>
              {"}"}<br/>
              It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.<br/><br/>

              Write a code to sort the object by id<br/>
              I.e final output should have objected sort by id’s<br/>
            </h4>
            <h4>Input : [{JSON.stringify(codeInput)}]</h4>
            <h4>Code Solution:</h4>
            <pre>
              {sortById.toString()}
            </pre>
            <h4>Output : {JSON.stringify(sortById(codeInput))}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </>
}

export default Question5;