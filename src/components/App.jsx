import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

const feedbackArray = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    // eslint-disable-next-line default-case
    switch (evt.target.id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(2);
  };

  return (
    <div className="container">
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={feedbackArray}
          hendleClick={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = evt => {
//     this.setState({
//       [evt.target.id]: this.state[evt.target.id] + 1,
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
//   };

//   render() {
//     return (
//       <div className="container">
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={feedbackArray}
//             hendleClick={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         {this.countTotalFeedback() > 0 ? (
//           <Section title="Statistic">
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           </Section>
//         ) : (
//           <Notification message="There is no feedback"></Notification>
//         )}
//       </div>
//     );
//   }
// }
