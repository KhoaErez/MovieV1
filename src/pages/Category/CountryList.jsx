import { Pagination } from 'react-bootstrap';
import MovieList from '../../components/movie-list/MovieList';
import Paginations from '../../components/pagination/Pagination.jsx'
import { ApiQuocGia } from '../../api/Axios.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryList = () => {
    const [countryMovies, setCountryMovies] = useState()
    let param = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const apiCountry = await ApiQuocGia({ quocgia: param.id })
            setCountryMovies(apiCountry)
        }

        fetchData()
    }, [param])
    // console.log('param : ', param)
    return (
        <div>
            <MovieList countryMovies={countryMovies} />
            <Paginations />
        </div>
    )
}

export default CountryList;