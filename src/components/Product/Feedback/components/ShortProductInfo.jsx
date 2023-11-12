import styles from '../Feedback.module.scss';
import iphone from '../../../../assets/icons/full-iphone.png';
import {StarsRating} from '../../../UI/Rating/StarsRating';
import {Price} from '../../../UI/Price/Price';
import {Icon} from '../../../UI/Icon/Icon';
import {SpecificationsMain} from '../../Specifications/components/SpecificationsMain';
import {dataForMainSpecifications as data} from '../../../../data/items';

export const ShortProductInfo = ({
                                     img = iphone,
                                     name,
                                     rating = 3.7,
                                     rating_counts = 312,
                                     price,
                                 }) => {
    return (
        <div className={styles.shortProduct}>
            <div className={styles.sticky}>
                <div className={styles.shortProduct_card}>
                    <div className={styles.shortProduct_img}>
                        <img src={iphone} alt=''/>
                    </div>
                    <div className={styles.shortProduct_info}>
                        <p className={styles.shortProduct_name}>
                            Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)
                        </p>
                        <div className={styles.shortProduct_rating}>
                            <StarsRating size={20} readonly initialValue={3.7}/>
                            <span className={styles.shortProduct_rating_value}>(312)</span>
                        </div>
                        <div className={styles.buy}>
                            <Price actual='69 999' discountPercent={8} old='75 999'/>
                            <Icon className={styles.cart} type='cart' size='small'/>
                        </div>
                    </div>
                </div>

                <SpecificationsMain type='short' data={data}/>
            </div>
        </div>
    );
};
