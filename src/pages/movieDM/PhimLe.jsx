import MovieList from "../../components/movie-list/MovieList"
import { ApiPhimLe } from "../../api/Axios.jsx"
import { useEffect, useState } from "react"
import Paginations from "../../components/pagination/Paginations.jsx"
import { useNavigate, useSearchParams } from "react-router-dom"

const PhimLe = () => {

    const [movie, setMovies] = useState({})
    let [param] = useSearchParams('')
    const navigate = useNavigate()

    let currentPage = parseInt(param.get('page')) || 1

    useEffect(() => {
        const fetchData = async () => {
            const api = await ApiPhimLe({ page: currentPage })
            setMovies(api)
        }
        document.title = "Phim Lẻ";

        fetchData()
    }, [currentPage])

    const handlePageChange = (page) => {
        navigate(`/phim-le?page=${page}`)
    }

    return (
        <>
            <MovieList phimLe={movie} />

            <Paginations
                currentPage={currentPage}
                totalPages={movie?.paginate?.total_page}
                onPageChange={handlePageChange}
            />
        </>

    )
}

export default PhimLe