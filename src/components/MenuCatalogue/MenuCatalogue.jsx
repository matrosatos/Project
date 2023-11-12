import { useState, useRef} from 'react';
import styles from './MenuCatalogue.module.scss';
import iconRight from '../../assets/icons/arrow-right.svg';
import iconPhone from '../../assets/icons/phone.svg';
import iconLaptop from '../../assets/icons/laptop.svg';
import iconHeadphone from '../../assets/icons/headphones.svg';
import iconCharge from '../../assets/icons/charge.svg';
import iconTV from '../../assets/icons/tv.svg';
import iconCamera from '../../assets/icons/camera.svg';
import iconWatch from '../../assets/icons/watch.svg';
import iconWashing from '../../assets/icons/washing machine.svg';
import iconPercentage from '../../assets/icons/percentage.svg';
import { Icon } from '../UI/Icon/Icon';
import cs from 'classnames';
import { CatalogueGoods } from '../CatalogueGoods/CatalogueGoods';

const MENU_CATEGORIES = [
	{
		icon: 'phone',
		title: 'Smartphones and Phones',
		right: iconRight,
		goods: [
			{
				brand: 'Apple',
				model: [
					'iPhone 13 Pro Max',
					'iPhone 13 Pro',
					'iPhone 13',
					'iPhone 13 mini',
					'iPhone 12 Pro Max',
					'iPhone 12 Pro',
					'iPhone 12',
					'iPhone 12 mini',
					'iPhone SE (2nd generation)',
					'iPhone 11 Pro Max',
					'iPhone 11 Pro',
					'iPhone 11',
					'iPhone XR',
					'iPhone XS Max',
					'iPhone XS',
					'iPhone X',
					'iPhone 8 Plus',
					'iPhone 8',
					'iPhone 7 Plus',
					'iPhone 7',
				],
			},
			{
				brand: 'Audio',
				model: [
					'iPhone 13 Pro Max',
					'iPhone 13 Pro',
					'iPhone 13',
					'iPhone 13 mini',
					'iPhone 12 Pro Max',
					'iPhone 12 Pro',
					'iPhone 12',
					'iPhone 12 mini',
					'iPhone SE (2nd generation)',
				],
			},
			{
				brand: 'Laptops and PCs',
				model: [
					'iPhone 13 Pro Max',
					'iPhone 13 Pro',
					'iPhone 13',
					'iPhone 13 mini',
					'iPhone 12 Pro Max',
					'iPhone 12 Pro',
					'iPhone 12',
					'iPhone 12 mini',
					'iPhone SE (2nd generation)',
					'iPhone 11 Pro Max',
					'iPhone 11 Pro',
					'iPhone 11',
					'iPhone XR',
					'iPhone XS Max',
				],
			},
		],
	},
	{
		icon: 'laptop',
		title: 'Laptops and PCs',
		right: iconRight,
		goods: [
			{
				brand: 'Laptops and PCs',
				model: [
					'iPhone 13 Pro Max',
					'iPhone 13 Pro',
					'iPhone 13',
					'iPhone 13 mini',
					'iPhone 12 Pro Max',
					'iPhone 12 Pro',
					'iPhone 12',
					'iPhone 12 mini',
					'iPhone SE (2nd generation)',
					'iPhone 11 Pro Max',
					'iPhone 11 Pro',
					'iPhone 11',
					'iPhone XR',
				],
			},
			{
				brand: 'Apple',
				model: [
					'iPhone 13 Pro Max',
					'iPhone 13 Pro',
					'iPhone 13',
					'iPhone 13 mini',
					'iPhone 12 Pro Max',
					'iPhone 12 Pro',
					'iPhone 12',
					'iPhone 12 mini',
					'iPhone SE (2nd generation)',
					'iPhone 11 Pro Max',
					'iPhone 11 Pro',
					'iPhone 11',
					'iPhone XR',
					'iPhone XS Max',
					'iPhone XS',
					'iPhone X',
				],
			},
		],
	},
	{
		icon: 'headphones',
		title: 'Audio',
		right: iconRight,
		goods: [
			{
				brand: 'Audio',
				model: [
					'iPhone 13 Pro Max',
					'iPhone 13 Pro',
					'iPhone 13',
					'iPhone 13 mini',
					'iPhone 12 Pro Max',
					'iPhone 12 Pro',
					'iPhone 12',
					'iPhone 12 mini',
					'iPhone SE (2nd generation)',
					'iPhone 11 Pro Max',
					'iPhone 11 Pro',
					'iPhone 11',
					'iPhone XR',
					'iPhone XS Max',
					'iPhone XS',
					'iPhone X',
					'iPhone 8 Plus',
					'iPhone 8',
					'iPhone 7 Plus',
					'iPhone 7',
				],
			},
			{
				brand: 'UKr',
				model: [
					'iPhone 13 Pro Max',
					'iPhone 13 Pro',
					'iPhone 13',
					'iPhone 13 mini',
					'iPhone 12 Pro Max',
					'iPhone 12 Pro',
					'iPhone 12',
					'iPhone 12 mini',
					'iPhone SE (2nd generation)',
					'iPhone 11 Pro Max',
					'iPhone 11 Pro',
					'iPhone 11',
				],
			},

			{
				brand: 'Laptops and PCs',
				model: [
					'iPhone 13 Pro Max',
					'iPhone 13 Pro',
					'iPhone 13',
					'iPhone 13 mini',
					'iPhone 12 Pro Max',
					'iPhone 12 Pro',
					'iPhone 11',
					'iPhone XR',
					'iPhone XS Max',
					'iPhone XS',
					'iPhone X',
					'iPhone 8 Plus',
					'iPhone 8',
					'iPhone 7 Plus',
					'iPhone 7',
				],
			},
			{
				brand: 'Apple',
				model: [
					'iPhone 13 Pro Max',
					'iPhone 13 Pro',
					'iPhone 13',
					'iPhone 13 mini',
					'iPhone 12 Pro Max',
					'iPhone 12 Pro',
					'iPhone 12',
					'iPhone 12 mini',
					'iPhone XS',
					'iPhone X',
					'iPhone 8 Plus',
					'iPhone 8',
					'iPhone 7 Plus',
					'iPhone 7',
				],
				goods: [],
			},
		],
	},
	{
		// icon: 'charge',
		title: 'Accessories',
		right: iconRight,
	},
	{
		// icon: iconTV,
		title: 'TVs and Multimedia',
		right: iconRight,
	},
	{
		// icon: iconCamera,
		title: 'Photo and Video',
		right: iconRight,
	},
	{
		// icon: iconWatch,
		title: 'Smart Watches',
		right: iconRight,
	},
	{
		// icon: iconWashing,
		title: 'Household Appliances',
		right: iconRight,
	},
	{
		// icon: iconPercentage,
		title: 'Special Offers',
		right: iconRight,
	},
];

