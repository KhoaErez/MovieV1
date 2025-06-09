import { useLocation } from 'react-router-dom';
import image from '../../assets/Screenshot 2025-05-16 214547.png';
import Paginations from '../pagination/Pagination';

const MovieList = () => {
    let location = useLocation();
    const key = location.pathname;

    console.log(key);
    return (
        <div className="movie-list container">
            {/* <div>{key === '/phim-le' ? 'Danh sách phim lẻ' : key === '/phim-bo' ? 'Danh sách phim bộ' : 'Danh sách phim hoạt hình'}</div> */}
            <div className="row">
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
            </div>
            <div className="row">
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
            </div>
            <div className="row">
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
                <div className="divImg col-sm-6 col-md-3 col-xl-3"><img src={image} className="img-rounded" alt="Cinque Terre" width="304" height="236" /> </div>
            </div>

        </div>
    )
}

export default MovieList;