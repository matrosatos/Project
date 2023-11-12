import React from 'react';
import styles from '../General/General.module.scss';
import {Overview} from '../General/Overview';
import {SpecificationsMain} from './components/SpecificationsMain';
import {specifications} from '../../../data/items';
import {Feedback} from '../Feedback/Feedback';
import {CardRow} from '../../UI/blocks/CardRow/CardRow';
import {SpecificationsFull} from './components/SpecificationsFull';
import {SpecificationsHeader} from './components/SpecificationsHeader';

export const Specifications = React.memo(({changeTab}) => {
    console.log('Specifications');
    return (
        <div>
            <SpecificationsHeader/>
            <SpecificationsFull specifications={specifications}/>
        </div>
    );
});
