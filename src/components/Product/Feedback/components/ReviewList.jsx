import {useState} from 'react';
import styles from '../Feedback.module.scss';
import {SearchInput} from '../../../UI/SearchBar/SearchInput/SearchInput';
import {ReactComponent as SearchIcon} from '../../../../assets/icons/search.svg';
import {Icon} from '../../../UI/Icon/Icon';
import {ReactComponent as ReturnArrow} from '../../../../assets/icons/return-arrow.svg';
import {Button} from '../../../UI/Button/Button';
import review_img from '../../../../assets/temp/review_img.jpg';
import {StarsRating} from '../../../UI/Rating/StarsRating';

const text = `Hi Misha, I am very sorry that you are having difficulties with your purchase. Most often, problems with overheating occur due to background programs, stored cache and insufficient ventilation of the device. So please follow these steps to reduce the temperature of your device:
  
  1. Clear your app cache and delete any unused files to free up space and potentially improve performance 
  
  2. Make sure that the smartphone is not covered by cases or accessories during use, as this can trap heat. Also, avoid using the phone on soft surfaces such as beds or couches, which may block the device's ventilation.      
               
  3. Make sure you don't have too many background apps running. Programs running in the background can consume processing power and cause the device to heat up. Close any unnecessary programs or processes.`;
const searchVariants = ['Relevance', 'Newest', 'Best', 'Worst'];

const SearchHeader = ({setResults}) => {
    return (
        <>
            <div className={styles.search}>
                <SearchInput className={styles.search_input} setResults={setResults}/>
                <SearchIcon className={styles.icon}/>
            </div>
            {searchVariants.map((item, index) => (
                <span key={index} className={styles.list_variant}>{item}</span>
            ))}
        </>
    );
};

const EvaluateReview = ({to, likeHandler, dislikeHandler}) => {
    return (
        <div className={styles.list_item_evaluate}>
            <button className={styles.reply}>Reply TechEase representative</button>
            <div className={styles.reactions}>
                <Icon type='thumb-up' size='small' className={styles.like}/>
                <Icon type='slash' size='small'/>
                <Icon type='thumb-up' size='small' className={styles.like}/>
            </div>
        </div>
    );
};

