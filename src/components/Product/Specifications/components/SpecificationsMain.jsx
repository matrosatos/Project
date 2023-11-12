import css from './Specifications.module.scss';
import {ToolTip} from '../../../UI/Tooltip/Tooltip';
import {ReactComponent as HelpCircle} from '../../../../assets/icons/help-circle.svg';
import {ReactComponent as ReadMore} from '../../../../assets/icons/readMore.svg';
import {Button} from '../../../UI/Button/Button';
import {Tooltip} from "react-tooltip";

export const SpecificationsMain = ({data, type}) => {
    return (
        <div className={type === 'short' ? css.tableShort : css.table}>
            <h2 className={type === 'short' ? css.table_titleShort : css.table_title}>
                Main specifications
            </h2>
            <ul className={css.table_wrapper}>
                {data.map((item, index) => (
                    <li key={index}>
                        <div className={css.list_item_info}>
                            <p
                                className={
                                    type === 'short' ? css.table_featureShort : css.table_feature
                                }
                            >
                                {item.name}
                            </p>
                            <p className={css.table_data}>{item.value}</p>
                        </div>

                        {/*Відображати якщо є текст підказки*/}
                        {type !== 'short' && (
                            <>
                                <div data-tooltip-id="main-specification"
                                     data-tooltip-content="Random-access memory, or RAM, is one of the most important parts of your computer. It provides high-speed, short-term memory for your computer\'s CPU. The amount of computer memory you need depends on what you use your computer for, but 12 GB of RAM is a good general minimum standard.">
                                    <HelpCircle/>
                                </div>
                                <Tooltip className={css.tooltip} place='left' id="main-specification"/>
                            </>

                            // <ToolTip text={'Example text'}>
                            //     <HelpCircle/>
                            // </ToolTip>
                        )}
                    </li>
                ))}
            </ul>
            <Button
                variant='outlined'

                // onClick={}
                className={css.readMore}
                icon={<ReadMore fill='var(--bright-purple)'/>}
            >
                Read All
            </Button>
        </div>
    );
};
