import React, {useEffect, useState} from 'react';
import css from './TabContainer.module.scss';
import cs from 'classnames';
import {CSSTransition} from 'react-transition-group';

export const Tabs = React.memo(({tabsArray, activeTab = 0, setActiveTab, ...props}) => {
    // If activeTab exists, it means this tabs controls from the outside
    // Otherwise, it controls by 'active'
    const [active, setActive] = useState(activeTab);
    console.log("Tabs");

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [activeTab])

    const openTab = (e) => {
        if (activeTab) {
            setActiveTab(+e.target.dataset.index);
        } else {
            setActive(+e.target.dataset.index);
        }
    };

    return (
        <div {...props}>
            <div className={css.container}>
                {tabsArray.map((item, i) => (
                    <button
                        className={cs(css.btn, {[css.active]: i === Number(active || activeTab)})}
                        onClick={openTab}
                        data-index={i}
                        key={i}
                    >
                        {item.tabName}
                    </button>
                ))}
            </div>
            {tabsArray.map((tab, index) => {
                return (
                    <TabWrapper
                        key={index}
                        content={tab.content}
                        isActive={index === (active || activeTab)}
                    />
                );
            })}
        </div>
    );
});

const transitionClasses = {
    enter: css.enter,
    enterActive: css.enterActive,
    exit: css.exit,
    exitActive: css.exitActive,
};

const TabWrapper = React.memo(({content, isActive}) => {
    return (
        <CSSTransition
            in={isActive}
            timeout={400}
            classNames={transitionClasses}
            unmountOnExit
        >
            {content}
        </CSSTransition>
    );
});
