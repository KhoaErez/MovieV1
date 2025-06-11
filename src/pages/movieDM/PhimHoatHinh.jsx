import MovieList from "../../components/movie-list/MovieList"
import { ApiPhimHoatHinh } from "../../api/Axios.jsx"
import { useEffect, useState } from "react"
import Paginations from "../../components/pagination/Paginations.jsx"
import { useNavigate, useSearchParams } from "react-router-dom"

const PhimLe = () => {

    const [movie, setMovies] = useState({})
    const navigate = useNavigate()
    let [param] = useSearchParams()

    let currentPage = parseInt(param.get('page')) || 1

    const onPageChange = (page) => {
        navigate(`/phim-hoat-hinh?page=${page}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            const api = await ApiPhimHoatHinh({ page: currentPage })
            setMovies(api)
        }
        document.title = "Phim Hoạt Hình";

        fetchData()
    }, [currentPage])

    return (
        <>
            <MovieList phimHoatHinh={movie} />
            <Paginations
                currentPage={currentPage}
                totalPages={movie?.data?.params?.pagination?.totalPages}
                onPageChange={onPageChange} />
        </>
    )
}

export default PhimLe