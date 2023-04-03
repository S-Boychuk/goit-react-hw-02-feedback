import { Fragment, Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from 'Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  getTotalFeedback() {
    const feedbackValuesArr = Object.values(this.state);
    return feedbackValuesArr.reduce((acc, value) => acc + value, 0);
  }

  getGoodFeedbackPercentage() {
    const total = this.getTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  }

  render() {
    const feedbackBtnName = Object.keys(this.state);
    const feedbacks = Object.entries(this.state);
    const total = this.getTotalFeedback();
    const goodFeedbackPercentage = this.getGoodFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackBtnName}
            addFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              feedbacks={feedbacks}
              total={total}
              positivePercentage={goodFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
