import css from './Specifications.module.scss';
import {ToolTip} from '../../../UI/Tooltip/Tooltip';
import {ReactComponent as HelpCircle} from '../../../../assets/icons/help-circle.svg';
import {Tooltip} from "react-tooltip";

export const SpecificationsFull = ({specifications}) => {
    console.log(specifications);
    return (
        <div className={css.table}>
            <div className={css.table_wrapper}>
                <ul>
                    {specifications.map((specification) => (
                        <li className={css.specification}>
                            <p className={css.specification_topic}>{specification.label}</p>
                            <ul className={css.list}>
                                {specification.data.map((item) => (
                                    <li className={css.list_item}>
                                        <div className={css.list_item_info}>
                                            <p className={css.table_feature}>{item.name}</p>
                                            <p className={css.table_data}>{item.value}</p>
                                        </div>
                                        <div data-tooltip-id="my-tooltip"
                                             data-tooltip-content="Random-access memory, or RAM, is one of the most important parts of your computer. It provides high-speed, short-term memory for your computer\'s CPU. The amount of computer memory you need depends on what you use your computer for, but 12 GB of RAM is a good general minimum standard.">
                                            <HelpCircle/>
                                        </div>
                                        <Tooltip className={css.tooltip} place='left' id="my-tooltip"/>


                                        {/*Відображати якщо є текст підказки*/}

                                        {/*<ToolTip position='left'*/}
                                        {/*         text={'Random-access memory, or RAM, is one of the most important parts of your computer. It provides high-speed, short-term memory for your computer\'s CPU. The amount of computer memory you need depends on what you use your computer for, but 12 GB of RAM is a good general minimum standard.'}>*/}
                                        {/*    */}
                                        {/*</ToolTip>*/}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
