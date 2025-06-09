import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/movie-list/MovieList";
import { ApiSearch } from '../../api/Axios.jsx'
import { useEffect, useState } from "react";

const Search = () => {
    const [searchMovies, setSearchMovies] = useState()
    let [searchParams] = useSearchParams('');
    const keyword = searchParams.get('keyword')
    useEffect(() => {
        const fetchData = async () => {
            const apiSearch = await ApiSearch(keyword)
            setSearchMovies(apiSearch)
        }
        fetchData()
    }, [keyword])

    return (
        <>
            <div className="container">
                <h4 className="mt-3">Kết quả tìm kiếm cho: <span style={{ color: 'red' }}>{keyword}</span></h4>
                <MovieList searchMovies={searchMovies} />
            </div>
        </>
    )
}

export default Search;