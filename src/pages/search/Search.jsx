import { useNavigate, useSearchParams } from "react-router-dom";
import { ApiSearch } from '../../api/Axios.jsx'
import { useEffect, useState } from "react";
import MovieList from "../../components/movie-list/MovieList";
import Paginations from "../../components/pagination/Paginations.jsx";


const Search = () => {
    const [searchMovies, setSearchMovies] = useState()
    const navigate = useNavigate()
    let [searchParams] = useSearchParams('');
    let keyword = searchParams.get('keyword')
    let currentPage = parseInt(searchParams.get('page')) || 1

    const onPageChange = (page) => {
        navigate(`/tim-kiem?keyword=${keyword}&page=${page}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            const apiSearch = await ApiSearch({ slug: keyword, page: currentPage })
            setSearchMovies(apiSearch)
        }
        document.title = "Search";
        fetchData()
    }, [keyword, currentPage])
    console.log('data search: ', searchMovies)
    return (
        <>
            <div className="container mt-2">
                <MovieList searchMovies={searchMovies} />
                <Paginations
                    currentPage={currentPage}
                    totalPages={searchMovies?.data?.params?.pagination?.totalPages}
                    onPageChange={onPageChange} />
            </div>
        </>
    )
}

export default Search;