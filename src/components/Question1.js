import React from "react";
import {Card} from "react-bootstrap";

const Question1 = props => {
  const codeInput = [1,2,3,4,5,6,7,8,9,10,11];

  function evenOnly(input){
    let result = [];
    for(let i = 0; i < input.length; i++){
      if(input[i]%2 === 0){
        result.push(input[i]);
      }
    }
    return result;
  }

  return <>
    <div id={"question1"}>
      <Card>
        <Card.Body>
          <Card.Title>
            Question 1
          </Card.Title>
          <Card.Text>
            <h4>
              Problem Statement : Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only
            </h4>
            <h4>Input : [{codeInput.toString()}]</h4>
            <h4>Code Solution:</h4>
            <pre>
              {evenOnly.toString()}
            </pre>
            <h4>Output : [{evenOnly(codeInput).toString()}]</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </>
}

export default Question1;