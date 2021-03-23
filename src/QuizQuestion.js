import React, { Component } from 'react'

import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(buttonText) {
    console.log('clikc', buttonText)
    if (this.props.quiz_question.answer !== buttonText)
      return console.log('Wrong')
    console.log('Right')
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
      </main>
    )
  }
}

export default QuizQuestion
