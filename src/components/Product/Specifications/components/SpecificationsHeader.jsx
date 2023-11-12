import styles from '../Specifications.module.scss';
import iphone from '../../../../assets/icons/full-iphone.png';
import React from 'react';
import {mainProductInfo} from '../../../../data/items';
import {CartBlock, CreditBlock, MainInfo} from '../../General/Overview';

export const SpecificationsHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src={iphone} alt=''/>
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)
                    </h1>
                    <MainInfo data={mainProductInfo} className={styles.grids}/>
                </div>
            </div>
            <div className={styles.buy}>
                <CartBlock type='small' className={styles.cart_block}/>
                <CreditBlock bankCounts={2} className={styles.credit}/>
            </div>
        </div>
    );
};
