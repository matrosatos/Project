import styles from './SearchBar.module.scss';
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";
import {useState} from "react";
import {SearchInput} from "./SearchInput/SearchInput";
import {SearchResultsList} from "./SearchResultsList/SearchResultsList";

export const SearchBar = () => {
    const [results, setResults] = useState([]);

    console.log(results);

    return <div className={styles.main}>
        <SearchInput setResults={setResults}/>
        <SearchIcon className={styles.icon}/>
        {/*<SearchResultsList results={results}/>*/}
        {results && results.length > 0 && <SearchResultsList results={results}/>}
    </div>;
};