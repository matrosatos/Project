import omit from "lodash.omit"
import {useLocation, useNavigate} from "react-router-dom";
import {useCallback, useMemo} from "react";
import {getObjectFromQueryString} from "../helpers/getObjectFromQueryString";
import {getQueryStringFromObject} from "../helpers/getQueryStringFromObject";

export const useFilterQuery = (getFilterQuery, getSearchQuery) => {

    const {search} = useLocation();
    const history = useNavigate();

    const filter = useMemo(() =>
            // используем функцию переданную через параметры или дефолтную
            (getFilterQuery ? getFilterQuery(search) : getObjectFromQueryString(search)),
        [search, getFilterQuery]
    );

    const setSearchQuery = useCallback((filter) => {
            // используем функцию переданную через параметр или дефолтную
            const search = getSearchQuery
                ? getSearchQuery(filter)
                : getQueryStringFromObject(filter).toString();

            history({search}, {replace: true})
        },
        [history, getSearchQuery]
    );

    const changeFilter = useCallback((fieldName) => (value) => {
            console.log(value);
            // if (value.target.value) {
            //     value = value.target.value;
            // }
            const newValue = value.target.value || value;
            const newFilter = {...filter, [fieldName]: newValue};

            setSearchQuery(newFilter);
        },
        [filter, setSearchQuery]
    );

    const changeFilterByEvent = useCallback((fieldName) => (event) => {

            const value = event.target.value;
            console.log(value);
            const newFilter = {...filter, [fieldName]: value};

            setSearchQuery(newFilter);
        },
        [filter, setSearchQuery]
    );

    const clearFilter = useCallback((fieldName) => () => {
            const newFilter = omit(filter, fieldName);

            setSearchQuery(newFilter);
        },
        [filter, setSearchQuery]
    );
    // возвращаем сам фильтр и две функции ля его изменения
    return {filter, changeFilter, changeFilterByEvent, clearFilter};
}