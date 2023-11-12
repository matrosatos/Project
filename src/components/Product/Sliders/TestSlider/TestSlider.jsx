import {useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

import styles from './TestSlider.module.scss';
import {Navigation, Thumbs} from 'swiper/modules';
import {SlideButtons} from "./Arrows";
import {imagesURLArray as data} from '../../../../data/items';

export function TestSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={styles.main}>
            <Swiper
                thumbs={{swiper: thumbsSwiper}}
                modules={[Thumbs]}
                className={styles.swiperMain}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <img src={item}/>
                    </SwiperSlide>))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={5}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className={styles.swiperSide}
                direction={'vertical'}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className={styles.slide2}>
                        <img src={item}/>
                    </SwiperSlide>))
                }
                <SlideButtons/>
            </Swiper>
        </div>
    );
}
