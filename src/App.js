import './App.css';
import {Button} from "react-bootstrap";
import {useState} from "react";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import AboutSubmission from "./components/AboutSubmission";
import TodoList from "./components/TodoList";

function App() {


  return (
    <div className="App">
      <header>
        <div>
          <h2 style={{marginBlockEnd: 0}}>Excellence Technologies</h2>
          <h5 style={{marginBlockStart: 0}}>submitted By Ritika Bihari Singh</h5>
        </div>
        <ul className="headerLinks">
          <li><a href="#question1">Question 1</a></li>
          <li><a href="#question2">Question 2</a></li>
          <li><a href="#question3">Question 3</a></li>
          <li><a href="#question4">Question 4</a></li>
          <li><a href="#question5">Question 5</a></li>
          <li><a href="#todo">To Do</a></li>
        </ul>
      </header>
      <AboutSubmission />
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
      <TodoList />
    </div>
  );
}

export default App;
