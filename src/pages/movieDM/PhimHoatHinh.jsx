import MovieList from "../../components/movie-list/MovieList"
import { ApiPhimHoatHinh } from "../../api/Axios.jsx"
import { useEffect, useState } from "react"

const PhimLe = () => {

    const [movie, setMovies] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const api = await ApiPhimHoatHinh()
            setMovies(api)
        }
        document.title = "Phim Hoạt Hình";

        fetchData()
    }, [])
    return (
        <MovieList phimHoatHinh={movie} />
    )
}

export default PhimLe