import { Pagination } from 'react-bootstrap';
import MovieList from '../../components/movie-list/MovieList';
import Paginations from '../../components/pagination/Pagination.jsx'

const CountryList = () => {
    return (
        <>
            <MovieList />
            <Paginations />
        </>

    )
}

export default CountryList;