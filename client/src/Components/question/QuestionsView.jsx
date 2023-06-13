// import React from 'react'
import './QuestionsView.css'
import Button from "react-bootstrap/Button";
const QuestionsView = () => {
    return (
      <>
        <table className="question-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name Of the Fxperiment</th>
              <th>Ques-Avaliable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>1</b>
              </td>
              <td>Kruskals Algorithm</td>
              <td>
                <Button variant="outline-dark">solve</Button>
              </td>
            </tr>
            <tr>
              <td>
                <b>2</b>
              </td>
              <td>
                Find a subset of a given set
              </td>
              <td>
                <Button variant="outline-dark">solve</Button>
              </td>
            </tr>
            <tr>
              <td>
                <b>3</b>
              </td>
              <td>Knapsack problem using greedy method</td>
              <td>
                <Button variant="outline-dark">solve</Button>
              </td>
            </tr>
            <tr>
              <td>
                <b>4</b>
              </td>
              <td>Knapsack problem using greedy method</td>
              <td>
                <Button variant="outline-dark">solve</Button>
              </td>
            </tr>
            <tr>
              <td>
                <b>5</b>
              </td>
              <td>Stack operations</td>
              <td>
                <Button variant="outline-dark">solve</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
}

export default QuestionsView