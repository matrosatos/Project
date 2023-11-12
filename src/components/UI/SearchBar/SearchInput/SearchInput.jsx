import styles from "./SearchInput.module.scss";
import {useDebounce} from "../../../../hooks/useDebounce";
import {useEffect, useState} from "react";
import cs from "classnames";

export const SearchInput = ({setResults, className}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        // search the api

        async function fetchData() {
            // setLoading(true);

            setResults([]);

            const data = await fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json());

            setResults(data);
            console.log(data);
            // setLoading(false);
        }

        if (debouncedSearchTerm) fetchData();
    }, [debouncedSearchTerm]);


    return <input
        type="text"
        placeholder="Search.."
        className={cs(styles.input, className)}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />;
};