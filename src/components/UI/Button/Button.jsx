import styles from './Button.module.scss';
import cs from 'classnames';
import {useState} from "react";

//variant: text, contained, outlined

export const Button = ({
                           // textSize = 'small',
                           icon,
                           variant = 'contained',
                           children,
                           onClick,
                           className,
                           clickedText,
                           ...props
                       }) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked((prev) => !prev);
        if (onClick) {
            onClick();
        }
    };

    const defaultStyles = cs(
        styles.button,
        // styles[`button_${textSize}`],
        styles[`button_${variant}`],
        {[styles['button-clicked']]: isClicked && clickedText}
    );

    const buttonStyles = className ? cs(defaultStyles, className) : defaultStyles;

    return (
        <button onClick={handleClick} className={buttonStyles}>
            {icon}
            {clickedText ? (isClicked ? clickedText : children) : children}
        </button>
    );
};
