import styles from './Price.module.scss';
import {ToolTip} from '../Tooltip/Tooltip';
import cs from "classnames";

export const Price = ({size = 'small', actual, old, discountPercent}) => {
    const defaultStyles = cs(
        styles.price,
        styles[`${size}`],
    );

    return (
        <div className={defaultStyles}>
            <div className={styles.price_old}>{old}</div>
            <div className={styles.price_value}>
                <span className={styles.price_actual}>{actual}</span>
                <div className={styles.price_discount}
                    // data-tooltip-id="price-tooltip"
                    // data-tooltip-content='Promo offer'
                >
                    <ToolTip text={'Promotional offer'} position='top'>
                        <div className={styles.price_discount_value}>
                            -{discountPercent}%
                        </div>
                    </ToolTip>
                </div>
                {/*<Tooltip place='top' id="price-tooltip" isOpen={true}/>*/}

            </div>
        </div>
    );
};
