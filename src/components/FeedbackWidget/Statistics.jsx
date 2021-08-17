import React from 'react'
import PropTypes from 'prop-types';
import s from './FeedbackWidget.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
           <div className={s.statistics}>
                   
                    <p className={s.text}>Good:{good}</p>
                    <p className={s.text}>Neutral:{neutral}</p>
                    <p className={s.text}>Bad:{bad}</p>
                    <p className={s.text}>Total: {total}</p>
                    <p className={s.text}>Positive feedback: {positivePercentage ? positivePercentage :0} %</p>
               

            </div>
    )
}
export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}