import {Overview} from './Overview';
import {Feedback} from '../Feedback/Feedback';
import {SpecificationsMain} from '../Specifications/components/SpecificationsMain';
import {dataForMainSpecifications as data} from '../../../data/items';
import styles from './General.module.scss';
import React from 'react';
import {CardRow} from "../../UI/blocks/CardRow/CardRow";
import {PresentationsIphone} from "./Presentations/PresentationsIphone";

export const General = React.memo(({changeTab}) => {
    console.log('General');
    return (
        <div className={styles.general}>
            <Overview/>
            <PresentationsIphone/>
            <SpecificationsMain data={data}/>
            <h1 className={styles.title}>
                Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)
            </h1>
            <Feedback changeTab={changeTab} shortType/>
        </div>
    );
});
