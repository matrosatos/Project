import styles from './LanguageSwitcher.module.scss'
import cs from 'classnames'
import {useState} from "react";

export const LanguageSwitcher = ({locale = 'en', theme = 'light'}) => {
    const [activeLang, setActiveLang] = useState(locale);

    const handleLanguageToggle = () => {
        setActiveLang((prevLang) => (prevLang === 'en' ? 'ua' : 'en'));
    };

    return (
        <div className={cs(styles.toggle, styles[`toggle_${theme}`])}>
            <div className={styles.btn_wrapper}>
                <div
                    className={cs(styles.activeBg, styles[`activeBg_${theme}`], styles[activeLang])}
                    onClick={handleLanguageToggle}
                />
                <button
                    className={cs(styles.toggle_button, styles[`toggle_button_${theme}`], {[styles.active]: activeLang === 'en'})}
                    onClick={handleLanguageToggle}
                >
                    EN
                </button>
                <button
                    className={cs(styles.toggle_button, styles[`toggle_button_${theme}`], {[styles.active]: activeLang === 'ua'})}
                    onClick={handleLanguageToggle}
                >
                    UA
                </button>
            </div>
        </div>
    );
};