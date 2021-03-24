import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'
// import quiz_data as quizData from './quiz_data.json'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }

  showNextQuestion() {
    this.setState((prevState) => ({
      ...prevState,
      quiz_position: prevState.quiz_position + 1,
    }))
  }

  handleResetClick() {
    this.setState((prevState) => ({ ...prevState, quiz_position: 1 }))
  }

  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length
    // console.log(
    //   'isQuizEnd',
    //   isQuizEnd,
    //   this.state.quiz_position,
    //   quizData.quiz_questions.length
    // )
    return (
      <div>
        {isQuizEnd && (
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        )}
        {!isQuizEnd && (
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        )}
      </div>
    )
  }
}

export default Quiz
