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
        document.title = "Search";
        fetchData()
    }, [keyword])

    return (
        <>
            <div className="container mt-2">

                <MovieList searchMovies={searchMovies} />
            </div>
        </>
    )
}

export default Search;