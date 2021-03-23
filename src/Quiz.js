import React, { Component } from 'react'

// import quiz_data as quizData from './quiz_data.json'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }

  render() {
    return (
      <div>
        <div classname="QuizQuestion">
          {quizData.quiz_questions[this.state.quiz_position].instruction_text}
        </div>
      </div>
    )
  }
}

export default Quiz
