import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './GallerySlider.module.scss';

// import required modules
import {FreeMode, Navigation, Thumbs, Pagination} from 'swiper/modules';

export function GallerySlider({images}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mainSwiper}
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                </SwiperSlide>
            </Swiper>
            {/*<Swiper*/}
            {/*    onSwiper={setThumbsSwiper}*/}
            {/*    direction={'vertical'}*/}
            {/*    spaceBetween={10}*/}
            {/*    slidesPerView={4}*/}
            {/*    // freeMode={true}*/}
            {/*    watchSlidesProgress={true}*/}
            {/*    modules={[Navigation, Thumbs]}*/}
            {/*    className={styles.sideSwiper}*/}
            {/*>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>*/}
            {/*    </SwiperSlide>*/}
            {/*</Swiper>*/}
            {/*<Swiper*/}
            {/*    direction='vertical'*/}
            {/*    pagination={{*/}
            {/*        clickable: true,*/}
            {/*    }}*/}
            {/*    modules={[Pagination]}*/}
            {/*    className="mySwiper"*/}
            {/*>*/}
            {/*    <SwiperSlide>Slide 1</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 2</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 3</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 5</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 6</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 7</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 8</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 9</SwiperSlide>*/}
            {/*</Swiper>*/}
        </>
    );
}