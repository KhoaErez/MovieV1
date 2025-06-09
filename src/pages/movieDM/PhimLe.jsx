import MovieList from "../../components/movie-list/MovieList"
import { ApiPhimLe } from "../../api/Axios.jsx"
import { useEffect, useState } from "react"

const PhimLe = () => {

    const [movie, setMovies] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const api = await ApiPhimLe()
            setMovies(api)
        }
        fetchData()
    }, [])

    return (
        <MovieList phimLe={movie} />
    )
}

export default PhimLe