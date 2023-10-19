import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const setRate = key => {
    setReviews({
      ...reviews,
      [key]: reviews[key] + 1,
    });
  };

  const countTotalFeedback = Object.values(reviews).reduce(
    (prevValue, item) => prevValue + item,
    0
  );

  const countPositiveFeedbackPercentage = Math.round((100 * reviews.good) / countTotalFeedback);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(reviews)}
          handlerAddRate={setRate}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            values={reviews}
            total={countTotalFeedback}
            positive={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
