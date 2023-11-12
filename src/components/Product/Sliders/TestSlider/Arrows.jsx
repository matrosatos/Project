import {useSwiper} from 'swiper/react';
import styles from "./TestSlider.module.scss";
import React from "react";
import {Icon} from "../../../UI/Icon/Icon";

export function SlideButtons() {
    const swiper = useSwiper();

    return (
        <>
            <div className={styles.nav_prev}>
                <Icon className={styles.arrow} onClick={() => swiper.slidePrev()} type='arrow-right'/>
            </div>
            <div className={styles.nav_next}>
                <Icon className={styles.arrow} onClick={() => swiper.slideNext()} type='arrow-right'/>
            </div>

            {/*<Icon className={styles.nav_next} onClick={() => swiper.slideNext()} type='arrow-right'/>*/}
        </>);
}