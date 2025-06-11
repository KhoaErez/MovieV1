import MovieList from "../../components/movie-list/MovieList"
import { ApiPhimBo } from "../../api/Axios.jsx"
import { useEffect, useState } from "react"
import Paginations from "../../components/pagination/Paginations.jsx"
import { useNavigate, useSearchParams } from "react-router-dom"

const PhimBo = () => {

    const [movie, setMovies] = useState({})
    const navigate = useNavigate()
    let [param] = useSearchParams('')

    let currentPage = parseInt(param.get('page')) || 1

    const onPageChange = (page) => {
        navigate(`/phim-bo?page=${page}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            const api = await ApiPhimBo({ page: currentPage })
            setMovies(api)
        }
        document.title = "Phim Bộ";

        fetchData()
    }, [currentPage])
    // console.log('data phim bo: ', movie)
    return (
        <>
            <MovieList phimBo={movie} />
            <Paginations
                currentPage={currentPage}
                totalPages={movie?.data?.params?.pagination?.totalPages}
                onPageChange={onPageChange} />
        </>
    )
}

export default PhimBo