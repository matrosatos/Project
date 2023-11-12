import styles from './Feedback.module.scss';
import {Tabs} from '../../TabContainer/TabContainer';
import React, {useEffect, useState} from 'react';
import {FeedbackHeader} from './components/FeedbackHeader';
import {CardRow} from '../../UI/blocks/CardRow/CardRow';
import {FeedbackTab} from './components/FeedbackTab';

export const Feedback = React.memo(({shortType, changeTab}) => {
    console.log('Feedback');
    const feedbackTabsArray = [
        {
            tabName: 'Reviews (312)',
            content: <FeedbackTab type='reviews' changeTab={changeTab} shortType={shortType}/>,
        },
        {
            tabName: 'Questions (142)',
            content: <FeedbackTab type='questions' changeTab={changeTab} shortType={shortType}/>,
        },
    ];

    return (
        <section className={styles.feedback}>
            <FeedbackHeader/>
            <Tabs tabsArray={feedbackTabsArray}/>
        </section>
    );
});
