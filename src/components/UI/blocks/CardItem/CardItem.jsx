import styles from './CardItem.module.scss';
import {ReactComponent as Star} from '../../../../assets/icons/star.svg';
import {ReactComponent as Cart} from '../../../../assets/icons/cart.svg';

import src from './iphone.png';
import cs from 'classnames';
import {useState} from 'react';
import {ToolTip} from '../../Tooltip/Tooltip';
import {Icon} from "../../Icon/Icon";

export const CardItem = ({data}) => {
    const [activeItem, setActiveItem] = useState(data[0]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.btn_group}>
                        <Icon type='like'/>
                        <Icon type='compare'/>
                    </div>

                    <div className={styles.image_block}>
                        <img src={src} alt=''/>
                    </div>
                    <div className={styles.colors}>
                        {data.map((item, index) => (
                            <span
                                key={index}
                                onClick={() => setActiveItem(item)}
                                className={cs(styles.color, {
                                    [styles.color_active]: item.id == activeItem.id,
                                })}
                                style={{backgroundColor: item.colorValue}}
                            ></span>
                        ))}
                    </div>
                    <h3 className={styles.name}>{activeItem.name}</h3>
                    <div className={styles.reviews}>
                        {new Array(5).fill().map((_, index) => (
                            <Star
                                key={index}
                                className={cs({
                                    [styles.star_disabled]: activeItem.rating <= index,
                                })}
                            />
                        ))}
                        <span className={styles.review}>
						{activeItem.reviews} review{activeItem.reviews > 1 && 's'}
					</span>
                    </div>

                    <div className={styles.buy}>
                        <div className={styles.price}>
                            <div className={styles.price_value}>69 999</div>
                            <div className={styles.price_old}>75 999</div>
                            <div className={styles.price_discount}>
                                <ToolTip text={'Promotional offer'}>
                                    <div className={styles.price_discount_value}>-8%</div>
                                </ToolTip>
                            </div>
                        </div>

                        <button className={styles.cart}>
                            <Cart/>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};
