// import { Icon } from '../UI/Icon/Icon';
import styles from './CatalogueGoods.module.scss'
import cs from 'classnames'
// import iconBtn from '../../assets/icons/read-more.svg';

const GoodsContent = ({model, menuHight, paddingCategorie}) => {
  const heightItem = 20;
  const heightTitle = 24;
  const heightButtShow = 34;
  const modelVisibleItems = model?.slice(0, ( menuHight - heightTitle - heightButtShow - paddingCategorie)/ heightItem) ?? [];

  return (
    <div>
      <ul
        className={styles.menu__goods__categorie} 
      >
        {modelVisibleItems
          .map((item) => (
            <li
              id={item} 
              className={styles.text__goods_item}
            >
              {item}
            </li>
        ))}
      </ul>
      {model?.length > modelVisibleItems.length 
        && <button className={styles.show_all}>Show All</button>}
    </div>)
}


export const CatalogueGoods = ({
  menuHight,
  activeItem,
  paddingCategorie
}) => {


  return (
    <div 
      className={styles.wrapper_goods}
    >
      {activeItem.goods.map((goods) => (
        <div 
          id={goods.brand}
          className={styles.menu__goods}
        >
          <div className={styles.text__goods_title}>{goods.brand}</div>
          <GoodsContent 
            model={goods.model} 
            menuHight={menuHight} 
            paddingCategorie={paddingCategorie} 
          />
        </div>
      ))}
    </div>
  )
}