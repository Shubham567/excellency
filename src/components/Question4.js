import React, {useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import axios from "axios";

const Question4 = props => {
  const [endpoint,setEndpoint] = useState("http://www.example.com/api/get/1");

  const [error,setError] = useState(null);
  const [result,setResult] = useState(null);

  function makeApiCall(){
    axios.get(endpoint).then(res => {
      setResult(res);
    }).catch(e => {
      setError(e);
    })
  }

  return <>
    <div id={"question4"}>
      <Card>
        <Card.Body>
          <Card.Title>
            Question 4
          </Card.Title>
          <Card.Text>
            <h4>
              Let’s see we an api url <a href="http://www.example.com/api/get/1" rel="nofollow">www.example.com/api/get/1</a> <br />
              Write a sample code to call this rest api and display the result.
            </h4>
            <span>For Successful Result Test : https://jsonplaceholder.typicode.com/todos/1</span>
            <h4>Input : {endpoint.toString()}</h4>
            <h4>Code Solution:</h4>
            <pre>
              {makeApiCall.toString()}
            </pre>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter EndPoint" value={endpoint} onChange={e => setEndpoint(e.target.value)}/>
              </Form.Group>
            <Button onClick={makeApiCall}>Click to Make Api Call</Button>
            </Form>
            {
              result &&
              <div className="apiSuccess">
                <h4>Output Success: </h4>
                Status: {result.status}<br/>
                Data : <pre>
                {typeof result.data === "object" ? JSON.stringify(result.data) : result.data}
              </pre>
              </div>
            }
            {
              error &&
              <div className="apiFailed">
                <h4>Output Failed: </h4>
                Status: {error.response ? error.response.status : "Connection Failed"}
              </div>
            }

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </>
}

export default Question4;