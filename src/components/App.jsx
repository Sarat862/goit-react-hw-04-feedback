import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Statistics/Notification';

export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const collectedFeedback = (propertyName) => {
    switch (propertyName) {
      case "good":
        return setGood(prev => prev + 1);
      case "neutral":
        return setneutral(prev => prev + 1);
      case "bad":
        return setbad(prev => prev + 1);
      default: return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0
    }
    const positive = good;
    const result = positive / total * 100;
    return Number(Math.round(result));
  }

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={collectedFeedback}  />
        </Section>

        <Section title="Statistics">
          { !countTotalFeedback() ? 
            <Notification message="There is no feedback" /> : 
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />     
          }
        </Section>
      </>
    )
}