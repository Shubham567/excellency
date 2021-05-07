import React from "react";
import {Card} from "react-bootstrap";

const Question2 = props => {
  const codeInputA = "001100011001110";
  const codeInputB = "1000010001";

  function maxConsecutive1(input){
    let result = 0;
    let curr = 0;

    for(let i = 0; i < input.length; i++){
      if(input[i] === "1"){
        curr += 1;
      }
      else {
        curr = 0;
      }
      if(curr > result){
        result = curr;
      }
    }
    return result;
  }

  return <>
    <div id={"question2"}>
      <Card>
        <Card.Body>
          <Card.Title>
            Question 2
          </Card.Title>
          <Card.Text>
            <h4>
              Find the maximum consecutive 1's in an array of 0's and 1's.<br/>
              Example:<br/>
              a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]<br/>
              b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]
            </h4>
            <h4>Input A : {codeInputA.toString()}</h4>
            <h4>Input B : {codeInputB.toString()}</h4>
            <h4>Code Solution:</h4>
            <pre>
              {maxConsecutive1.toString()}
            </pre>
            <h4>Output A: {maxConsecutive1(codeInputA).toString()}</h4>
            <h4>Output B: {maxConsecutive1(codeInputB).toString()}</h4>
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  </>
}

export default Question2;