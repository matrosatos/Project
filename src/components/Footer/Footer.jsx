import css from './Footer.module.scss';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
// import { ReactComponent as Ua } from '../../assets/icons/UA.svg';
// import { ReactComponent as En } from '../../assets/icons/EN.svg';

export const Footer = () => {
	return (
		<div className={css.footer}>
			<div className='wrapper'>
				<div className={css.contacts}>
					<div className={css.footer_left}>
						<div className={css.logo}></div>
						<div className={css.slogan}>Simplify Your Tech Journey</div>
						{/*<div className={css.localisation}>*/}
						{/*	<En fill='white' size={26} />*/}
						{/*	<Ua fill='white' size={26} />*/}
						{/*</div>*/}
						<div className={css.icons}>
							<Instagram fill='white' size={24} />
							<Twitter fill='white' size={24} />
							<Facebook fill='white' size={24} />
						</div>
					</div>
					<div className={css.menu}>
						<p>menu1</p>
						<p>menu2</p>
						<p>menu3</p>
						<p>menu4</p>
						<p>menu5</p>
					</div>
					<div className={css.menu2}>
						<p>menu6</p>
						<p>menu7</p>
						<p>menu8</p>
						<p>menu9</p>
						<p>menu10</p>
					</div>
				</div>
				<div className={css.rights}>
					<p className={css.text}>TECH EASE 2023. All Rights Reserved.</p>
					<div className={css.policy}>
						<p className={css.bottom_text}>Cookie Policy</p>
						<p className={css.bottom_text}>Privacy Policy</p>
					</div>
				</div>
			</div>
		</div>
	);
};
