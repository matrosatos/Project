import styles from './SearchResultsList.module.scss';

export const SearchResultsList = ({results}) => {
    return <div className={styles.list}>
        {results.map((item, index) => <div>Result{index}</div>)}
    </div>;
};