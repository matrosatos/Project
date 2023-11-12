import styles from './Header.module.scss';
import {useState} from 'react';
import {Button} from '../UI/Button/Button';
import {ReactComponent as Catalogue} from '../../assets/icons/catalogue.svg';
import {SearchBar} from '../UI/SearchBar/SearchBar';
import {LanguageSwitcher} from '../UI/LanguageSwitcher/LanguageSwitcher';
import {Icon} from '../UI/Icon/Icon';
import logo from '../../assets/logo/logo-black.png';
import {Link} from "react-router-dom";
import { MenuCatalogue } from '../MenuCatalogue/MenuCatalogue';

export const Header = () => {
    let [isShow, setIsShow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showOverlay = () => {
        setIsShow(true);
    };

    const hideOverlay = () => {
        setIsShow(false);
    };

    const onOpenMenuCatalogue = () => {
      setIsMenuOpen(!isMenuOpen)
      
    }

    return (
        <>
            <header
                className={`${styles.header} ${isShow ? styles.header_open : ''}`}
            >
                <div className='wrapper'>
                    <div className={styles.inner}>
                        <Link to={'/'}>
                            <img src={logo} alt="Logotype"/>
                        </Link>
                        <Button 
                          icon={<Catalogue/>} 
                          className={styles.button}
                          onClick={onOpenMenuCatalogue}
                        >
                          Catalogue
                        </Button>

                        {isMenuOpen && <MenuCatalogue isOpenCatalog={setIsMenuOpen}/>}

                        <SearchBar/>
                        <LanguageSwitcher/>
                        <Icon type='user'/>
                        <Icon type='like'/>
                        <Icon type='compare'/>
                        <Icon type='cart'/>
                        {/*<HeaderItem isActive showOverlay={showOverlay}>*/}
                        {/*    Burger*/}
                        {/*</HeaderItem>*/}
                        {/*<HeaderItem isActive showOverlay={showOverlay}>*/}
                        {/*	Searchbar*/}
                        {/*</HeaderItem>*/}
                        {/*<HeaderItem isActive showOverlay={showOverlay}>*/}
                        {/*	Cart*/}
                        {/*</HeaderItem>*/}
                    </div>
                </div>
            </header>
            <div
                onClick={hideOverlay}
                className={`${styles.overlay} ${isShow ? styles.overlay_open : ''}`}
            />
        </>
    );
};

const HeaderItem = ({showOverlay, children}) => {
    return <div onClick={showOverlay}>{children}</div>;
};
