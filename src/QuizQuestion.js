import React from 'react'

class QuizQuestion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <li key={this.props.quiz_question.answer_options[0]}>
            {this.props.quiz_question.answer_options[0]}
          </li>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
