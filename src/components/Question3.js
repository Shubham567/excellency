import React, {useState} from "react";
import {Card, Collapse} from "react-bootstrap";

function generateInput(max = 20){
  const randNum = Math.floor(Math.random()*max);
  let arr = new Array(max).fill(0);
  arr = arr.map((a,i) => i+1);
  arr.push(randNum);
  return (arr.sort((a,b) => a - b));
}
const codeInput = generateInput();

const Question3 = props => {

  const [openCollapse,setCollapse] = useState(false);
  const toggleCollapse = () => {
    setCollapse(!openCollapse)
  };

  function findRepeated(input){
    let result = null;
    for(let i = 1; i < input.length; i++){
      if(input[i] === input[i-1]){
        return input[i];
      }
    }
    return result;
  }

  return <>
    <div id={"question3"}>
      <Card>
        <Card.Body>
          <Card.Title>
            Question 3
          </Card.Title>
          <Card.Text>
            <h4>
              Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
              <br/>
              e.g arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

            </h4>
            <h4 onClick={toggleCollapse} style={{cursor: "pointer"}}>Generated Input (size 20) : [{codeInput.toString()}]</h4>
            <div style={{display: (openCollapse ? "" : "none")}}>
              Generation Function
              <pre>
                {generateInput.toString()}
              </pre>
            </div>
            <h4>Code Solution:</h4>
            <pre>
              {findRepeated.toString()}
            </pre>
            <h4>Output : {findRepeated(codeInput)?.toString()}</h4>
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  </>
}

export default Question3;