import MovieList from "../../components/movie-list/MovieList";
import { ApiTheLoai } from '../../api/Axios.jsx';
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Paginations from "../../components/pagination/Paginations.jsx";

const GenreList = () => {
    const [categoryMovies, setCategoryMovies] = useState()
    const navigate = useNavigate()
    let param = useParams()
    let [paramPage] = useSearchParams()

    let currentPage = parseInt(paramPage.get('page')) || 1

    const onPageChange = (page) => {
        navigate(`/the-loai/${param.id}?page=${page}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            const apiTheLoai = await ApiTheLoai({ theloai: param.id, page: currentPage })
            setCategoryMovies(apiTheLoai)
        }
        document.title = "Thể loại";

        fetchData()
    }, [param, currentPage])

    return (
        <>
            <MovieList categoryMovies={categoryMovies} />
            <Paginations
                currentPage={currentPage}
                totalPages={categoryMovies?.data?.params?.pagination?.totalPages}
                onPageChange={onPageChange} />
        </>
    )
}

export default GenreList;