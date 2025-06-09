import MovieList from "../../components/movie-list/MovieList";
import { ApiTheLoai } from '../../api/Axios.jsx';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GenreList = () => {
    const [categoryMovies, setCountryMovies] = useState()
    let param = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const apiTheLoai = await ApiTheLoai({ theloai: param.id })
            setCountryMovies(apiTheLoai)
        }
        document.title = "Thể loại";

        fetchData()
    }, [param])

    return (
        <MovieList categoryMovies={categoryMovies} />
    )
}

export default GenreList;