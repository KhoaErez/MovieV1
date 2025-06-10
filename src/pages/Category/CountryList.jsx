import { Pagination } from 'react-bootstrap';
import MovieList from '../../components/movie-list/MovieList';
import Paginations from '../../components/pagination/Paginations.jsx'
import { ApiQuocGia } from '../../api/Axios.jsx';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const CountryList = () => {
    const [countryMovies, setCountryMovies] = useState()
    const navigate = useNavigate()
    let [paramPage] = useSearchParams()
    let param = useParams()

    let currentPage = parseInt(paramPage.get('page')) || 1

    const onPageChange = (page) => {
        navigate(`/quoc-gia/${param.id}?page=${page}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            const apiCountry = await ApiQuocGia({ quocgia: param.id, page: currentPage })
            setCountryMovies(apiCountry)
        }
        document.title = "Quốc gia";

        fetchData()
    }, [param, currentPage])
    // console.log('param : ', param)
    return (
        <>
            <MovieList countryMovies={countryMovies} />
            <Paginations currentPage={currentPage} totalPages={countryMovies?.paginate?.total_page} onPageChange={onPageChange} />
        </>
    )
}

export default CountryList;