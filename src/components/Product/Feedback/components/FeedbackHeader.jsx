import styles from '../Feedback.module.scss';
import {StarsRating} from '../../../UI/Rating/StarsRating';
import {Button} from '../../../UI/Button/Button';
import {Icon} from '../../../UI/Icon/Icon';
import React from 'react';

export const FeedbackHeader = () => {
    const vars = [
        'Pretty',
        'Last model',
        'Excellent camera',
        'Pretty',
        'Last model',
        'Last model',
        'Excellent camera',
        'Pretty',
        'Last model',
        'Excellent camera',
        'Pretty',
        'Last model',
        'Excellent camera',
    ];
    return (
        <>
            <div className={styles.flex_center}>
                <div className={styles.rating}>
                    <span className={styles.rating_value}>4.8</span>
                    <StarsRating initialValue={3.7} size={24} readonly/>
                </div>
                <div className={styles.leave_feedback}>
                    <Button
                        variant='outlined'
                        icon={<Icon size='small' type='help-circle'/>}
                    >
                        Ask a question
                    </Button>
                    <Button
                        // onClick={s}
                        variant='primary'
                        icon={<Icon size='small' type='star-review'/>}
                    >
                        Leave a review
                    </Button>
                </div>
            </div>
            <div className={styles.feedback_variants}>
                {vars.map((item, index) => (
                    <div key={index} className={styles.feedback_variants_item}>{item}</div>
                ))}
            </div>
        </>
    );
};
