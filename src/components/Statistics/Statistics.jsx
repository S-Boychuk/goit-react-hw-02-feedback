import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css['statistics-list']}>
      <li className={css['statistics-item']}>Good: {good}</li>
      <li className={css['statistics-item']}>Neutral: {neutral}</li>
      <li className={css['statistics-item']}>Bad: {bad}</li>
      <li className={css['statistics-item']}>Total: {total}</li>
      <li className={css['statistics-item']}>
        Positive feedback: {positivePercentage} %
      </li>
    </ul>
  );
};

export default Statistics;
