import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ feedback, totalFeedback, positivePercentage }) => {
  const rank = positivePercentage() > 50 ? css.good : css.bad;
  return (
    <div>
      <h2 className={css.secondtitle}>Statistics</h2>
      <table className={css.table}>
        <tbody>
          <tr>
            <td className={css.good}>Good</td>
            <td className={css.good}>{feedback.good}</td>
          </tr>
          <tr>
            <td className={css.neutral}>Neutral</td>
            <td className={css.neutral}>{feedback.neutral}</td>
          </tr>
          <tr>
            <td className={css.bad}>Bad</td>
            <td className={css.bad}>{feedback.bad}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className={css.total}>Total Feedback</td>
            <td className={css.total}>{totalFeedback}</td>
          </tr>
          <tr>
            <td className={rank}>Positive Feedback</td>
            <td className={rank}>{positivePercentage()}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
