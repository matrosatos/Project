import {CardItem} from '../CardItem/CardItem';
import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import 'swiper/scss/navigation';
import styles from './CardRow.module.scss';
import {Scrollbar, Navigation} from 'swiper/modules';
import {Icon} from '../../Icon/Icon';

export const CardRow = ({title}) => {
    const data = [
        {
            id: 1,
            colorName: 'green',
            colorValue: '#333',
            image: 'png',
            name: 'Apple iPhone 14 Pro Max 512GB Deep Purple...',
            price: 69999,
            oldPrice: 75999,
            rating: 4,
            reviews: 244,
            discount: 8,
        },
        {
            id: 2,
            colorName: 'red',
            colorValue: '#666',
            image: '/iphone.png',
            name: 'Apple iPhone 14 Pro Max 512GB Purple...',
            price: 79999,
            oldPrice: 85999,
            rating: 5,
            reviews: 245,
            discount: 9,
        },
        {
            id: 3,
            colorName: 'red',
            colorValue: '#666',
            image: '/iphone.png',
            name: 'Apple iPhone 14 Pro Max 512GB Purple...',
            price: 79999,
            oldPrice: 85999,
            rating: 5,
            reviews: 245,
            discount: 9,
        },
    ];
    return (
        <div className={styles.main}>
            <h3>{title}</h3>
            <Swiper
                scrollbar={{
                    hide: true,
                    // horizontalClass: styles.scrollbar,
                    // dragClass: styles.drag,
                }}
                modules={[Scrollbar, Navigation]}
                slidesPerView={5}
                spaceBetween={10}
                className={styles.swiper}
            >
                <SwiperSlide>
                    <CardItem data={data}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem data={data}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem data={data}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem data={data}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem data={data}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem data={data}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem data={data}/>
                </SwiperSlide>
                <SlideButtons/>
            </Swiper>
        </div>
    );
};

function SlideButtons() {
    const swiper = useSwiper();

    return (
        <>
            <Icon
                className={styles.arrow_prev}
                onClick={() => swiper.slidePrev()}
                type='arrow-right'
            />
            <Icon
                className={styles.arrow_next}
                onClick={() => swiper.slideNext()}
                type='arrow-right'
            />
        </>
    );
}
