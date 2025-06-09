import MovieList from "../../components/movie-list/MovieList"
import { ApiPhimBo } from "../../api/Axios.jsx"
import { useEffect, useState } from "react"

const PhimBo = () => {

    const [movie, setMovies] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const api = await ApiPhimBo()
            setMovies(api)
        }
        fetchData()
    }, [])

    return (
        <MovieList phimBo={movie} />
    )
}

export default PhimBo