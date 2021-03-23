import React, { Component } from 'react'

import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = { incorrectAnswer: false }
  }

  handleClick(buttonText) {
    console.log('clikc', buttonText)
    if (this.props.quiz_question.answer !== buttonText)
      return this.setState((prevState) => ({
        ...prevState,
        incorrectAnswer: true,
      }))
    this.setState((prevState) => ({ ...prevState, incorrectAnswer: false }))
    this.props.showNextQuestionHandler()
  }

  render() {
    return (
      <main>
        <section className="QuizQuestion">
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer, index) => (
              <QuizQuestionButton
                key={index}
                button_text={answer}
                index={index}
                clickHandler={this.handleClick.bind(this)}
              />
            ))}
          </ul>
        </section>
        {this.state.incorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
      </main>
    )
  }
}

export default QuizQuestion
