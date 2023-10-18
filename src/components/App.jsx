import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setRate = evt => {
    const currentState = evt.target.textContent;

    this.setState(prevStates => {
      return {
        [currentState]: (prevStates[currentState] + 1),
      };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce(
      (prevValue, item) => prevValue + item,
      0
    );
  }

  countPositiveFeedbackPercentage() {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} handlerAddRate={this.setRate} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              values={this.state}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
