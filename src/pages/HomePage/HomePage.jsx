import {useFilterQuery} from '../../hooks/useFilterQuery';

export const HomePage = () => {
    //test
    const {filter, changeFilter} = useFilterQuery();
    console.log(filter);

    return (
        <div>
            Home Page
            {/*<input type='text' onChange={changeFilter('name')} />*/}
            {/*<input type='text' onChange={changeFilter('surname')} />*/}
        </div>
    );
};
