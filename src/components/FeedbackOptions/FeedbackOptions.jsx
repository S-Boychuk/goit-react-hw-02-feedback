import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options }) => {
  return (
    <ul className={css['feedback-options-list']}>
      {options.map(option => {
        return (
          <li>
            <button className={css['feedback-options-btn']}>{option}</button>{' '}
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
