import css from './PresentationsIphone.module.scss';
import photo from '../../../../assets/iphone/back-frontfullphone.jpg';
import photo2 from '../../../../assets/iphone/bigcamera.jpg';
import photo3 from '../../../../assets/iphone/back+fronthalf.jpg';
import photo4 from '../../../../assets/iphone/magsafeaccessories.jpg';
import photo51 from '../../../../assets/iphone/dynamic-island-cropped.jpg';
import photo52 from '../../../../assets/iphone/always-on-display-cropped.jpg';
import photo53 from '../../../../assets/iphone/a16-boinic-chip.jpg';
import photo55 from '../../../../assets/iphone/iphone-14-pro-car-crash.jpg';
import photo61 from '../../../../assets/iphone/iphone14profull.jpg';
import photo62 from '../../../../assets/iphone/usbclightningcable.jpg';
import logoIphone from '../../../../assets/iphone/iphone14pro-svg-text.png';

export const PresentationsIphone = () => {
    return (
        <div className={css.presentations}>
            <div className={css.photo}>
                <h2 className={css.photo_title}>
                    <img src={logoIphone} alt='logo'/>
                </h2>
                <div className={css.photo_iphone}>
                    <img src={photo} alt='Iphone'/>
                </div>
            </div>
            <div className={css.photo2}>
                <h2 className={css.photo2_title}>
                    Incredible detailing thanks to the 48 MP main camera
                </h2>
                <div className={css.photo2_iphone}>
                    <img src={photo2} alt='Iphone'/>
                </div>
            </div>
            <div className={css.photo3}>
                <div className={css.photo3_wrapper}>
                    <h2 className={css.photo3_title}>
                        A completely new way of using iPhone thanks to Dynamic Island and
                        always-on display
                    </h2>
                </div>
                <div className={css.photo3_wrapper2}>
                    <div className={css.photo3_iphone}>
                        <img src={photo3} alt='Iphone'/>
                    </div>
                </div>
            </div>
            <div className={css.photo4}>
                <div className={css.photo4_wrapper}>
                    <h2 className={css.photo4_title}>MagSafe accessories</h2>
                    <p className={css.photo4_text}>
                        Support for MagSafe accessories that instantly magnetize and provide
                        fast wireless charging
                    </p>
                </div>
                <div className={css.photo4_wrapper2}>
                    <div className={css.photo4_iphone}>
                        <img src={photo4} alt='Iphone'/>
                    </div>
                </div>
            </div>
            <div className={css.photo5}>
                <div className={css.photo5_left}>
                    <div className={css.photo5_wrapper}>
                        <div className={css.photo5_card1}>
                            <h2 className={css.photo5_title}>
                                <span className={css.photo5_gradient}>Dynamic Island,</span>
                                an amazing way to interact with your iPhone
                            </h2>

                            <img src={photo51} alt='Iphone'/>
                        </div>
                    </div>
                    <div className={css.photo5_wrapper}>
                        <div className={css.photo5_card2}>
                            <h2 className={css.photo5_title2}>
                                <span className={css.photo5_gradient}>Always on display</span>
                                everything at a glance
                            </h2>

                            <img src={photo52} alt='Iphone'/>
                        </div>
                    </div>
                </div>
                <div className={css.photo5_right}>
                    <div className={css.photo53_wrapper}>
                        <img src={photo53} alt='Iphone'/>

                        <h2 className={css.photo53_title}>
                            <span className={css.photo53_gradient}>A16 bionic,</span>
                            an awesome smartphone chip
                        </h2>
                    </div>
                    <div className={css.photo54_wrapper}>
                        <div className={css.photo54_bg}>
                            <h2 className={css.photo54_title}>
                                The main camera is 48 MP. Up to 4x higher resolution. The
                                framing is fascinating
                            </h2>
                        </div>
                    </div>
                    <div className={css.photo55_wrapper}>
                        <div className={css.photo55_card3}>
                            <h2 className={css.photo55_title}>
                                <span className={css.photo55_gradient}>Crash detection</span>
                                calls help when you're down
                            </h2>
                            <div className={css.photo55_phone}>
                                <img src={photo55} alt='Iphone'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.photo6}>
                <div className={css.photo6_wrapper}>
                    <h2 className={css.photo6_title}>What's included?</h2>
                </div>
                <div className={css.photo6_wrapper2}>
                    <div className={css.photo61_iphone}>
                        <img src={photo61} alt='Iphone'/>
                        <h3 className={css.photo6_name}>iPhone 14 Pro</h3>
                    </div>
                    <div className={css.photo62_iphone}>
                        <img src={photo62} alt='Iphone'/>
                        <h3 className={css.photo6_name}>USB-C/Lightning Cable</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const Presentations = ({ photos }) => {
// 	return (
// 		<div className={css.photo}>
// 			Presentations
// 			{photos.map((photo) => (
// 				<div>
// 					<h2 className={css.photo_title}>{photo.title}</h2>
// 					<p className={css.photo_details}>{photo.details} </p>
// 					<div className={css.photo_wrapper}>
// 						<img src={src} alt={photo.details} />
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// };