const ReviewItem = ({data}) => {
    const {
        id,
        author: mainAuthor,
        rating,
        days_ago,
        text,
        positive,
        negative,
        images,
        reply,
    } = data;
    return (
        <div className={styles.list_item}>
            <div className={styles.list_item_top}>
                <div className={styles.item_rating}>
                    {rating && <StarsRating size={24} readonly initialValue={5}/>}
                    <span className={styles.item_author}>{mainAuthor}</span>
                </div>
                <span className={styles.item_date}>{days_ago} days ago</span>
            </div>
            <p className={styles.list_item_comment}>{text}</p>
            {(positive || negative) && (
                <div className={styles.list_item_marks}>
                    {positive && (
                        <div className={styles.positive_comment}>
                            <Icon size='small' type='plus' className={styles.marks_icon}/>
                            <p className={styles.list_item_comment}>{positive}</p>
                        </div>
                    )}
                    {negative && (
                        <div>
                            <Icon size='small' type='minus' className={styles.marks_icon}/>
                            <p className={styles.list_item_comment}>{negative}</p>
                        </div>
                    )}
                </div>
            )}
            {images && images.length > 0 && (
                <div className={styles.list_item_gallery}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Test Image`}/>
                    ))}
                </div>
            )}
            <EvaluateReview to={mainAuthor}/>
            {/*Reply*/}
            {reply.length > 0 &&
                reply.map((replyItem) => {
                    const {id, author, days_ago, text} = replyItem;

                    return (
                        <>
                            <div className={styles.divider}/>
                            <div key={id} className={styles.list_item_top}>
                                <div className={styles.item_rating}>
                                    <button className={`${styles.reply} ${styles.reply_to}`}>
                                        <ReturnArrow/> <span>Reply to {mainAuthor}</span>
                                    </button>
                                    <span className={styles.item_author}>{author}</span>
                                </div>
                                <span className={styles.item_date}>{days_ago} days ago</span>
                            </div>
                            <p className={styles.list_item_comment}>{text}</p>
                            <EvaluateReview to={author}/>
                        </>
                    );
                })}
        </div>
    );
};

const reviews = [
    {
        id: 1,
        author: 'Daria',
        rating: 5,
        days_ago: 2,
        text: 'Just received a phone. The A15 chip makes it super fast, and the camera is unreal! Love how it performs in low light. The sleek design is a head-turner. Battery life seems solid too. So far, its exceeding my expectations. Impressed! 👍',
        positive:
            'The best phone to take pictures on the market. Battery, service, works all day. Stunning performance!',
        negative:
            'Pretty expensive and heavy to hold. Sometimes gets too warm, especially when its hot outside.',
        images: [],
        reply: [],
    },
    {
        id: 2,
        author: 'Sashko M.',
        rating: 5,
        days_ago: 8,
        text: 'Gaming on this phone is unmatched! A15 chip rocks for seamless play, stunning visuals. Camera excels in any light. Sleek design, long battery. Best gaming performance, but the phone itself could cost less.',
        positive:
            'The best phone to take pictures on the market. Battery, service, works all day. Stunning performance!',
        negative:
            'Pretty expensive and heavy to hold. Sometimes gets too warm, especially when its hot outside.',
        images: [review_img],
        reply: [],
    },
    {
        id: 3,
        author: 'Misha',
        rating: 4,
        days_ago: 9,
        text: 'Just received a phone. The A15 chip makes it super fast, and the camera is unreal! Love how it performs in low light. The sleek design is a head-turner. Battery life seems solid too. So far, its exceeding my expectations. Impressed! 👍',
        positive: null,
        negative:
            'Pretty expensive and heavy to hold. Sometimes gets too warm, especially when its hot outside.',
        images: [],
        reply: [
            {
                id: 31,
                author: 'TechEase representative',
                days_ago: 9,
                text: text,
            },
        ],
    },
];
const questions = [
    {
        id: 1,
        author: 'Daria',
        days_ago: 2,
        text: 'Just received a phone. The A15 chip makes it super fast, and the camera is unreal! Love how it performs in low light. The sleek design is a head-turner. Battery life seems solid too. So far, its exceeding my expectations. Impressed! 👍',
        reply: [
            {
                id: 31,
                author: 'TechEase representative',
                days_ago: 9,
                text:
                    'Hi Oleksii, the iPhone 14 Pro Max brings several exciting upgrades over its predecessors.\n' +
                    '\n' +
                    'One notable improvement is the enhanced camera system, featuring advanced computational photography and better low-light performance, allowing you to capture stunning photos and videos even in challenging conditions.\n' +
                    'The display quality has also been enhanced with improved brightness and color accuracy, providing a more immersive viewing experience.\n' +
                    'Additionally, the iPhone 14 Pro Max boasts a more powerful processor, resulting in faster performance for multitasking, gaming, and app usage.\n' +
                    "The device also supports the latest connectivity standards, ensuring you're ready for future network advancements.\n" +
                    '\n' +
                    'Overall, the iPhone 14 Pro Max offers a compelling blend of cutting-edge technology and user-friendly features for a top-tier smartphone experience.',
            },
        ],
    },
    {
        id: 2,
        author: 'Petro',
        days_ago: 3,
        text: 'Just received a phone. The A15 chip makes it super fast, and the camera is unreal! Love how it performs in low light. The sleek design is a head-turner. Battery life seems solid too. So far, its exceeding my expectations. Impressed! 👍',
        reply: [
            {
                id: 32,
                author: 'TechEase representative',
                days_ago: 10,
                text:
                    'Hi Oleksii, the iPhone 14 Pro Max brings several exciting upgrades over its predecessors.\n' +
                    '\n' +
                    'One notable improvement is the enhanced camera system, featuring advanced computational photography and better low-light performance, allowing you to capture stunning photos and videos even in challenging conditions.\n' +
                    'The display quality has also been enhanced with improved brightness and color accuracy, providing a more immersive viewing experience.\n' +
                    'Additionally, the iPhone 14 Pro Max boasts a more powerful processor, resulting in faster performance for multitasking, gaming, and app usage.\n' +
                    "The device also supports the latest connectivity standards, ensuring you're ready for future network advancements.\n" +
                    '\n' +
                    'Overall, the iPhone 14 Pro Max offers a compelling blend of cutting-edge technology and user-friendly features for a top-tier smartphone experience.',
            },
        ],
    },
];

export const ReviewList = ({type = 'reviews', shortType = false, changeTab}) => {
    const res = type === 'reviews' ? reviews : questions;
    const [results, setResults] = useState(res);
    const reviewsCount = shortType ? 2 : reviews.length;

    return (
        <div className={styles.list}>
            <div className={styles.list_header}>
                {shortType ? (
                    <h5>Customer {type}</h5>
                ) : (
                    <SearchHeader setResults={setResults}/>
                )}
            </div>
            <div className={styles.list_items}>
                {results.map((review, index) => {
                    if (index < reviewsCount) {
                        return <ReviewItem key={review.id} data={review}/>;
                    }
                })}
                {shortType && (
                    <Button
                        variant='outlined'
                        icon={<Icon size='tiny' type='plus'/>}
                        className={styles.load_more}
                        onClick={() => changeTab(2)}
                    >
                        Load More
                    </Button>)
                }

            </div>
        </div>
    );
};
