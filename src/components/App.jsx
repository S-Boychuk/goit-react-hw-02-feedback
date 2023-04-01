import { Fragment } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const arr = ['Good', 'Neutral', 'Bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={arr} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={5}
          neutral={5}
          bad={10}
          total={20}
          positivePercentage={25}
        />
      </Section>
    </>
  );
};