export const MenuCatalogue = ({isOpenCatalog}) => {
	const [activeItem, setActiveItem] = useState({});
  const categoriesRef = useRef(null);
  const heightItem = useRef

  const paddingTopBotInCategorie = 40;
  const sizeCategorie = 40;

	return (
		<div 
      className={styles.menu}
      style={{height: MENU_CATEGORIES.length * sizeCategorie + paddingTopBotInCategorie}}
      ref={categoriesRef}
			onMouseLeave={() => {
        setActiveItem({})
        isOpenCatalog(false)
      }}
    >
			<ul className={styles.menu__categories}>
				{MENU_CATEGORIES.map((categore) => (
 
					<li
						id={categore.title}
						className={cs(styles.menu__categories__li, {
							[styles['menu__disable']]: !categore.goods,
							[styles['menu__active']]: activeItem.title === categore.title,
						})}
						onMouseEnter={() => setActiveItem(categore)}
					>
						<Icon
							type={categore.icon || 'shield'}
							size='small'
							className={styles.menu__categories__icon}
						/>
						<div className={styles.text__categories}>{categore.title}</div>
						<Icon
							type='arrow-right'
							size='small'
							className={`${styles.menu__categories__icon}`}
						/>
					</li>
				))}
			</ul>
      
			{activeItem 
        && 
        activeItem.goods 
        && 
        <CatalogueGoods 
          menuHight={
            categoriesRef?.current
              ? categoriesRef.current.getBoundingClientRect().height
              : 0
          }
          activeItem={activeItem}
          paddingCategorie={paddingTopBotInCategorie}
        />
      }
		</div>
	);
};
