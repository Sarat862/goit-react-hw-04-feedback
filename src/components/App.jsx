import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Statistics/Notification';

export class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    collectedFeedback = (propertyName) => {
        this.setState((prevState) => {
            return {
                [propertyName]: prevState[propertyName] + 1
            }
        })
    }
  
    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0
        }
        const positive = this.state.good;
        const result = positive / total * 100;
        return Number(Math.round(result));
    }

    render() {
      const { good, neutral, bad } = this.state;
      return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.collectedFeedback}  />
          </Section>

          <Section title="Statistics">
            { !this.countTotalFeedback() ? 
              <Notification message="There is no feedback" /> : 
              <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />     
            }
          </Section>
        </>
      )
    }
};