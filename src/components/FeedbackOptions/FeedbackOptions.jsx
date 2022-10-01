import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <div >
            {options.map((option, index) => <button type="button" key={index} className={css.btn} onClick={() => onLeaveFeedback(`${option}`)}>{option}</button>)}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}